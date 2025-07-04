<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Блог"
  />
  <div class="blog-container">
    <PublicSharedUiSimilarCard :props="props" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'secondary'
})
useSeoMeta({
  title: 'Блог | Автовыбор-екб',
  description: 'Блог',
  keywords: '',
  ogTitle: 'Блог',
  ogDescription: 'Блог',
  ogType: 'website'
})

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Блог',
    to: '/blog'
  }
])

const props = [
  {
    name: 'Видеоблог',
    poster: '/images/blog/videos.jpeg',
    url: 'blog/videos'
  },
  {
    name: 'Статьи по автоподбору',
    poster: '/images/blog/articles.jpeg',
    url: 'blog/articles'
  },
  {
    name: 'Shorts',
    poster: '/images/blog/shorts.png',
    url: 'blog/shorts'
  },
  {
    name: 'Видео отзывы',
    poster: '/images/blog/video-reviews.png',
    url: 'blog/video-reviews'
  }
]
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
