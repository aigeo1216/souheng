import { indexablePages } from '../../app/data/published'
import { brand } from '../../app/config/brand'

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, character => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character]!)
}

function absoluteUrl(route: string) {
  return new URL(route.replace(/^\//, ''), brand.seo.siteUrl).toString()
}

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  const entries = indexablePages.map((page) => {
    const lastmod = page.updatedAt || page.reviewedAt
    return `<url><loc>${escapeXml(absoluteUrl(page.route!))}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
  }).join('')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>\n`
})
