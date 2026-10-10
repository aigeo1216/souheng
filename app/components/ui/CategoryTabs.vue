<script setup lang="ts">defineProps<{ items?: string[]; active?: string }>()</script>
<template><div v-if="items?.length" class="tabs" aria-label="内容分类"><button v-for="item in items" :key="item" type="button" :class="{active:item===active}" :aria-pressed="item===active">{{ item }}</button></div></template>
<style scoped>
.tabs { display: flex; gap: 10px; overflow-x: auto; padding: 2px 2px 24px; scrollbar-width: none; }.tabs button { flex: 0 0 auto; min-height: 39px; padding: 9px 20px; border: 1px solid var(--color-line); border-radius: 20px; color: #5d6872; background: #fff; cursor: pointer; }.tabs button.active { border-color: var(--color-primary); color: #fff; background: var(--color-primary); }
</style>
