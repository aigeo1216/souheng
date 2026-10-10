import type { FixturePage } from '~/types/content'
import { brand } from '~/config/brand'

function cleanBase(value: string) { return value.endsWith('/') ? value : `${value}/` }

export function buildCanonical(siteUrl: string, routePath: string) {
  const relative = routePath.replace(/^\/+/, '')
  return new URL(relative, cleanBase(siteUrl)).toString()
}

export function usePageSeo(page: FixturePage) {
  const config = useRuntimeConfig()
  const canonical = buildCanonical(config.public.siteUrl, page.route || useRoute().path)
  const robots = page.status === 'published' && page.indexable
    ? 'index, follow'
    : page.status === 'fixture' ? 'noindex, nofollow' : 'noindex, follow'

  useSeoMeta({
    title: page.title,
    description: page.description,
    robots,
    ogTitle: page.title,
    ogDescription: page.description,
    ogType: page.template === 'article-detail' ? 'article' : 'website',
    ogUrl: canonical,
  })
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': schemaTypeFor(page.template),
    name: page.h1,
    description: page.description,
    url: canonical,
    ...(page.publishedAt ? { datePublished: page.publishedAt } : {}),
    ...(page.updatedAt ? { dateModified: page.updatedAt } : {}),
    ...(page.author ? { author: { '@type': 'Organization', name: page.author } } : {}),
    ...((page.template === 'service-list' || page.template === 'insight-list') && page.items ? {
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: page.items.map((item, index) => ({
          '@type': 'ListItem', position: index + 1, name: item.title,
          ...(item.path ? { url: buildCanonical(config.public.siteUrl, item.path) } : {}),
        })),
      },
    } : {}),
    isPartOf: { '@type': 'WebSite', name: config.public.siteName, url: config.public.siteUrl },
  }
  const scripts = [{ key: 'page-jsonld', type: 'application/ld+json', innerHTML: JSON.stringify(pageSchema) }]
  if (page.breadcrumbs.length) {
    scripts.push({
      key: 'breadcrumb-jsonld', type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: page.breadcrumbs.map((item, index) => ({
          '@type': 'ListItem', position: index + 1, name: item.label,
          ...(item.path ? { item: buildCanonical(config.public.siteUrl, item.path) } : {}),
        })),
      }),
    })
  }
  if (page.template === 'home') {
    scripts.push({
      key: 'organization-jsonld', type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'ProfessionalService', name: brand.name,
        alternateName: brand.englishName, description: brand.description, url: config.public.siteUrl,
      }),
    })
  }
  if (page.faq?.length) {
    scripts.push({
      key: 'faq-jsonld', type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: page.faq.map(item => ({
          '@type': 'Question', name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }),
    })
  }
  useHead({
    link: [{ rel: 'canonical', href: canonical }],
    script: scripts as never,
  })
}

function schemaTypeFor(template: FixturePage['template']) {
  return ({
    home: 'WebPage', 'service-list': 'CollectionPage', 'service-detail': 'Service',
    'insight-list': 'CollectionPage', 'article-detail': 'Article', 'case-list': 'CollectionPage',
    'case-detail': 'CreativeWork', about: 'AboutPage', consult: 'ContactPage',
  } as const)[template]
}
