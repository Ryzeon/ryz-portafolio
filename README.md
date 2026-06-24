<h1 align="center">ryz-portafolio</h1>

<p align="center">
  Portafolio personal de <strong>Alex Avila Asto</strong> — Software Engineer.<br />
  SPA estática, bilingüe y neo-brutalista, con formulario de contacto serverless.
</p>

<p align="center">
  <a href="https://ryzeon.me"><img alt="Live" src="https://img.shields.io/badge/live-ryzeon.me-ff6b4a?style=flat-square" /></a>
  <img alt="Astro" src="https://img.shields.io/badge/Astro-5-161310?style=flat-square&logo=astro" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/deploy-Vercel-000?style=flat-square&logo=vercel" />
</p>

---

## Características

- **Bilingüe (ES/EN)** mediante enrutado i18n de Astro — `/` en español, `/en` en inglés.
- **Diseño neo-brutalista** con switcher de paleta en vivo (persistido en `localStorage`).
- **Formulario de contacto** sobre un endpoint serverless que envía con [Resend](https://resend.com), con honeypot anti-spam y validación.
- **SEO completo**: Open Graph, Twitter Card, `hreflang`, canonical, JSON-LD (`Person`), `sitemap` y `robots.txt`.
- **Accesible y responsive**: layout fluido por CSS, foco visible, soporte de `prefers-reduced-motion`.
- **Detalles**: previsualización de los CV en hover y atajo `⌘/Ctrl + S` para abrir el CV.

## Stack

| Capa        | Tecnología                          |
| ----------- | ----------------------------------- |
| Framework   | Astro 5 (output estático + SSR)     |
| Lenguaje    | TypeScript (modo estricto)          |
| Estilos     | CSS con scope por componente        |
| Email       | Resend                              |
| Hosting     | Vercel (adaptador `@astrojs/vercel`)|

## Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run check    # chequeo de tipos
```

> Requiere Node.js 20 o superior.

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

| Variable         | Descripción                              | Por defecto                         |
| ---------------- | ---------------------------------------- | ----------------------------------- |
| `RESEND_API_KEY` | API key de Resend (requerida)            | —                                   |
| `CONTACT_TO`     | Correo que recibe los mensajes           | `aavilaasto@gmail.com`              |
| `CONTACT_FROM`   | Remitente (dominio verificado en Resend) | `Alex Avila <no-reply@ryzeon.dev>`  |

## Estructura

```
src/
  components/   secciones y piezas de UI (Nav, Hero, Work, Contact…)
  data/         contenido del portafolio (tipado)
  i18n/         diccionarios ES/EN
  layouts/      layout base con metadata SEO
  pages/        rutas (es en /, en en /en) y endpoint /api/contact
  styles/       tokens y estilos globales
```

## Despliegue

Cada push a `main` dispara un despliegue automático en Vercel. Las variables de
entorno se gestionan desde el panel de Vercel o con `vercel env add`.

## Licencia

© Alex Avila Asto. Todos los derechos reservados.
