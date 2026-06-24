# ryz-portafolio

Portafolio personal de Alex Avila construido con [Astro](https://astro.build).
Sitio estático bilingüe (ES/EN) con un endpoint serverless para el formulario de
contacto vía [Resend](https://resend.com), desplegado en Vercel.

## Requisitos

- Node.js 20 o superior

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # entorno de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run check    # chequeo de tipos
```

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

| Variable          | Descripción                                  | Por defecto                        |
| ----------------- | -------------------------------------------- | ---------------------------------- |
| `RESEND_API_KEY`  | API key de Resend (requerida)                | —                                  |
| `CONTACT_TO`      | Correo que recibe los mensajes               | `contact@ryzeon.dev`               |
| `CONTACT_FROM`    | Remitente (dominio verificado en Resend)     | `Portafolio <portfolio@ryzeon.dev>`|

## Estructura

```
src/
  components/   secciones y piezas de UI
  data/         contenido del portafolio
  i18n/         diccionarios ES/EN
  layouts/      layout base
  pages/        rutas (es en /, en en /en) y endpoint /api/contact
  styles/       tokens y estilos globales
```
