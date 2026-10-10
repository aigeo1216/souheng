# P2 SEO / GEO 验证

## 已实现

- 页面模型统一生成 Title、Description、Canonical、Robots、Open Graph 和 JSON-LD。
- Canonical 使用 `https://aigeo1216.github.io/geo-consulting-website/`，正确保留项目子路径。
- 9 个 Fixture 全部 `noindex,nofollow`；`robots.txt` 禁止测试目录；Sitemap 不包含 Fixture。
- JSON-LD 类型按模板映射：WebPage、CollectionPage、Service、Article、CreativeWork、AboutPage、ContactPage。
- Article 字段按已显示数据补充发布日期、更新日期和组织作者；未生成 Review、Rating、虚假 Offer 或客户声明。
- Breadcrumb JSON-LD、语义标题、静态正文和数据驱动内链已实现。
- 关键正文存在于预渲染 HTML，而非仅由客户端加载。

## 自动验证

- `npm run test:static`：检查 9 个生成文件的 H1、Robots、Canonical、JSON-LD、内部链接目标、Sitemap 排除和 `.nojekyll`。
- `npm run test:e2e`：在 1440/390 两端解析 JSON-LD，核对 Meta/Canonical/Robots，并检查浏览器控制台。
- 结果：静态校验通过；浏览器 21 项通过、0 失败、1 项桌面环境按设计跳过。

当前 Sitemap 为空是刻意行为：P2 没有正式可索引业务页面。P3 仅将已审核、非占位且允许索引的原创内容加入 Sitemap。
