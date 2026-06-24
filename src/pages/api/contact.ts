import type { APIRoute } from 'astro'
import { CONTACT_FROM, CONTACT_TO, RESEND_API_KEY } from 'astro:env/server'

export const prerender = false

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE_LENGTH = 5000

interface ContactPayload {
  name?: string
  email?: string
  message?: string
  company?: string
}

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
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

  if (!name || !email || !message) {
    return json({ error: 'missing_fields' }, 422)
  }
  if (!EMAIL_PATTERN.test(email)) {
    return json({ error: 'invalid_email' }, 422)
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return json({ error: 'message_too_long' }, 422)
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject: `Portafolio · ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    }),
  })

  if (!response.ok) {
    return json({ error: 'send_failed' }, 502)
  }

  return json({ ok: true }, 200)
}
