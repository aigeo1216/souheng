<script setup lang="ts">
import { navigationGroups } from '~/config/site'
import { brand } from '~/config/brand'

const open = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const route = useRoute()
const primaryNavigation = [{ label: '首页', path: '/' }, { label: '关于我们', path: '/about/' }, { label: '联系咨询', path: '/consult/' }]

function closeMenu() { open.value = false }
function isActive(path: string) {
  return path === '/' ? route.path === '/' : route.path.startsWith(path)
}
function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) {
    closeMenu()
    nextTick(() => menuButton.value?.focus())
  }
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
watch(open, value => { document.body.style.overflow = value ? 'hidden' : '' })
onBeforeUnmount(() => { document.body.style.overflow = '' })
</script>

<template>
  <header class="site-header">
    <div class="site-container header-inner">
      <NuxtLink to="/" class="brand" :aria-label="`${brand.logo.alt}首页`">
        <span class="brand-mark" aria-hidden="true">{{ brand.logo.mark }}</span>
        <span><strong>{{ brand.name }}</strong><small>{{ brand.englishName }}</small></span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="主导航">
        <NuxtLink :to="'/'" :class="{ 'is-active': isActive('/') }">首页</NuxtLink>
        <details class="nav-group" :open="route.path.startsWith('/services/')"><summary :class="{ 'is-active': isActive('/services/') }">核心服务</summary><div class="nav-popover"><NuxtLink v-for="item in navigationGroups.services" :key="item.path" :to="item.path">{{ item.label }}</NuxtLink></div></details>
        <details class="nav-group" :open="route.path.startsWith('/insights/')"><summary :class="{ 'is-active': isActive('/insights/') }">知识中心</summary><div class="nav-popover"><NuxtLink v-for="item in navigationGroups.insights" :key="item.path" :to="item.path">{{ item.label }}</NuxtLink></div></details>
        <NuxtLink v-for="item in primaryNavigation.slice(1)" :key="item.label" :to="item.path" :class="{ 'is-active': isActive(item.path) }">{{ item.label }}</NuxtLink>
      </nav>
      <button ref="menuButton" class="menu-button" type="button" :aria-expanded="open" aria-controls="mobile-menu" aria-label="打开主导航" @click="open = !open">
        <span /><span /><span />
      </button>
    </div>
    <Transition name="drawer">
      <div v-if="open" id="mobile-menu" class="mobile-drawer">
        <nav class="site-container" aria-label="移动端主导航">
          <NuxtLink to="/" @click="closeMenu">首页<span aria-hidden="true">›</span></NuxtLink><details><summary>核心服务</summary><NuxtLink v-for="item in navigationGroups.services" :key="item.path" :to="item.path" @click="closeMenu">{{ item.label }}<span aria-hidden="true">›</span></NuxtLink></details><details><summary>知识中心</summary><NuxtLink v-for="item in navigationGroups.insights" :key="item.path" :to="item.path" @click="closeMenu">{{ item.label }}<span aria-hidden="true">›</span></NuxtLink></details><NuxtLink v-for="item in primaryNavigation.slice(1)" :key="item.label" :to="item.path" @click="closeMenu">{{ item.label }}<span aria-hidden="true">›</span></NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.site-header { position: relative; z-index: 30; height: 60px; background: #fff; box-shadow: var(--shadow-header); }
.header-inner { display: flex; height: 60px; align-items: center; justify-content: space-between; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: #27313a; }
.brand-mark { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 50% 18% 50% 50%; color: #fff; background: linear-gradient(135deg, #298dff, #65c9d5); font-size: 19px; font-weight: 800; transform: rotate(-8deg); }
.brand strong, .brand small { display: block; line-height: 1.2; }
.brand strong { font-size: 17px; letter-spacing: .08em; }
.brand small { margin-top: 2px; color: #8c98a3; font-size: 8px; letter-spacing: .12em; }
.desktop-nav { display: flex; height: 100%; align-items: stretch; }
.desktop-nav a { position: relative; display: flex; align-items: center; padding-inline: 14px; color: #47515a; }
.nav-group{position:relative}.nav-group summary{display:flex;height:100%;align-items:center;padding-inline:14px;cursor:pointer;list-style:none;color:#47515a}.nav-group summary::-webkit-details-marker{display:none}.nav-group summary::after{margin-left:6px;content:'⌄';font-size:12px}.nav-popover{position:absolute;top:56px;left:0;display:grid;min-width:210px;padding:8px;background:#fff;box-shadow:0 14px 28px rgb(42 51 60 / 16%)}.nav-popover a{padding:9px 12px!important;white-space:nowrap}.nav-group summary.is-active{color:var(--color-primary)}
.desktop-nav a:hover { color: var(--color-primary); }
.desktop-nav a.is-active::after { position: absolute; right: 14px; bottom: 0; left: 14px; height: 4px; background: var(--color-primary); content: ""; }
.menu-button { display: none; width: 44px; height: 44px; border: 0; background: transparent; cursor: pointer; }
.menu-button span { display: block; width: 22px; height: 2px; margin: 5px auto; background: #35404a; }
.mobile-drawer { position: absolute; top: 60px; right: 0; left: 0; border-top: 1px solid var(--color-line); background: #fff; box-shadow: 0 16px 28px rgb(42 51 60 / 14%); }
.mobile-drawer a { display: flex; min-height: 48px; align-items: center; justify-content: space-between; border-bottom: 1px solid #edf1f3; font-size: 15px; }
.mobile-drawer details summary{min-height:48px;display:flex;align-items:center;border-bottom:1px solid #edf1f3;font-size:15px;cursor:pointer}.mobile-drawer details a{padding-left:16px}
.mobile-drawer a span { color: #9aa5ad; font-size: 24px; }
.drawer-enter-active, .drawer-leave-active { transition: opacity 160ms ease, transform 160ms ease; }
.drawer-enter-from, .drawer-leave-to { opacity: 0; transform: translateY(-8px); }
@media (max-width: 767px) { .desktop-nav { display: none; } .menu-button { display: block; } }
</style>
