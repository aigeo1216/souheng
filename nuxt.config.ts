import tailwindcss from '@tailwindcss/vite'
import { brand } from './app/config/brand'

const baseURL = process.env.NUXT_APP_BASE_URL || '/souheng/'
const fixtureRoutes = [
  'home',
  'service-list',
  'service-detail',
  'insight-list',
  'article-detail',
  'case-list',
  'case-detail',
  'about',
  'consult',
].map(slug => `/__fixtures__/${slug}/`)
const publishedRoutes = [
  '/', '/services/', '/services/seo-geo-audit/', '/services/geo/', '/services/seo/', '/services/website-development/', '/services/content-strategy/', '/services/mini-program/',
  '/insights/', '/insights/what-is-geo/', '/insights/seo-vs-geo/', '/insights/geo-pricing/',
  '/insights/geo-measurement/', '/insights/why-ai-does-not-cite-website/', '/about/', '/consult/',
]

export default defineNuxtConfig({
  compatibilityDate: '2026-10-10',
  devtools: { enabled: false },
  ssr: true,
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || brand.seo.siteUrl,
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || brand.name,
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || '',
      contactPhone: process.env.NUXT_PUBLIC_CONTACT_PHONE || '',
      analyticsProvider: process.env.NUXT_PUBLIC_ANALYTICS_PROVIDER || 'none',
      analyticsId: process.env.NUXT_PUBLIC_ANALYTICS_ID || '',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
      routes: ['/', '/robots.txt', '/sitemap.xml', ...publishedRoutes, ...(process.env.NUXT_INCLUDE_FIXTURES === 'true' ? fixtureRoutes : [])],
    },
  },
  typescript: { typeCheck: true, strict: true },
})
