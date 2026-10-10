<script setup lang="ts">import { brand } from '~/config/brand'; import { navigationGroups } from '~/config/site'</script>
<template>
  <footer class="footer">
    <div class="site-container footer-grid">
      <div><h2>核心服务</h2><ul><li v-for="item in navigationGroups.services" :key="item.path"><NuxtLink :to="item.path">{{ item.label }}</NuxtLink></li></ul></div>
      <div><h2>SEO/GEO 知识</h2><ul><li v-for="item in navigationGroups.insights" :key="item.path"><NuxtLink :to="item.path">{{ item.label }}</NuxtLink></li></ul></div>
      <div><div class="footer-brand"><span>{{ brand.name }}</span><b>{{ brand.englishName }}</b></div><p>{{ brand.positioning }}</p><h2>品牌与联系</h2><ul><li><NuxtLink to="/about/">关于搜衡科技</NuxtLink></li><li><NuxtLink to="/consult/">联系咨询</NuxtLink></li><li>微信咨询由用户主动扫码发起</li></ul></div>
      <div><h2>微信公众号</h2><OfficialAccountQr/><p class="disclaimer">扫码了解行业知识，或通过页面咨询入口获取服务沟通方式。</p></div>
    </div>
    <div class="site-container copyright">© 2026 {{ brand.name }} · 内容更新时间以页面标注为准</div>
  </footer>
</template>

<style scoped>
.footer { padding-top: 44px; color: #c7ced9; background: var(--color-footer); }
.footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.1fr; gap: 28px; padding-bottom: 36px; }
.footer-brand { display: flex; align-items: center; gap: 10px; color: #fff; font-size: 20px; font-weight: 700; }
.footer-brand b { padding: 1px 7px; border: 1px solid #65708a; border-radius: 10px; color: #91a2b8; font-size: 9px; letter-spacing: .12em; }
.footer p { max-width: 480px; margin-top: 14px; }
.footer .disclaimer { color: #8792a7; font-size: 12px; }
.footer h2 { margin: 2px 0 14px; color: #fff; font-size: 15px; }
.footer li + li { margin-top: 8px; }.footer a:hover{color:#fff}
.copyright { padding-block: 14px; border-top: 1px solid rgb(255 255 255 / 10%); color: #8490a4; font-size: 12px; }
@media (max-width:991px){.footer-grid{grid-template-columns:repeat(2,1fr)}}@media (max-width: 767px) { .footer { padding-top: 32px; } .footer-grid { grid-template-columns:1fr; gap: 28px; } }
</style>
