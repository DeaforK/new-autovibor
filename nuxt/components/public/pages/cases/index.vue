<template>
  <div class="cases-container">
    <PublicWidgetsLayoutHeaderWithBreadcrumbs
      :breadcrumbs="crumbs"
      name="Примеры наших работ"
    />

    <h1>Примеры наших работ</h1>
    <PublicWidgetsCasesCaseList
      :cases="cases"
      :values="values"
      :filter="filter"
      :loading="loading"
      @filter="filterCases"
    />
    <div
      class="row justify-center"
      style="padding: 40px 0"
    >
      <q-pagination
        v-if="cases?.length"
        v-model="filter.page"
        :max="maxPages"
        text-color="white"
        color="black"
        :max-pages="8"
        boundary-numbers
        direction-links
        @update:model-value="
          filterCases(filter);
          $router.replace({
            path: $route.fullPath,
            query: { ...$route.query, page: filter.page }
          })
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  TCase,
  TCasesPayload,
  TCasesResponse,
  TCasesValue
} from '~/components/public/entities/Cases/types'
import { useCasesStore } from '~/components/public/entities/Cases/model'

const { getCases } = useCasesStore()
const route = useRoute()

const cases = ref<Array<TCase>>([])
const values = ref<Array<TCasesValue>>([])
const maxPages = ref<number>(1)
const loading = ref(false)
const itemsPerPage = 12
const filter = ref({
  brand: '',
  model: '',
  yearOfManufactureFrom: '',
  yearOfManufactureTo: '',
  page: 1
})

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Уже подобрали',
    to: '/cases'
  }
])

if (route.query) {
  filter.value = {
    ...filter.value,
    ...route.query
  }
  if (route.query?.page) {
    filter.value.page = Number(route.query.page)
  }
}

const { data } = await useAsyncData('case', async () => await getCases(filter.value))

const prepared = unref(data) as TCasesResponse

if (prepared) {
  cases.value = prepared.cars.rows
  values.value = prepared.values
  maxPages.value = Math.ceil(prepared.cars.count / itemsPerPage)
}

if (!cases.value.length) {
  filter.value.page = 1
}

const filterCases = async (payload: TCasesPayload) => {
  loading.value = true
  window.scroll(0, 0)
  try {
    const { cars, values: carValues } = await getCases(payload)
    cases.value = cars.rows
    values.value = carValues
    maxPages.value = Math.ceil(cars.count / itemsPerPage)
  } catch (error) {
    console.error('Failed to filter cases:', error)
  } finally {
    loading.value = false
  }
}

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: 'Уже подобрали | Автовыбор-екб',
  description: 'Уже подобрали',
  keywords: 'Уже подобрали',
  ogTitle: 'Уже подобрали',
  ogDescription: 'Уже подобрали',
  ogType: 'website'
})
</script>

<style lang="scss" scoped>
.cases-container {
  background-color: $primary;
  min-height: 60vh;
  h1 {
    padding: 50px 0;
    font-size: 28px;
    text-align: center;
    font-weight: bold;
    line-height: 36px;
    text-align: center;
    color: white;
    @include more-than-mobile {
      line-height: 44px;
      font-size: 36px;
    }
  }
}

</style>
