# P3 SEO/GEO 验证

## 已实现

- 每个正式页有唯一 Title、Description、H1 和包含 GitHub Pages 子路径的 Canonical。
- 13 个 `published + indexable` 路由进入 Sitemap；`/consult/`、所有 Fixture、草稿和审核内容不进入。
- 页面输出 WebPage、Service、Article、CollectionPage/ItemList、AboutPage 或 ContactPage；可见 FAQ 同步生成 FAQPage；首页仅输出不含地址、电话、注册信息的 ProfessionalService。
- Article 页面显示公开证据来源；正文、FAQ、内链、CTA 均为服务端静态 HTML。
- CTA 统一为“申请 SEO/GEO 初步诊断”，但仅链接至不收集数据的咨询说明页；未伪造成功提交。

## 自动验证结果

| 命令 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过 |
| `npm run test:unit` | 2 文件、5 测试通过 |
| `npm run build` | 通过 |
| `npm run generate` | 通过，Fixture 未进入 `.output/public` |
| `npm run test:static` | 13 个可索引页、1 个 noindex 页、Sitemap/链接/Schema/H1 通过 |
| `npm run test:e2e` | 52 通过、2 个桌面端移动菜单用例按设计跳过 |

## GEO 边界

首期确保信息可读、实体表述一致、来源可追溯、定义/比较/流程清晰。提及率、引用率与 AI 可见性仅可在真实上线后的固定样本中观察；未以 Lighthouse、本地截图或任何单次回答替代实际业务结论。
