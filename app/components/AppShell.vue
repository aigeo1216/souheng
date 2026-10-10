<template>
  <div class="min-h-screen overflow-x-clip bg-white">
    <AppHeader />
    <main id="main-content"><slot /></main>
    <FloatingContact />
    <AppFooter />
    <MobileBottomNavigation />
    <WechatConsultModal />
  </div>
</template>
