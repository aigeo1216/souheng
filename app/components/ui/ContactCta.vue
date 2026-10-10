<script setup lang="ts">
import type { CtaData } from '~/types/content'
defineProps<{ cta?: CtaData; serviceType?: string }>()
const { open } = useWechatConsult()
const { track } = useAnalytics()
function handleClick(event: MouseEvent, serviceType?: string) {
  track({ event_name: 'cta_click', placement: 'content-cta', service_type: serviceType })
  open({ placement: 'content-cta', serviceType, trigger: event.currentTarget as HTMLElement })
}
</script>
<template><section v-if="cta" class="cta"><div><p class="eyebrow">LET'S START</p><h2>{{ cta.heading }}</h2><p>{{ cta.body }}</p></div><button class="btn btn-primary" type="button" @click="handleClick($event, serviceType)">{{ cta.label }}<span aria-hidden="true">→</span></button></section></template>
<style scoped>
.cta { display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 36px 42px; border-top: 3px solid var(--color-primary); background: var(--color-tint); }.cta h2 { margin-top: 5px; color: var(--color-heading); font-size: 27px; font-weight: 500; }.cta p:last-child { margin-top: 8px; color: var(--color-muted); }
@media(max-width:767px){.cta{align-items:flex-start; flex-direction:column; padding:28px 22px}.cta h2{font-size:23px}}
</style>
