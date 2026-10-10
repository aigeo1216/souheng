<script setup lang="ts">import { getStaticPage } from '~/data/published'; const page = getStaticPage('about'); usePageSeo(page)</script>
<template><TemplatesAboutTemplate :page="page"/></template>
