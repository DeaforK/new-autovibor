<template>
  <div class="catalog-container">
    <PublicWidgetsLayoutHeaderWithBreadcrumbs
      :breadcrumbs="crumbs"
      name="Каталог автомобилей"
    />
    <h1>Каталог автомобилей</h1>
    <PublicWidgetsCatalogCarList
      :catalog="catalog"
      :values="values"
      :filter="filter"
      :loading="loading"
      @filter="filterCatalog"
    />
    <div
      class="row justify-center"
      style="padding: 40px 0"
    >
      <q-pagination
        v-if="catalog?.length"
        v-model="filter.page"
        :max="maxPages"
        text-color="white"
        color="black"
        direction-links
        @update:model-value="
          filterCatalog(filter);
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
import {
  type TCar,
  type TCatalogPayload,
  type TCatalogResponse,
  type TCatalogValue
} from '~/components/public/entities/CatalogCars/types'
import { useCatalogStore } from '~/components/public/entities/CatalogCars/model'

const { getCatalog } = useCatalogStore()
const route = useRoute()

const catalog = ref<Array<TCar>>([])
const values = ref<Array<TCatalogValue>>([])
const maxPages = ref<number>(1)
const loading = ref(false)
const itemsPerPage = 12
const filter = ref({
  model: '',
  brand: '',
  yearOfManufactureFrom: 0,
  yearOfManufactureTo: 0,
  page: 1
})

if (route.query) {
  filter.value = {
    ...filter.value,
    ...route.query
  }
  if (route.query?.page) {
    filter.value.page = Number(route.query.page)
  }
}

const { data } = await useAsyncData('catalog', async () => await getCatalog(filter.value))

const prepared = unref(data) as TCatalogResponse

if (prepared) {
  catalog.value = prepared.cars.rows
  values.value = prepared.values
  maxPages.value = Math.ceil(prepared.cars.count / itemsPerPage)
}

if (!catalog.value.length) {
  filter.value.page = 1
}

const filterCatalog = async (payload: TCatalogPayload) => {
  loading.value = true
  window.scroll(0, 0)
  try {
    const { cars, values: carValues } = await getCatalog(payload)
    catalog.value = cars.rows
    values.value = carValues
    maxPages.value = Math.ceil(cars.count / itemsPerPage)
  } catch (error) {
    console.error('Failed to filter catalog:', error)
  } finally {
    loading.value = false
  }
}

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Каталог моделей',
    to: '/catalog'
  }
])

useSeoMeta({
  title: 'Каталог моделей | Автовыбор-екб',
  description: 'Каталог моделей',
  keywords: 'Каталог моделей',
  ogTitle: 'Каталог моделей',
  ogDescription: 'Каталог моделей',
  ogType: 'website'
})

definePageMeta({
  layout: 'secondary'
})
</script>

<style lang="scss" scoped>
.catalog-container {
  background-color: $primary;
  min-height: 100vh;
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
