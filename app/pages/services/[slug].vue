<script setup lang="ts">
import { getPublishedPage } from '~/data/published'
const page = getPublishedPage(String(useRoute().params.slug))
if (!page || page.template !== 'service-detail') throw createError({ statusCode: 404, statusMessage: 'Service not found' })
usePageSeo(page)
</script>
<template><TemplatesServiceDetailTemplate :page="page"/></template>
