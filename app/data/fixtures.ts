import type { FixturePage, TemplateKey } from '~/types/content'

const commonCta = {
  heading: '从一次清晰的现状梳理开始',
  body: '此处为模板 CTA，正式站点将接入已确认的品牌联系方式与原创服务说明。',
  label: '查看咨询方式',
  path: '/__fixtures__/consult/',
}

const pages: FixturePage[] = [
  {
    template: 'home', slug: 'home', title: '首页模板 Fixture', description: '验证首页模块顺序、栅格与响应式表现。', h1: '让专业内容更容易被搜索与理解',
    eyebrow: 'SEO · GEO · CONTENT SYSTEM', subtitle: '使用结构化方法梳理内容、技术与实体信息，为可持续增长建立清晰底座。', breadcrumbs: [],
    categories: ['策略梳理', '技术优化', '内容架构'], activeCategory: '策略梳理',
    items: [
      { slug: 'strategy', path: '/__fixtures__/service-detail/', title: '搜索增长策略', summary: '从目标、受众与主题地图出发，形成可执行的增长路线。', category: '策略梳理' },
      { slug: 'technical', title: '技术 SEO 基线', summary: '检查抓取、渲染、索引与页面体验中的关键问题。', category: '技术优化' },
      { slug: 'content', title: '内容信息架构', summary: '让页面层级、实体关系与内部链接更清楚。', category: '内容架构' },
      { slug: 'measurement', title: '验证与迭代', summary: '用可追溯的观察项评估变化，不承诺虚构结果。', category: '策略梳理' },
    ],
    related: [
      { slug: 'brief', path: '/__fixtures__/article-detail/', title: '如何写一份可执行的优化简报', summary: '把业务问题转换成页面、内容与验证任务。', date: '2026-09-18' },
      { slug: 'entities', title: '从实体一致性开始整理站点', summary: '统一品牌、服务和主题之间的表达。', date: '2026-09-06' },
      { slug: 'qa', title: '静态站点发布前检查什么', summary: '覆盖元数据、链接、结构化数据与移动端。', date: '2026-08-25' },
    ], sections: [
      { heading: '把复杂问题拆成可维护的系统', body: ['模板层负责一致的页面体验，内容层负责独立、可审核的信息；两者分离后，后续扩展无需逐页复制。'] },
    ], cta: commonCta,
  },
  {
    template: 'service-list', slug: 'service-list', title: '服务列表模板 Fixture', description: '验证服务分类、卡片网格与分页降级。', h1: '专业服务', subtitle: '按业务阶段组织的原创模拟服务项目。',
    breadcrumbs: [{ label: '首页', path: '/' }, { label: '专业服务' }], categories: ['全部', '策略', '技术', '内容'], activeCategory: '全部',
    items: [
      { slug: 'audit', path: '/__fixtures__/service-detail/', title: '站点现状诊断', summary: '识别结构、内容与技术层面的优先问题。', category: '策略' },
      { slug: 'architecture', title: '主题架构设计', summary: '建立栏目、主题簇与内链关系。', category: '内容' },
      { slug: 'rendering', title: '静态渲染优化', summary: '验证关键内容可抓取、可渲染、可索引。', category: '技术' },
      { slug: 'schema', title: '结构化数据规划', summary: '让 Schema 与页面真实内容保持一致。', category: '技术' },
      { slug: 'governance', title: '内容治理规范', summary: '定义字段、审核状态与发布边界。', category: '内容' },
      { slug: 'measurement', title: '持续验证机制', summary: '形成上线后的指标观察与迭代节奏。', category: '策略' },
    ], cta: commonCta,
  },
  {
    template: 'service-detail', slug: 'service-detail', title: '服务详情模板 Fixture', description: '验证服务详情双栏、正文、推荐与 CTA。', h1: '站点现状诊断', eyebrow: 'SERVICE FIXTURE', subtitle: '这是一项模拟服务，用于验证信息层级，不代表已上线报价或交付承诺。',
    breadcrumbs: [{ label: '首页', path: '/' }, { label: '专业服务', path: '/__fixtures__/service-list/' }, { label: '站点现状诊断' }],
    sections: [
      { heading: '适用场景', body: ['当站点存在页面很多、优先级不清或改版风险较高的问题时，先建立统一事实基线。'] },
      { heading: '分析范围', bullets: ['抓取与索引路径', '模板和页面类型', '主题覆盖与内部链接', '结构化数据和元信息'] },
      { heading: '模拟交付物', body: ['问题清单、优先级说明和验证建议。正式服务范围将在品牌与业务信息确认后另行定义。'] },
    ],
    related: [
      { slug: 'architecture', title: '主题架构设计', summary: '把诊断结论转成可维护的栏目与内容关系。' },
      { slug: 'rendering', title: '静态渲染优化', summary: '检查关键页面在生成产物中的可见性。' },
    ], cta: commonCta,
  },
  {
    template: 'insight-list', slug: 'insight-list', title: '资讯列表模板 Fixture', description: '验证资讯主栏、推荐侧栏和分页结构。', h1: '资讯与方法', subtitle: '原创模拟摘要，用于验证文章列表的密度和层级。',
    breadcrumbs: [{ label: '首页', path: '/' }, { label: '资讯与方法' }], categories: ['全部', 'SEO 基础', 'GEO 方法', '工程实践'], activeCategory: '全部',
    items: [
      { slug: 'rendered-html', path: '/__fixtures__/article-detail/', title: '为什么要检查生成后的 HTML', summary: '开发页面可见不等于静态产物中存在关键内容。', category: '工程实践', date: '2026-09-22' },
      { slug: 'entity-consistency', title: '实体一致性如何影响机器理解', summary: '品牌、服务和作者信息需要在页面之间保持稳定。', category: 'GEO 方法', date: '2026-09-12' },
      { slug: 'canonical', title: 'Canonical 的常见边界问题', summary: '子路径部署、分页与重复内容都需要明确策略。', category: 'SEO 基础', date: '2026-09-01' },
      { slug: 'internal-links', title: '用内部链接表达页面关系', summary: '链接应服务于用户路径与内容语义。', category: 'SEO 基础', date: '2026-08-20' },
    ], related: [
      { slug: 'checklist', title: '本月推荐：发布前清单', summary: '一份用于工程验收的简要清单。' },
      { slug: 'schema-boundary', title: 'Schema 不应描述不存在的事实', summary: '结构化数据必须与可见内容相符。' },
    ],
  },
  {
    template: 'article-detail', slug: 'article-detail', title: '文章详情模板 Fixture', description: '验证文章正文、元信息、侧栏和上下篇。', h1: '为什么要检查生成后的 HTML', subtitle: '从静态生成产物出发，验证机器和用户实际获得的内容。',
    breadcrumbs: [{ label: '首页', path: '/' }, { label: '资讯与方法', path: '/__fixtures__/insight-list/' }, { label: '生成后的 HTML' }],
    publishedAt: '2026-09-22', updatedAt: '2026-09-24', author: 'Fixture 内容团队',
    sections: [
      { heading: '问题不只发生在浏览器里', body: ['客户端渲染可以让页面看起来完整，但静态部署的验收对象应当是最终生成文件。检查 HTML 能快速发现关键文本、Canonical 或 JSON-LD 缺失。'] },
      { heading: '建议的检查顺序', bullets: ['确认页面状态码和静态文件存在', '检查唯一 H1 与主要正文', '核对 Canonical、Robots 和 Open Graph', '解析并验证 JSON-LD', '遍历内部链接目标'] },
      { heading: '保留清晰的证据', body: ['自动化结果应记录命令、时间和失败原因；视觉截图用于发现结构差异，不应被包装成没有依据的相似度分数。'] },
    ], related: [
      { slug: 'canonical', title: 'Canonical 的常见边界问题', summary: '进一步理解子路径部署中的 URL 生成。' },
      { slug: 'internal-links', title: '用内部链接表达页面关系', summary: '把页面连接成清晰的主题网络。' },
    ], faq: [{ question: '只检查浏览器页面够吗？', answer: '不够。静态站还需要检查生成目录中的 HTML、链接和元数据。' }], cta: commonCta,
  },
  {
    template: 'case-list', slug: 'case-list', title: '案例列表模板 Fixture', description: '验证案例四列图卡与无真实案例时的发布边界。', h1: '方法演示', subtitle: '以下均为明确标记的布局样例，不是客户案例、业绩或背书。',
    breadcrumbs: [{ label: '首页', path: '/' }, { label: '方法演示' }], categories: ['全部', '信息架构', '技术治理'], activeCategory: '全部',
    items: [
      { slug: 'sample-a', path: '/__fixtures__/case-detail/', title: '演示：栏目关系梳理', summary: '用于验证案例卡片标题和比例。', category: '信息架构' },
      { slug: 'sample-b', title: '演示：静态路径校验', summary: '用于验证深色覆盖标题样式。', category: '技术治理' },
      { slug: 'sample-c', title: '演示：内容字段治理', summary: '用于验证响应式案例网格。', category: '信息架构' },
      { slug: 'sample-d', title: '演示：链接完整性检查', summary: '用于验证卡片缺图降级。', category: '技术治理' },
    ],
  },
  {
    template: 'case-detail', slug: 'case-detail', title: '案例详情模板 Fixture', description: '验证案例长页结构；内容不是实际客户项目。', h1: '演示案例：栏目关系梳理', subtitle: '纯 Fixture 场景，不对应真实客户，不包含虚构指标或第三方背书。',
    breadcrumbs: [{ label: '首页', path: '/' }, { label: '方法演示', path: '/__fixtures__/case-list/' }, { label: '栏目关系梳理' }],
    industry: '模板验证', verificationStatus: 'fixture-only',
    sections: [
      { heading: '背景', body: ['假设一个内容站点需要从分散页面迁移到统一模板。本段只演示信息结构。'] },
      { heading: '方法', bullets: ['按页面目的聚类', '冻结字段和路由规则', '用代表页面验证组件复用', '在发布前检查静态产物'] },
      { heading: '结果边界', body: ['本页面不陈述实际业绩。P3 只有在资料获得授权和核验后，才可建立正式案例内容。'] },
    ], related: [{ slug: 'sample-b', title: '演示：静态路径校验', summary: '另一种布局占位，用于相关推荐模块。' }], cta: commonCta,
  },
  {
    template: 'about', slug: 'about', title: '关于我们模板 Fixture', description: '验证关于页宽正文、二级导航与 CTA。', h1: '关于模板预览', subtitle: '品牌主体尚未确认，本页只展示可复用结构。',
    breadcrumbs: [{ label: '首页', path: '/' }, { label: '关于我们' }],
    sections: [
      { heading: '我们如何描述自己', body: ['正式页面将使用已确认的品牌名、服务范围和联系方式。Fixture 不替代真实主体信息，也不会进入公开索引。'] },
      { heading: '工作原则', bullets: ['事实与推断分开表达', '内容和模板独立维护', '先验证静态产物再发布', '不伪造资质、客户或结果'] },
      { heading: '可扩展的信息区块', body: ['未来可按审核状态增加团队、方法、资质与办公信息；未核实字段保持不渲染。'] },
    ], cta: commonCta,
  },
  {
    template: 'consult', slug: 'consult', title: '咨询入口模板 Fixture', description: '验证联系方式、隐私提示与无表单端点降级。', h1: '咨询入口', subtitle: '真实联系方式尚未配置，因此不展示可提交表单。',
    breadcrumbs: [{ label: '首页', path: '/' }, { label: '咨询入口' }],
    contactMethods: [
      { label: '邮件', value: '待品牌信息确认后配置' },
      { label: '电话', value: '待品牌信息确认后配置' },
      { label: '微信', value: '待品牌信息确认后配置' },
    ],
    sections: [
      { heading: '联系前可以准备什么', bullets: ['当前站点与目标范围', '主要受众与核心服务', '已知问题和期望时间', '可公开与不可公开的信息边界'] },
      { heading: '隐私说明', body: ['本 Fixture 不收集或提交任何数据。正式表单只会在提交端点和隐私规则确认后启用。'] },
    ], faq: [{ question: '现在可以提交信息吗？', answer: '不可以。本阶段未配置表单端点，页面仅验证结构和降级状态。' }],
  },
]

for (const page of pages) {
  page.status = 'fixture'
  page.indexable = false
}

export const fixtures = Object.fromEntries(pages.map(page => [page.slug, page])) as Record<TemplateKey, FixturePage>

export function getFixture(slug: string) {
  return fixtures[slug as TemplateKey]
}
