<script setup lang="ts">import { getStaticPage } from '~/data/published'; const page = getStaticPage('consult'); usePageSeo(page)</script>
<template><TemplatesConsultTemplate :page="page"/></template>
