<script setup lang="ts">
import { brand } from '~/config/brand'

const { isOpen, placement, serviceType, close } = useWechatConsult()
const { track } = useAnalytics()
const closeButton = ref<HTMLButtonElement | null>(null)
const hasQr = computed(() => Boolean(brand.wechat.consultQrPath))
const consultQrUrl = useSitePath(brand.wechat.consultQrPath)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isOpen.value) close()
}
function viewQr() {
  track({ event_name: 'wechat_qr_view', placement: placement.value, service_type: serviceType.value })
}
function saveQr() {
  track({ event_name: 'wechat_qr_save', placement: placement.value, service_type: serviceType.value })
}
watch(isOpen, (value) => {
  if (!import.meta.client) return
  document.body.style.overflow = value ? 'hidden' : ''
  if (value) nextTick(() => closeButton.value?.focus())
})
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="wechat-overlay" role="presentation" @click.self="close">
      <section class="wechat-dialog" role="dialog" aria-modal="true" aria-labelledby="wechat-dialog-title">
        <button ref="closeButton" class="dialog-close" type="button" aria-label="关闭微信咨询弹层" @click="close">×</button>
        <p class="eyebrow">WECHAT CONSULT</p>
        <h2 id="wechat-dialog-title">微信咨询</h2>
        <template v-if="hasQr">
          <img :src="consultQrUrl" alt="搜衡科技客户微信咨询二维码" class="wechat-qr" @load="viewQr">
          <p>{{ brand.wechat.consultCaption }}</p>
          <a class="save-link" :href="consultQrUrl" download="souheng-wechat-consult.jpg" @click="saveQr">保存二维码图片</a>
          <small>移动端可长按图片保存；二维码展示仅表示咨询意向，不代表已添加微信或完成咨询。</small>
        </template>
        <template v-else>
          <p class="pending">客户微信二维码待接入。为避免展示假二维码，本弹层不提供替代图片或虚假联系承诺。</p>
        </template>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.wechat-overlay{position:fixed;z-index:100;inset:0;display:grid;place-items:center;padding:20px;background:rgb(25 35 48 / 46%)}.wechat-dialog{position:relative;width:min(100%,390px);padding:34px;background:#fff;box-shadow:0 20px 60px rgb(20 33 51 / 25%);text-align:center}.wechat-dialog h2{margin:7px 0 16px;color:var(--color-heading);font-size:28px}.dialog-close{position:absolute;top:10px;right:12px;width:34px;height:34px;border:0;background:transparent;color:#5e6a76;font-size:27px;cursor:pointer}.wechat-qr{display:block;width:min(100%,268px);height:auto;margin:0 auto 16px;image-rendering:auto}.wechat-dialog>p:not(.eyebrow){color:var(--color-muted);line-height:1.7}.save-link{display:inline-block;margin:18px 0;color:var(--color-primary);font-weight:700}.wechat-dialog small{display:block;color:#8793a0;line-height:1.6}.pending{padding:16px;border-left:3px solid #e2a937;background:#fff9e9;text-align:left;color:#745b25!important}@media(max-width:767px){.wechat-overlay{align-items:end;padding:0}.wechat-dialog{width:100%;padding:30px 24px 34px}.wechat-qr{width:min(100%,250px)}}
</style>
