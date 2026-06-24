import { defineConfig, envField } from 'astro/config'
import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://ryzeon.me',
  adapter: vercel(),
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
        default: 'contact@ryzeon.dev',
      }),
      CONTACT_FROM: envField.string({
        context: 'server',
        access: 'public',
        default: 'Portafolio <portfolio@ryzeon.dev>',
      }),
    },
  },
})
