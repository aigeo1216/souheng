<script setup lang="ts">import type { CardItem } from '~/types/content'; defineProps<{ item: CardItem }>()</script>
<template><component :is="item.path ? 'NuxtLink' : 'article'" :to="item.path" class="case-card"><div class="placeholder-art art"><span class="watermark">DEMO</span></div><div class="caption"><p>{{ item.category || 'Fixture' }}</p><h2>{{ item.title }}</h2></div></component></template>
<style scoped>
.case-card{position:relative;overflow:hidden;aspect-ratio:4/3;background:#7896b4}.art{position:absolute;inset:0}.watermark{position:absolute;z-index:2;top:16px;right:14px;padding:2px 7px;border:1px solid rgb(255 255 255 / 60%);color:#fff;font-size:9px;letter-spacing:.15em}.caption{position:absolute;z-index:3;right:0;bottom:0;left:0;padding:18px;color:#fff;background:linear-gradient(transparent,rgb(28 35 46 / 88%))}.caption p{font-size:10px;letter-spacing:.1em;text-transform:uppercase}.caption h2{margin-top:4px;font-size:15px;font-weight:500;line-height:1.35}
</style>
