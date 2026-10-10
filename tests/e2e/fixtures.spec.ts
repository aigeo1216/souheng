import { expect, test } from '@playwright/test'

const fixtures = [
  'home', 'service-list', 'service-detail', 'insight-list', 'article-detail',
  'case-list', 'case-detail', 'about', 'consult',
]

for (const slug of fixtures) {
  test(`${slug}: metadata, layout, schema and screenshot`, async ({ page }, testInfo) => {
    const consoleErrors: string[] = []
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()) })
    page.on('pageerror', error => consoleErrors.push(error.message))

    await page.goto(`__fixtures__/${slug}/`, { waitUntil: 'networkidle' })
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`/souheng/__fixtures__/${slug}/$`))
    await expect(page.locator('header.site-header')).toBeVisible()
    await expect(page.locator('footer.footer')).toBeVisible()

    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents()
    expect(schemas.length).toBeGreaterThanOrEqual(2)
    schemas.forEach(value => expect(() => JSON.parse(value)).not.toThrow())

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    expect(overflow).toBeLessThanOrEqual(1)
    expect(consoleErrors).toEqual([])

    const output = `output/p2-visual/${testInfo.project.name}/${slug}`
    await page.screenshot({ path: `${output}-fold.png` })
    await page.screenshot({ path: `${output}-full.png`, fullPage: true })
  })
}

test('mobile menu is operable', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-390', 'mobile-only interaction')
  await page.goto('__fixtures__/home/', { waitUntil: 'networkidle' })
  const button = page.getByRole('button', { name: '打开主导航' })
  await button.click()
  await expect(button).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByRole('navigation', { name: '移动端主导航' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(button).toHaveAttribute('aria-expanded', 'false')
})

test('sitemap excludes fixture routes', async ({ request }) => {
  const response = await request.get('sitemap.xml')
  expect(response.ok()).toBe(true)
  expect(await response.text()).not.toContain('__fixtures__')
})
