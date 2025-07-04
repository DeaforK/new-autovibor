<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Видео отзывы"
  />
  <PublicWidgetsBlogVideoReviewVideosReviewsList
    :videos-reviews="videosReviews"
    :count="count"
  />
  <div
    class="row justify-center"
    style="margin-bottom: 40px"
  >
    <q-pagination
      v-model="currentPage"
      :max="maxPages"
    />
  </div>
</template>

<script setup lang="ts">
import { useVideosReviewsStore } from '~/components/public/entities/VideoReviews/model'

import { type TVideoReview, type TVideosResponse } from '~/components/public/entities/VideoReviews/types'

const { getVideosReviews } = useVideosReviewsStore()

const videosReviews = ref<Array<TVideoReview>>([])
const count = ref<number>(1)
const initPageNumber = 1
const currentPage = ref<number>(1)
const itemsPerPage = 12
const maxPages = computed(() => Math.ceil(count.value / itemsPerPage))

watch(currentPage, async newPageNumber => {
  const { data } = await useAsyncData('videoReviews', async () => await getVideosReviews(newPageNumber))
  window.scrollTo(0, 0)
  const prepared = unref(data) as TVideosResponse
  videosReviews.value = prepared.rows
  count.value = prepared.count
})

const { data } = await useAsyncData('videoReviews', async () => await getVideosReviews(initPageNumber))

const prepared = unref(data) as TVideosResponse

if (prepared) {
  videosReviews.value = prepared.rows
  count.value = prepared.count
}

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Блог',
    to: '/blog'
  },
  {
    label: 'Видео отзывы',
    to: '/blog/articles'
  }
])

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: 'Видео отзывы | Автовыбор-екб',
  description: 'Видео отзывы',
  keywords: '',
  ogTitle: 'Видео отзывы',
  ogDescription: 'Видео отзывы',
  ogType: 'website'
})
</script>

<style lang="scss" scoped>

</style>