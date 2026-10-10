export type TemplateKey =
  | 'home'
  | 'service-list'
  | 'service-detail'
  | 'insight-list'
  | 'article-detail'
  | 'case-list'
  | 'case-detail'
  | 'about'
  | 'consult'

export interface BreadcrumbItem { label: string; path?: string }
export type ContentStatus = 'fixture' | 'draft' | 'review' | 'published'
export interface EvidenceSource { label: string; url: string; accessedAt: string }
export interface ContentSection {
  heading: string
  body?: string[]
  bullets?: string[]
  steps?: Array<{ title: string; detail: string }>
  table?: { columns: string[]; rows: string[][] }
}
export interface CardItem {
  slug: string
  path?: string
  title: string
  summary: string
  category?: string
  date?: string
  eyebrow?: string
  tags?: string[]
}
export interface CtaData { heading: string; body: string; label: string; path: string }
export interface FaqItem { question: string; answer: string }
export interface FixturePage {
  template: TemplateKey
  slug: string
  title: string
  description: string
  h1: string
  eyebrow?: string
  subtitle?: string
  breadcrumbs: BreadcrumbItem[]
  categories?: string[]
  activeCategory?: string
  items?: CardItem[]
  related?: CardItem[]
  sections?: ContentSection[]
  faq?: FaqItem[]
  cta?: CtaData
  publishedAt?: string
  updatedAt?: string
  author?: string
  industry?: string
  verificationStatus?: string
  contactMethods?: Array<{ label: string; value: string; href?: string }>
  id?: string
  route?: string
  status?: ContentStatus
  indexable?: boolean
  category?: string
  intent?: string
  targetAudience?: string[]
  primaryTopic?: string
  relatedServices?: string[]
  relatedArticles?: string[]
  reviewedAt?: string
  evidenceSources?: EvidenceSource[]
  summary?: string
  caseItems?: CardItem[]
  insightItems?: CardItem[]
  brandMark?: string
}
