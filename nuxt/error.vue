<template>
  <q-layout
    view="hHh lpR fFf"
    style="min-height: 100vh"
  >
    <div class="top_header">
      <PublicWidgetsLayoutHeaderDefault />
      <PublicWidgetsLayoutHeaderMobile />
    </div>
    <div class="top-hero-404">
      <h1>Ничего не найдено</h1>
      <NuxtLink to="/">
        На главную
      </NuxtLink>
    </div>
    <div class="footer">
      <PublicWidgetsLayoutFooterDefault />
    </div>
  </q-layout>
</template>

<script setup>

useHead({
  title: 'Ошибка 404',
  meta: [
    { name: 'description', content: 'Ошибка 404' },
    { name: 'keywords', content: 'Ошибка 404' }
  ],
  bodyAttrs: {
    class: 'public'
  },
  htmlAttrs: {
    lang: 'ru-RU'
  }
})
</script>

<style lang="scss" scoped>
.top_header {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: 30px;
  margin-right: 30px;
  z-index: 1000;
}

.whatsapp-button {
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  z-index: 3000;
  width: 60px;
}

.top-hero-404 {
  background: url('/images/modal_bg.jpg') no-repeat center center;
  background-size: cover;
  background-color: $primary;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 900;

  h1 {
    @include more-than-small-mobile {
      font-size: 32px;
      line-height: 40px;
    }

    @include more-than-laptop {
      font-size: 40px;
      line-height: 48px;
    }

    @include more-than-tablet {
      font-size: 48px;
      line-height: 56px;
    }
  }

  color: #fff;
  font-size: 40px;
  text-align: center;
  a {
    @include reset-link;
    text-decoration: underline;
  }
}

.container {
  max-width: 100%;
  margin: 0 auto;
}
</style>
