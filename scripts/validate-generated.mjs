import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve('.output/public')
const base = '/geo-consulting-website/'
const indexableRoutes = [
  '/', '/services/', '/services/seo-geo-audit/', '/services/geo/', '/services/seo/', '/services/website-development/', '/services/content-strategy/', '/services/mini-program/',
  '/insights/', '/insights/what-is-geo/', '/insights/seo-vs-geo/', '/insights/geo-pricing/', '/insights/geo-measurement/',
  '/insights/why-ai-does-not-cite-website/', '/about/',
]
const noindexRoutes = ['/consult/']
const failures = []

function outputFile(route) {
  const relative = route.replace(/^\/+|\/+$/g, '')
  return relative ? resolve(root, relative, 'index.html') : resolve(root, 'index.html')
}

async function validateRoute(route, expectedRobots) {
  const label = route === '/' ? 'home' : route
  try {
    const html = await readFile(outputFile(route), 'utf8')
    const canonical = `https://aigeo1216.github.io${base}${route.replace(/^\//, '')}`
    if (!html.includes(`content="${expectedRobots}"`)) failures.push(`${label}: robots missing or incorrect`)
    if (!html.includes(`rel="canonical" href="${canonical}"`)) failures.push(`${label}: canonical missing`)
    if (!html.includes('application/ld+json')) failures.push(`${label}: JSON-LD missing`)
    if (!/<h1[\s>]/.test(html)) failures.push(`${label}: H1 missing`)
    if (!html.includes('搜衡科技')) failures.push(`${label}: brand marker missing`)
    if (/智域增长|Fixture/.test(html)) failures.push(`${label}: test brand leaked`)
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1])
    for (const href of hrefs) {
      if (!href.startsWith(base) || href.includes('/_nuxt/') || href.includes('_payload.json') || href.includes('#')) continue
      const relative = href.slice(base.length).replace(/^\/+|\/+$/g, '')
      const targets = relative
        ? [resolve(root, relative), resolve(root, relative, 'index.html')]
        : [resolve(root, 'index.html')]
      try {
        await Promise.any(targets.map(target => stat(target)))
      } catch {
        failures.push(`${label}: broken internal link ${href}`)
      }
    }
  } catch (error) { failures.push(`${label}: generated HTML missing (${error.message})`) }
}

for (const route of indexableRoutes) await validateRoute(route, 'index, follow')
for (const route of noindexRoutes) await validateRoute(route, 'noindex, follow')

try {
  const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8')
  for (const route of indexableRoutes) {
    const url = `https://aigeo1216.github.io${base}${route.replace(/^\//, '')}`
    if (!sitemap.includes(`<loc>${url}</loc>`)) failures.push(`sitemap: missing ${route}`)
  }
  for (const route of [...noindexRoutes, '/__fixtures__/home/']) {
    if (sitemap.includes(route)) failures.push(`sitemap: excluded route leaked ${route}`)
  }
  await stat(resolve(root, '.nojekyll'))
  const publicEntries = await readdir(root)
  if (publicEntries.includes('__fixtures__')) failures.push('public output: fixture route leaked')
} catch (error) { failures.push(`static infrastructure missing (${error.message})`) }

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`Validated ${indexableRoutes.length} indexable and ${noindexRoutes.length} noindex published routes; fixture exclusion passed.`)
