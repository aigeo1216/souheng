import rawPages from '../../content/published-pages.json'
import type { CardItem, FixturePage } from '~/types/content'

const pages = rawPages as FixturePage[]
const published = pages.filter(page => page.status === 'published')

export const services = published.filter(page => page.template === 'service-detail')
export const insights = published.filter(page => page.template === 'article-detail')
export const sitePages = published.filter(page => page.template === 'home' || page.template === 'about' || page.template === 'consult')

function toCard(page: FixturePage): CardItem {
  return { slug: page.slug, path: page.route, title: page.h1, summary: page.description, category: page.category, date: page.publishedAt }
}

export const serviceListPage: FixturePage = {
  id: 'services-index', template: 'service-list', status: 'published', indexable: true, route: '/services/', slug: 'services',
  title: 'AI 搜索增长与企业数字化服务｜搜衡科技', description: '了解搜衡科技的 SEO/GEO 优化、企业官网建设、内容矩阵运营、小程序开发与搜索可见性咨询服务。',
  h1: 'AI 搜索增长与企业数字化服务', subtitle: '围绕搜索可见性、官网建设、内容运营与小程序服务，按真实业务问题确定工作范围。',
  breadcrumbs: [{ label: '首页', path: '/' }, { label: '服务能力' }], categories: ['全部', 'SEO/GEO 优化', '官网建设', '内容运营', '小程序服务'], activeCategory: '全部',
  items: services.map(toCard),
  cta: { heading: '先判断问题，再确定优化方向', body: '扫码添加微信，沟通 SEO/GEO、官网建设与小程序服务需求。', label: '申请 SEO/GEO 初步诊断', path: '/consult/' },
  primaryTopic: 'AI 搜索增长与企业数字化服务', reviewedAt: '2026-10-10',
}

export const insightListPage: FixturePage = {
  id: 'insights-index', template: 'insight-list', status: 'published', indexable: true, route: '/insights/', slug: 'insights',
  title: 'SEO/GEO 知识中心｜搜衡科技', description: '阅读搜衡科技关于 GEO、企业 SEO、内容策略与 AI 搜索认知的原创决策型文章。',
  h1: 'SEO/GEO 知识中心', subtitle: '围绕企业在搜索与 AI 时代的真实判断问题，提供有边界、有来源的原创内容。',
  breadcrumbs: [{ label: '首页', path: '/' }, { label: '知识中心' }], categories: ['全部', 'GEO 基础', '决策指南', '效果评估', '官网优化'], activeCategory: '全部',
  items: insights.map(toCard), related: insights.slice(0, 3).map(toCard), primaryTopic: 'SEO/GEO 知识内容', reviewedAt: '2026-10-10',
}

export const indexablePages = [...published.filter(page => page.indexable), serviceListPage, insightListPage]
export const publicPages = [...published, serviceListPage, insightListPage]

export function getPublishedPage(slug: string) {
  return published.find(page => page.slug === slug)
}

export function getStaticPage(slug: 'home' | 'about' | 'consult') {
  const page = sitePages.find(item => item.slug === slug)
  if (!page) throw createError({ statusCode: 404, statusMessage: 'Published page not found' })
  return page
}
