import { defineConfig, envField } from 'astro/config'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://ryzeon.me',
  adapter: vercel(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-PE', en: 'en-US' },
      },
    }),
  ],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      CONTACT_TO: envField.string({
        context: 'server',
        access: 'public',
        default: 'aavilaasto@gmail.com',
      }),
      CONTACT_FROM: envField.string({
        context: 'server',
        access: 'public',
        default: 'Portafolio <portfolio@ryzeon.dev>',
      }),
    },
  },
})
