export const fixtureSlugs = [
  'home', 'service-list', 'service-detail', 'insight-list', 'article-detail',
  'case-list', 'case-detail', 'about', 'consult',
] as const

export const siteNavigation = [
  { label: '首页', path: '/' },
  { label: '服务能力', path: '/services/' },
  { label: '知识中心', path: '/insights/' },
  { label: '关于我们', path: '/about/' },
  { label: '联系咨询', path: '/consult/' },
] as const

export const fixtureLabels: Record<(typeof fixtureSlugs)[number], string> = {
  home: '首页模板',
  'service-list': '服务列表',
  'service-detail': '服务详情',
  'insight-list': '资讯列表',
  'article-detail': '文章详情',
  'case-list': '案例列表',
  'case-detail': '案例详情',
  about: '关于我们',
  consult: '咨询入口',
}
