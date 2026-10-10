export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  const config = useRuntimeConfig(event)
  const base = config.app.baseURL.endsWith('/') ? config.app.baseURL : `${config.app.baseURL}/`
  return `User-agent: *\nDisallow: ${base}__fixtures__/\nSitemap: ${config.public.siteUrl}sitemap.xml\n`
})
