<script setup lang="ts">withDefaults(defineProps<{ title: string; eyebrow?: string; align?: 'left'|'center'; level?: 2|3 }>(), { align:'center', level:2 })</script>
<template><header class="section-heading" :class="`align-${align}`"><p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p><component :is="`h${level}`">{{ title }}</component><span aria-hidden="true" /></header></template>
<style scoped>
.section-heading { margin-bottom: 30px; }.align-center { text-align: center; }.eyebrow { margin-bottom: 7px; }.section-heading h2,.section-heading h3 { color: var(--color-heading); font-size: 36px; font-weight: 400; line-height: 1.2; }.section-heading span { display: inline-block; width: 36px; height: 2px; margin-top: 14px; background: var(--color-primary); }
@media(max-width:767px){.section-heading{margin-bottom:22px}.section-heading h2,.section-heading h3{font-size:30px}}
</style>
