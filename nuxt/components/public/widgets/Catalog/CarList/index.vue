<template>
  <div class="catalog-container">
    <div class="filter-input">
      <q-select
        v-model="filter.brand"
        :options="options.brand"
        hide-dropdown-icon
        map-options
        bg-color="white"
        filled
        popup-content-class="popup-style"
        :popup-content-style="{ backgroundColor: 'white', color: '#000' }"
        @update:model-value="
          ($event: TItem) => {
            filter.brand = $event.value
            filter.model = ''
            filter.page = 1
            $emit('filter', { ...filter })
            $router.push({ path: '/catalog', query: filter.brand ? {
              brand: filter.brand
            } : {} })
          }
        "
      >
        <template #append>
          <q-icon
            name="mdi-arrow-down"
            style="color: black"
          />
        </template>
      </q-select>
      <q-select
        v-model="filter.model"
        :options="modelOptions"
        :disable="!filter.brand"
        hide-dropdown-icon
        map-options
        bg-color="white"
        filled
        popup-content-class="popup-style"
        :popup-content-style="{ backgroundColor: 'white', color: '#000' }"
        @update:model-value="
          ($event: TItem) => {
            filter.model = $event.value
            filter.page = 1
            $emit('filter', { ...filter })
            $router.push({ path: '/catalog', query: filter.model ? {
              brand: filter.brand,
              model: filter.model
            } : { brand: filter.brand } })
          }
        "
      >
        <template #append>
          <q-icon
            name="mdi-arrow-down"
            style="color: black"
          />
        </template>
      </q-select>
      <PublicSharedUiBlackButton
        @click="
          () => {
            filter.model = ''
            filter.brand = ''
            filter.page = 1
            $emit('filter', { ...filter })
            $router.push({ path: '/catalog' })
          }
        "
      >
        Сбросить
      </PublicSharedUiBlackButton>
    </div>
    <div
      v-if="loading"
      style="display: flex; justify-content: center; padding: 60px 40px 90px;"
    >
      <q-spinner
        color="black"
        size="3em"
        :thickness="10"
      />
    </div>
    <template v-else>
      <div
        v-if="!catalog.length"
        style="text-align: center; font-size: 24px; padding-top: 30px; color: white"
      >
        Ничего не найдено
      </div>
      <div class="catalog-container__wrapper">
        <div
          v-for="item in catalog"
          :key="item.pageId"
          class="model-card"
        >
          <img
            :src="`${item.poster}`"
            :alt="item.name"
            class="model-card__model-img"
          >
          <h2>{{ item.name }}</h2>

          <PublicSharedUiBlackButton
            class="model-card__btn"
            @click="navigateTo(`/${item.url}`)"
          >
            Подробнее
          </PublicSharedUiBlackButton>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['filter'])
const route = useRoute()

export type TCar = {
  pageId: number
  poster: string
  url: string
  name: string
  favorite: boolean
}

export type TItem = {
  label: string
  value: string
}

export type TFilter = {
  brand: string,
  model: string,
  page: number
}

const props = defineProps({
  catalog: {
    type: Array<TCar>,
    default: () => []
  },
  values: {
    type: Object,
    default: () => {}
  },
  filter: {
    type: Object,
    default: () => {
      return {
        brand: '',
        model: '',
        page: 1
      }
    }
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const filter = toRef(props.filter as TFilter)

if (route.query.brand) {
  const brand = route.query.brand
  filter.value.brand = brand.toUpperCase()
}

if (route.query.model) {
  const model = route.query.model
  filter.value.model = model.toUpperCase()
}

const options = ref({
  brand: [
    {
      label: 'Все марки',
      value: ''
    },
    ...(Object.keys(props.values).map((item: any) => {
      return { label: item, value: item }
    }) ?? [])
  ]
})

const modelOptions = computed(() => {
  let models = [
    {
      label: 'Все модели',
      value: ''
    }
  ]

  if (filter.value.brand && props.values[filter.value.brand]) {
    models = [
      ...models,
      ...props.values[filter.value.brand].map((model: string) => ({ label: model, value: model }))
    ]
  }

  return models
})
</script>

<style lang="scss" scoped>
.catalog-container {
  background-color: $primary;
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
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 90%;
    margin: 0 auto;
    gap: 30px;
    @include more-than-mobile {
      grid-template-columns: repeat(2, 1fr);
    }
    @include more-than-tablet {
      grid-template-columns: repeat(3, 1fr);
    }
    @include more-than-laptop {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
.filter-input {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 90%;
  margin: 0px auto;
  margin-bottom: 30px;
  @include more-than-mobile {
    grid-template-columns: repeat(2, 1fr);
  }
  @include more-than-laptop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.model-card {
  margin-bottom: 3rem;
  border-radius: 12px;
  display: grid;
  max-width: 100%;
  background-color: white;
  position: relative;

  &__model-img {
    object-fit: cover;
    height: 250px;
    width: 100%;
    border-bottom: 1px #f0f0f0 solid;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  h2 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    margin: 20px 30px 50px;

    @include more-than-mobile {
      font-weight: 600;
    }
  }

  &__btn {
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 15px 60px;

    &:hover {
      text-decoration: underline !important;
      color: $primary;
    }

    @include more-than-mobile {
      padding: 0 80px;
    }
  }
}
</style>
