<script setup lang="ts">import { brand } from '~/config/brand'</script>
<template>
  <footer class="footer">
    <div class="site-container footer-grid">
      <div>
        <div class="footer-brand"><span>{{ brand.name }}</span><b>{{ brand.englishName }}</b></div>
        <p>{{ brand.positioning }}</p>
        <p class="disclaimer">{{ brand.slogan }} 不承诺排名、流量、询盘或 AI 推荐结果。</p>
      </div>
      <div><h2>站点结构</h2><ul><li>服务能力</li><li>知识中心</li><li>关于搜衡科技</li></ul></div>
      <div><h2>联系咨询</h2><OfficialAccountQr/><ul><li>微信咨询由用户主动扫码发起</li><li>当前不收集个人信息</li></ul></div>
    </div>
    <div class="site-container copyright">© 2026 {{ brand.name }} · 内容更新时间以页面标注为准</div>
  </footer>
</template>

<style scoped>
.footer { padding-top: 44px; color: #c7ced9; background: var(--color-footer); }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 60px; padding-bottom: 36px; }
.footer-brand { display: flex; align-items: center; gap: 10px; color: #fff; font-size: 20px; font-weight: 700; }
.footer-brand b { padding: 1px 7px; border: 1px solid #65708a; border-radius: 10px; color: #91a2b8; font-size: 9px; letter-spacing: .12em; }
.footer p { max-width: 480px; margin-top: 14px; }
.footer .disclaimer { color: #8792a7; font-size: 12px; }
.footer h2 { margin: 2px 0 14px; color: #fff; font-size: 15px; }
.footer li + li { margin-top: 8px; }
.copyright { padding-block: 14px; border-top: 1px solid rgb(255 255 255 / 10%); color: #8490a4; font-size: 12px; }
@media (max-width: 767px) { .footer { padding-top: 32px; } .footer-grid { grid-template-columns: 1fr; gap: 28px; } }
</style>
