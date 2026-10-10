<script setup lang="ts">
import type { FixturePage } from '~/types/content'
defineProps<{ page: FixturePage }>()
const { open } = useWechatConsult()
const { track } = useAnalytics()
function openConsult(event: MouseEvent, serviceType?: string) {
  track({ event_name: 'cta_click', placement: 'service-overview', service_type: serviceType })
  open({ placement: 'service-overview', serviceType, trigger: event.currentTarget as HTMLElement })
}
</script>
<template><div><div class="site-container"><UiPageTitle :eyebrow="page.eyebrow" :title="page.h1" :subtitle="page.subtitle" :fixture="page.status === 'fixture'"/><UiBreadcrumbs :items="page.breadcrumbs"/></div><section class="site-container section-space"><div class="service-summary"><div class="placeholder-art service-art"><span>{{ page.status === 'fixture' ? 'DIAGNOSTIC\nFIXTURE' : 'SOUHENG\nTECH' }}</span></div><div><p class="eyebrow">SERVICE OVERVIEW</p><h2>先厘清问题与可行范围</h2><p>{{ page.summary || '本模板将摘要、范围和行动入口放在首屏；缺少主图时，文本区域可自动占满。' }}</p><ul><li>范围可审核</li><li>字段可复用</li><li>静态产物可验证</li></ul><button class="btn btn-primary mt-5" type="button" @click="openConsult($event, page.slug)">申请 SEO/GEO 初步诊断</button></div></div><div class="main-aside mt-10"><div class="detail-panel"><ContentRichSections :sections="page.sections"/><ContentEvidenceSources :items="page.evidenceSources"/></div><ContentRelatedAside :items="page.related" title="相关内容"/></div><UiContactCta class="mt-10" :cta="page.cta" :service-type="page.slug"/></section></div></template>
<style scoped>.service-summary{display:grid;grid-template-columns:1fr 1fr;gap:45px;align-items:center}.service-art{display:grid;aspect-ratio:4/3;place-items:center}.service-art span{position:relative;z-index:2;color:#fff;font-size:19px;line-height:1.5;letter-spacing:.2em;text-align:center;white-space:pre-line}.service-summary h2{margin:8px 0 12px;color:var(--color-heading);font-size:28px}.service-summary p{color:var(--color-muted);font-size:15px;line-height:1.8}.service-summary ul{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}.service-summary li{padding:10px 6px;background:var(--color-tint);color:#566571;text-align:center;font-size:12px}@media(max-width:767px){.service-summary{grid-template-columns:1fr;gap:24px}.service-summary h2{font-size:23px}}</style>
