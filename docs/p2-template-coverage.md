# P2 模板覆盖

Fixture 基地址：`http://localhost:3000/geo-consulting-website/`。所有 Fixture 均为 `noindex,nofollow`，不进入业务导航或 Sitemap。

| # | P1 模板 | Fixture 路径 | 核心复用结构 | 状态 |
|---:|---|---|---|---|
| 1 | 首页 | `__fixtures__/home/` | Hero、服务、关于、案例、资讯、CTA | 通过 |
| 2 | 服务列表 | `__fixtures__/service-list/` | PageTitle、分类、3 列卡片、分页 | 通过 |
| 3 | 服务详情 | `__fixtures__/service-detail/` | 图文摘要、正文 8:4、推荐、CTA | 通过 |
| 4 | 资讯列表 | `__fixtures__/insight-list/` | 分类、文章主栏、推荐侧栏、分页 | 通过 |
| 5 | 文章详情 | `__fixtures__/article-detail/` | 元信息、正文、FAQ、推荐、上下篇 | 通过 |
| 6 | 案例列表 | `__fixtures__/case-list/` | 分类、4 列图卡、发布边界提示 | 通过 |
| 7 | 案例详情 | `__fixtures__/case-detail/` | 自有 Banner、概览、正文、证据边界 | 通过 |
| 8 | 关于我们 | `__fixtures__/about/` | 二级导航、宽正文、CTA | 通过 |
| 9 | 咨询入口 | `__fixtures__/consult/` | 联系方式、禁用表单降级、隐私、FAQ | 通过 |

所有模板共用 `AppShell`；卡片、面包屑、推荐区、正文区和 CTA 均按内容数据渲染。空集合隐藏、无表单端点禁用、无真实案例时只允许 Fixture 的降级规则已实现。
