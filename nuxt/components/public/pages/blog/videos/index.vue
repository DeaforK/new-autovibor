<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="breadcrumbs"
    name="Видеоблог"
  />
  <PublicWidgetsBlogVideoVideosList
    :videos="videos"
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
import { useVideosStore } from '~/components/public/entities/Videos/model'

import { type TVideo, type TVideosResponse } from '~/components/public/entities/Videos/types'

const { getVideos } = useVideosStore()

const videos = ref<Array<TVideo>>([])
const count = ref<number>(1)
const initPageNumber = 1
const currentPage = ref<number>(1)
const itemsPerPage = 12
const maxPages = computed(() => Math.ceil(count.value / itemsPerPage))

watch(currentPage, async newPageNumber => {
  const { data } = await useAsyncData('video', async () => await getVideos(newPageNumber))
  window.scrollTo(0, 0)
  const prepared = unref(data) as TVideosResponse
  videos.value = prepared.rows
  count.value = prepared.count
})

const { data } = await useAsyncData('video', async () => await getVideos(initPageNumber))

const prepared = unref(data) as TVideosResponse

if (prepared) {
  videos.value = prepared.rows
  count.value = prepared.count
}

const breadcrumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Блог',
    to: '/blog'
  },
  {
    label: 'Видеоблог',
    to: '/blog/videos'
  }
])

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: 'Видеоблог | Автовыбор-екб',
  description: 'Видеоблог',
  keywords: '',
  ogTitle: 'Видеоблог',
  ogDescription: 'Видеоблог',
  ogType: 'website'
})
</script>
