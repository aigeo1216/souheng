<script setup lang="ts">
const { open } = useWechatConsult()
const { track } = useAnalytics()
function showConsult(event: MouseEvent) {
  track({ event_name: 'cta_click', placement: 'floating-consult' })
  open({ placement: 'floating-consult', trigger: event.currentTarget as HTMLElement })
}
</script>
<template><button class="floating" type="button" aria-label="打开微信咨询" @click="showConsult"><span aria-hidden="true">✦</span><b>咨询</b></button></template>

<style scoped>
.floating { position: fixed; z-index: 40; right: 22px; bottom: 76px; display: grid; width: 52px; height: 52px; place-items: center; border:0; border-radius: 50%; color: #fff; background: var(--color-primary); box-shadow: 0 8px 24px rgb(41 141 255 / 28%); cursor:pointer; line-height: 1; }
.floating span { margin-top: 6px; font-size: 16px; }.floating b { margin-top: -5px; font-size: 10px; }
@media (max-width: 767px) { .floating { right: 14px; bottom: 62px; width: 46px; height: 46px; } }
</style>
