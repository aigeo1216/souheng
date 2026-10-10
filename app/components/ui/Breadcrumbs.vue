<script setup lang="ts">import type { BreadcrumbItem } from '~/types/content'; defineProps<{ items: BreadcrumbItem[] }>()</script>
<template>
  <nav v-if="items.length" class="breadcrumbs" aria-label="面包屑">
    <ol><li v-for="(item,index) in items" :key="`${item.label}-${index}`"><NuxtLink v-if="item.path" :to="item.path">{{ item.label }}</NuxtLink><span v-else aria-current="page">{{ item.label }}</span><i v-if="index < items.length-1">/</i></li></ol>
  </nav>
</template>
<style scoped>
.breadcrumbs { padding: 13px 0; border-block: 1px solid #eef1f3; color: var(--color-muted); font-size: 12px; }.breadcrumbs ol { display: flex; flex-wrap: wrap; gap: 7px; }.breadcrumbs li { display: flex; gap: 7px; }.breadcrumbs a:hover { color: var(--color-primary); }.breadcrumbs i { font-style: normal; }
</style>
