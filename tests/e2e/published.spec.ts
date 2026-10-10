import { expect, test } from '@playwright/test'

const pages = [
  { name: 'home', route: '', robots: 'index, follow' },
  { name: 'services', route: 'services/', robots: 'index, follow' },
  { name: 'seo-geo-audit', route: 'services/seo-geo-audit/', robots: 'index, follow' },
  { name: 'geo', route: 'services/geo/', robots: 'index, follow' },
  { name: 'seo', route: 'services/seo/', robots: 'index, follow' },
  { name: 'website-development', route: 'services/website-development/', robots: 'index, follow' },
  { name: 'content-strategy', route: 'services/content-strategy/', robots: 'index, follow' },
  { name: 'mini-program', route: 'services/mini-program/', robots: 'index, follow' },
  { name: 'insights', route: 'insights/', robots: 'index, follow' },
  { name: 'what-is-geo', route: 'insights/what-is-geo/', robots: 'index, follow' },
  { name: 'seo-vs-geo', route: 'insights/seo-vs-geo/', robots: 'index, follow' },
  { name: 'geo-pricing', route: 'insights/geo-pricing/', robots: 'index, follow' },
  { name: 'geo-measurement', route: 'insights/geo-measurement/', robots: 'index, follow' },
  { name: 'why-ai-does-not-cite', route: 'insights/why-ai-does-not-cite-website/', robots: 'index, follow' },
  { name: 'about', route: 'about/', robots: 'index, follow' },
  { name: 'consult', route: 'consult/', robots: 'noindex, follow' },
]

for (const item of pages) {
  test(`${item.name}: published metadata, rendered content and screenshot`, async ({ page }, testInfo) => {
    const consoleErrors: string[] = []
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()) })
    page.on('pageerror', error => consoleErrors.push(error.message))

    await page.goto(item.route, { waitUntil: 'networkidle' })
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', item.robots)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`/souheng/${item.route}$`))
    await expect(page.locator('header.site-header')).toBeVisible()
    await expect(page.locator('footer.footer')).toBeVisible()
    await expect(page.locator('body')).toContainText('搜衡科技')
    await expect(page.locator('body')).not.toContainText(/智域增长|Fixture/)

    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents()
    expect(schemas.length).toBeGreaterThanOrEqual(1)
    schemas.forEach(value => expect(() => JSON.parse(value)).not.toThrow())
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    expect(overflow).toBeLessThanOrEqual(1)
    expect(consoleErrors).toEqual([])

    const output = `output/playwright/p3/${testInfo.project.name}/${item.name}`
    await page.screenshot({ path: `${output}-fold.png` })
    await page.screenshot({ path: `${output}-full.png`, fullPage: true })
  })
}

test('mobile navigation reaches the published service index', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-390', 'mobile-only interaction')
  await page.goto('', { waitUntil: 'networkidle' })
  const button = page.getByRole('button', { name: '打开主导航' })
  await button.click()
  await page.getByRole('link', { name: '服务能力' }).click()
  await expect(page).toHaveURL(/\/souheng\/services\/$/)
})

test('wechat consultation dialog is keyboard accessible', async ({ page }, testInfo) => {
  await page.goto('services/website-development/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: '申请 SEO/GEO 初步诊断' }).first().click()
  await expect(page.getByRole('dialog', { name: '微信咨询' })).toBeVisible()
  const consultQr = page.locator('img[alt="搜衡科技客户微信咨询二维码"]')
  await expect(consultQr).toBeVisible()
  await expect(consultQr).toHaveAttribute('src', /\/souheng\/image\/wechat-consult\.jpg$/)
  expect(await consultQr.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0 && image.naturalHeight > 0)).toBe(true)
  await page.screenshot({ path: `output/playwright/p3.1/${testInfo.project.name}/wechat-consult-dialog.png` })
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog', { name: '微信咨询' })).toHaveCount(0)
})

test('official account QR is rendered with a GitHub Pages-safe path', async ({ page }) => {
  await page.goto('about/', { waitUntil: 'networkidle' })
  const officialQr = page.locator('img[alt="搜衡科技微信公众号二维码"]').first()
  await expect(officialQr).toBeVisible()
  await expect(officialQr).toHaveAttribute('src', /\/souheng\/image\/wechat-official\.png$/)
  expect(await officialQr.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth === 576 && image.naturalHeight === 572)).toBe(true)
})

test('sitemap contains published routes but excludes consult and fixtures', async ({ request }) => {
  const response = await request.get('sitemap.xml')
  const xml = await response.text()
  expect(response.ok()).toBe(true)
  expect(xml).toContain('/services/seo-geo-audit/')
  expect(xml).toContain('/services/website-development/')
  expect(xml).toContain('/insights/what-is-geo/')
  expect(xml).not.toContain('/consult/')
  expect(xml).not.toContain('__fixtures__')
})
