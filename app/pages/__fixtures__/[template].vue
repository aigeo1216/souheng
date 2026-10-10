<script setup lang="ts">
import HomeTemplate from '~/components/templates/HomeTemplate.vue'
import ServiceListTemplate from '~/components/templates/ServiceListTemplate.vue'
import ServiceDetailTemplate from '~/components/templates/ServiceDetailTemplate.vue'
import InsightListTemplate from '~/components/templates/InsightListTemplate.vue'
import ArticleDetailTemplate from '~/components/templates/ArticleDetailTemplate.vue'
import CaseListTemplate from '~/components/templates/CaseListTemplate.vue'
import CaseDetailTemplate from '~/components/templates/CaseDetailTemplate.vue'
import AboutTemplate from '~/components/templates/AboutTemplate.vue'
import ConsultTemplate from '~/components/templates/ConsultTemplate.vue'
import { getFixture } from '~/data/fixtures'

const route = useRoute()
const slug = String(route.params.template)
const page = getFixture(slug)
if (!page) throw createError({ statusCode: 404, statusMessage: 'Fixture template not found' })

const templates = {
  home: HomeTemplate,
  'service-list': ServiceListTemplate,
  'service-detail': ServiceDetailTemplate,
  'insight-list': InsightListTemplate,
  'article-detail': ArticleDetailTemplate,
  'case-list': CaseListTemplate,
  'case-detail': CaseDetailTemplate,
  about: AboutTemplate,
  consult: ConsultTemplate,
} as const

usePageSeo(page)
definePageMeta({ layout: 'default' })
</script>

<template><component :is="templates[page.template]" :page="page"/></template>
