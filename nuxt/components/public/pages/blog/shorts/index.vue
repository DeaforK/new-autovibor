<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Shorts"
  />
  <PublicWidgetsBlogShortsShortsList
    :shorts="shorts"
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
import { useShortsStore } from '~/components/public/entities/Shorts/model'

import { type TShort, type TShortsResponse } from '~/components/public/entities/Shorts/types'

const { getShorts } = useShortsStore()

const shorts = ref<Array<TShort>>([])
const count = ref<number>(1)
const initPageNumber = 1
const currentPage = ref<number>(1)
const itemsPerPage = 12
const maxPages = computed(() => Math.ceil(count.value / itemsPerPage))

watch(currentPage, async newPageNumber => {
  const { data } = await useAsyncData('shorts', async () => await getShorts(newPageNumber))
  window.scrollTo(0, 0)
  const prepared = unref(data) as TShortsResponse
  shorts.value = prepared.rows
  count.value = prepared.count
})

const { data } = await useAsyncData('shorts', async () => await getShorts(initPageNumber))

const prepared = unref(data) as TShortsResponse

if (prepared) {
  shorts.value = prepared.rows
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
    label: 'Shorts',
    to: '/blog/shorts'
  }
])

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: 'Shorts | Автовыбор-екб',
  description: 'Shorts',
  keywords: '',
  ogTitle: 'Shorts',
  ogDescription: 'Shorts',
  ogType: 'website'
})
</script>
