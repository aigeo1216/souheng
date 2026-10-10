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

export const navigationGroups = {
  services: [
    { label: 'SEO/GEO 综合诊断', path: '/services/seo-geo-audit/' }, { label: 'GEO 优化', path: '/services/geo/' },
    { label: 'SEO 优化', path: '/services/seo/' }, { label: '企业官网建设', path: '/services/website-development/' },
    { label: '内容矩阵运营', path: '/services/content-strategy/' }, { label: '小程序开发与运营', path: '/services/mini-program/' },
  ],
  insights: [
    { label: 'GEO 是什么', path: '/insights/what-is-geo/' }, { label: 'SEO 与 GEO 区别', path: '/insights/seo-vs-geo/' },
    { label: 'GEO 收费与预算', path: '/insights/geo-pricing/' }, { label: 'GEO 效果评估', path: '/insights/geo-measurement/' },
    { label: '官网为什么没有被 AI 引用', path: '/insights/why-ai-does-not-cite-website/' },
  ],
} as const

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
