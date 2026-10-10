<script setup lang="ts">
import { getStaticPage } from '~/data/published'
const page = getStaticPage('home')
usePageSeo(page)
</script>
<template><TemplatesHomeTemplate :page="page"/></template>
