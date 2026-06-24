import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://ryzeon.github.io',
  base: '/ryz-portafolio',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
