<script setup lang="ts">
import { brand } from '~/config/brand'
const { track } = useAnalytics()
const hasQr = computed(() => Boolean(brand.wechat.officialQrPath))
const officialQrUrl = useSitePath(brand.wechat.officialQrPath)
function onView() { track({ event_name: 'official_account_qr_view', placement: 'official-account-qr' }) }
</script>

<template><aside v-if="hasQr" class="official-qr"><img :src="officialQrUrl" alt="搜衡科技微信公众号二维码" @load="onView"><p>{{ brand.wechat.officialCaption }}</p></aside></template>
<style scoped>.official-qr{display:flex;gap:14px;align-items:center}.official-qr img{width:94px;height:94px;object-fit:contain;background:#fff}.official-qr p{margin:0!important;line-height:1.65}@media(max-width:767px){.official-qr{align-items:flex-start}.official-qr img{width:84px;height:84px}}</style>
