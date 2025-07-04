<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Статьи по автоподбору"
  />
  <PublicWidgetsBlogStatmentStatmentList
    :statments="statments"
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
import { useStatmentsStore } from '~/components/public/entities/Statments/model'

import {
  type TStatment,
  type TStatmentsResponse
} from '~/components/public/entities/Statments/types'

const { getStatments } = useStatmentsStore()

const statments = ref<Array<TStatment>>([])
const count = ref<number>(1)
const initPageNumber = 1
const currentPage = ref<number>(1)
const itemsPerPage = 12
const maxPages = computed(() => Math.ceil(count.value / itemsPerPage))

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
    label: 'Статьи',
    to: '/blog/articles'
  }
])

watch(currentPage, async newPageNumber => {
  const { data } = await useAsyncData('video', async () => await getStatments(newPageNumber))
  window.scrollTo(0, 0)
  const prepared = unref(data) as TStatmentsResponse
  statments.value = prepared.rows
  count.value = prepared.count
})

const { data } = await useAsyncData('statment', async () => await getStatments(initPageNumber))

const prepared = unref(data) as TStatmentsResponse

if (prepared) {
  statments.value = prepared.rows
  count.value = prepared.count
}

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: 'Статьи по автоподбору | Автовыбор-екб',
  description: 'Статьи по автоподбору',
  keywords: '',
  ogTitle: 'Статьи по автоподбору',
  ogDescription: 'Статьи по автоподбору',
  ogType: 'website'
})
</script>
