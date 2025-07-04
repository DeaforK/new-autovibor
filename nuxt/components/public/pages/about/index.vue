<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="О нас"
  />
  <div class="main_container">
    <div class="main_container__navigation">
      <NuxtLink to="/about/reviews">
        Отзывы
      </NuxtLink>
      <NuxtLink to="/about/payment">
        Оплата
      </NuxtLink>
      <NuxtLink to="/about/contacts">
        Контакты
      </NuxtLink>
    </div>

    <PublicSharedUiFlampContiner />
  </div>
</template>

<script setup lang="ts">

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'О нас',
    to: '/about'
  }
])
definePageMeta({
  layout: 'secondary',
  title: 'О нас',
  header: 'О нас'
})
useHead({
  title: 'О нас'
})
</script>

<style lang="scss" scoped>


.main_container {
  &__navigation {
    a {
      @include reset-link;
      padding: 15px;
    }

    background-color: $primary;
    display: flex;
    align-items: center;
    padding: 20px;
    padding-left: 75px;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: white;

    @include more-than-small-mobile {
      flex-direction: column;
    }

    @include more-than-mobile {
      flex-direction: row;
    }
  }
}
</style>
