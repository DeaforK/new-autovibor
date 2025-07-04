<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Услуги"
  />
  <div class="blog-container">
    <PublicSharedUiSimilarCard :props="props" />
  </div>
</template>

<script setup lang="ts">
const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Услуги',
    to: '/services'
  }
])


const props = [
  {
    name: 'Выездная диагностика авто',
    poster: '/images/services/serivce-1.jpg',
    url: 'services/car-diagnose'
  },
  {
    name: 'Подбор под ключ',
    poster: '/images/services/service-2.jpg',
    url: 'services/car-choise'
  },
  {
    name: 'Проверка автомобиля',
    poster: '/images/services/service-3.jpg',
    url: 'services/car-check'
  },
  {
    name: 'Подбор нового автомобиля',
    poster: '/images/services/serivce-1.jpg',
    url: 'services/car-new'
  },
  {
    name: 'Сопровождение сделки',
    poster: '/images/services/service-5.png',
    url: 'services/transaction-support'
  },
  {
    name: 'Эксперт на день',
    poster: '/images/services/service-6.png',
    url: 'services/expert'
  }
]
definePageMeta({
  layout: 'secondary'
})
useSeoMeta({
  title: 'Услуги | Автовыбор-екб',
  description: 'Услуги',
  keywords: '',
  ogTitle: 'Услуги',
  ogDescription: 'Услуги',
  ogType: 'website'
})
</script>

<style lang="scss" scoped>
.blog-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  @include more-than-mobile {
    grid-template-columns: repeat(2, 1fr);
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
