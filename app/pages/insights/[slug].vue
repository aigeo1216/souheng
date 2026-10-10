<script setup lang="ts">
import { getPublishedPage } from '~/data/published'
const page = getPublishedPage(String(useRoute().params.slug))
if (!page || page.template !== 'article-detail') throw createError({ statusCode: 404, statusMessage: 'Article not found' })
usePageSeo(page)
</script>
<template><TemplatesArticleDetailTemplate :page="page"/></template>
