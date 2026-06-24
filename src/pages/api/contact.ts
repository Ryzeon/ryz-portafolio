import type { APIRoute } from 'astro'
import { CONTACT_FROM, CONTACT_TO, RESEND_API_KEY } from 'astro:env/server'

export const prerender = false

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE_LENGTH = 5000
const RESEND_ENDPOINT = 'https://api.resend.com/emails'

interface ContactPayload {
  name?: string
  email?: string
  message?: string
  company?: string
  lang?: string
}

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"]/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char] ?? char,
  )
}

function sendEmail(payload: Record<string, unknown>): Promise<Response> {
  return fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

function autoReply(name: string, isEn: boolean): { subject: string; html: string; text: string } {
  const safeName = escapeHtml(name)
  const subject = isEn ? `Got your message, ${name} 👋` : `Recibí tu mensaje, ${name} 👋`
  const greeting = isEn ? `Hi ${safeName}` : `¡Hola ${safeName}`
  const body = isEn
    ? "Thanks for reaching out. I got your message and I'll get back to you very soon."
    : 'Gracias por escribir. Recibí tu mensaje y te responderé muy pronto.'
  const ps = isEn
    ? 'Meanwhile, feel free to explore my CV and projects at ryzeon.me.'
    : 'Mientras tanto, puedes ver mi CV y proyectos en ryzeon.me.'
  const role = 'Software Engineer · Backend · Cloud · DevOps'

  const html = `<div style="margin:0;padding:24px;background:#f7f1e3;font-family:Arial,Helvetica,sans-serif;color:#161310">
  <div style="max-width:480px;margin:0 auto;background:#fffdf6;border:3px solid #161310">
    <div style="background:#ffd23f;border-bottom:3px solid #161310;padding:16px 24px;font-size:18px;font-weight:800;letter-spacing:-0.5px">ALEX.AVILA</div>
    <div style="padding:24px">
      <p style="font-size:16px;margin:0 0 14px">${greeting} 👋</p>
      <p style="font-size:14px;line-height:1.6;margin:0 0 14px">${body}</p>
      <p style="font-size:14px;line-height:1.6;margin:0 0 24px">${ps}</p>
      <div style="border-top:2px solid #161310;padding-top:16px">
        <div style="font-size:15px;font-weight:800">Alex Avila Asto</div>
        <div style="font-size:12px;color:#555;margin-top:2px">${role}</div>
        <div style="margin-top:10px;font-size:13px">
          <a href="https://ryzeon.me" style="color:#161310;font-weight:700;text-decoration:none;border-bottom:2px solid #ffd23f">ryzeon.me</a>
          &nbsp;·&nbsp;
          <a href="https://github.com/Ryzeon" style="color:#161310;text-decoration:none">GitHub</a>
          &nbsp;·&nbsp;
          <a href="https://linkedin.com/in/alex-avila-asto" style="color:#161310;text-decoration:none">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</div>`

  const text = `${greeting}\n\n${body}\n${ps}\n\n— Alex Avila Asto\n${role}\nryzeon.me · github.com/Ryzeon · linkedin.com/in/alex-avila-asto`

  return { subject, html, text }
}

export const POST: APIRoute = async ({ request }) => {
  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return json({ error: 'invalid_request' }, 400)
  }

  // Honeypot: real users never fill this hidden field.
  if (payload.company) {
    return json({ ok: true }, 200)
  }

  const name = payload.name?.trim() ?? ''
  const email = payload.email?.trim() ?? ''
  const message = payload.message?.trim() ?? ''
  const isEn = payload.lang === 'en'

  if (!name || !email || !message) {
    return json({ error: 'missing_fields' }, 422)
  }
  if (!EMAIL_PATTERN.test(email)) {
    return json({ error: 'invalid_email' }, 422)
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return json({ error: 'message_too_long' }, 422)
  }

  // Notify the owner. This is the critical send.
  const notification = await sendEmail({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    reply_to: email,
    subject: `Portafolio · ${name}`,
    text: `${message}\n\n— ${name} <${email}>`,
  })

  if (!notification.ok) {
    return json({ error: 'send_failed' }, 502)
  }

  // Confirmation auto-reply to the visitor. Best-effort; never fails the request.
  try {
    const reply = autoReply(name, isEn)
    await sendEmail({
      from: CONTACT_FROM,
      to: [email],
      reply_to: CONTACT_TO,
      subject: reply.subject,
      html: reply.html,
      text: reply.text,
    })
  } catch {
    // Ignore: the message was already delivered to the owner.
  }

  return json({ ok: true }, 200)
}
