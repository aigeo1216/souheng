import { describe, expect, it } from 'vitest'
import { fixtures } from '~/data/fixtures'
import { buildCanonical } from '~/composables/usePageSeo'

describe('fixture content model', () => {
  it('contains exactly nine unique templates', () => {
    const pages = Object.values(fixtures)
    expect(pages).toHaveLength(9)
    expect(new Set(pages.map(page => page.template)).size).toBe(9)
    expect(pages.every(page => page.h1 && page.title && page.description)).toBe(true)
  })

  it('builds canonical URLs below the GitHub Pages project path', () => {
    expect(buildCanonical(
      'https://aigeo1216.github.io/geo-consulting-website/',
      '/__fixtures__/home/',
    )).toBe('https://aigeo1216.github.io/geo-consulting-website/__fixtures__/home/')
  })
})
