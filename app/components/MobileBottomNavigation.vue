<template>
  <nav class="bottom-nav" aria-label="移动端快捷导航">
    <NuxtLink to="/"><span>⌂</span>首页</NuxtLink>
    <NuxtLink to="/services/"><span>◇</span>服务</NuxtLink>
    <NuxtLink to="/insights/"><span>≡</span>知识</NuxtLink>
    <NuxtLink to="/about/"><span>○</span>关于</NuxtLink>
  </nav>
</template>

<style scoped>
.bottom-nav { position: fixed; z-index: 50; right: 0; bottom: 0; left: 0; display: none; height: 48px; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--color-line); background: rgb(255 255 255 / 96%); backdrop-filter: blur(8px); }
.bottom-nav a { display: flex; align-items: center; justify-content: center; gap: 4px; color: #66717c; font-size: 11px; }
.bottom-nav span { color: var(--color-primary); font-size: 17px; }
@media (max-width: 767px) { .bottom-nav { display: grid; } }
</style>
