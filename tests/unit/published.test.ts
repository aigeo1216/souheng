import { describe, expect, it } from 'vitest'
import { indexablePages, insights, publicPages, services } from '~/data/published'
import { brand } from '~/config/brand'

describe('published content model', () => {
  it('contains the approved initial service and article coverage', () => {
    expect(services).toHaveLength(6)
    expect(insights).toHaveLength(5)
    expect(services.every(page => page.status === 'published' && page.indexable)).toBe(true)
    expect(insights.every(page => page.status === 'published' && page.faq && page.faq.length >= 3)).toBe(true)
  })

  it('keeps routes, titles and metadata unique', () => {
    expect(new Set(publicPages.map(page => page.route)).size).toBe(publicPages.length)
    expect(new Set(publicPages.map(page => page.title)).size).toBe(publicPages.length)
    expect(indexablePages.every(page => page.status === 'published' && page.indexable)).toBe(true)
  })

  it('uses one brand source and does not publish a contact channel before configuration', () => {
    expect(brand.name).toBe('搜衡科技')
    expect(brand.contact.email).toBe('')
    expect(brand.contact.phone).toBe('')
    expect(brand.analytics.measurementId).toBe('')
  })
})
