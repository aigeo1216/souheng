<script setup lang="ts">defineProps<{ eyebrow?: string; title: string; subtitle?: string; centered?: boolean; fixture?: boolean }>()</script>
<template>
  <header class="page-title" :class="{ centered }">
    <span v-if="fixture" class="fixture-badge">FIXTURE</span>
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
  </header>
</template>
<style scoped>
.page-title { padding: 48px 0 30px; }.page-title.centered { max-width: 800px; margin-inline: auto; text-align: center; }
.fixture-badge + .eyebrow { margin-top: 15px; }.eyebrow { margin-bottom: 10px; }.page-title h1 { margin: 12px 0 0; color: var(--color-heading); font-size: 36px; font-weight: 500; line-height: 1.25; }
.subtitle { max-width: 760px; margin: 14px auto 0; color: var(--color-muted); font-size: 16px; line-height: 1.75; }
@media (max-width: 767px) { .page-title { padding: 34px 0 22px; }.page-title h1 { font-size: 30px; }.subtitle { font-size: 14px; } }
</style>
