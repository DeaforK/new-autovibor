<template>
  <div class="car-filter">
    <div class="car-logos" />
    <div class="car-filter__container">
      <h2>{{ title || 'Фильтр по машинам' }}</h2>
      <p
        v-if="subtitle"
        class="car-filter__subtitle"
      >
        {{ subtitle }}
      </p>
      <div class="car-filter__container__wrapper">
        <q-select
          id="mark-id"
          v-model="brand"
          name="mark"
          label="Все марки"
          borderless
          :options="brandOpts"
        />

        <q-select
          id="model-id"
          v-model="model"
          name="model"
          label="Все модели"
          :options="modelOpts"
          borderless
        />

        <q-input
          v-model="yearOfManufactureFrom"
          type="number"
          placeholder="Год выпуска от"
          debounce="1000"
          borderless
        />

        <q-input
          v-model="yearOfManufactureTo"
          type="number"
          placeholder="Год выпуска до"
          debounce="1000"
          borderless
        />
      </div>
      <div class="catalog-container__wrapper">
        <div
          v-for="item in cars"
          :key="item.pageId"
          class="model-card"
          :class="item.favorite ? 'favorite' : null"
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
      <div
        v-if="isLoading"
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
          v-if="!cars?.length"
          style="text-align: center; font-size: 24px; padding-top: 30px; color: black;"
        >
          Ничего не найдено
        </div>
      </template>
      <button
        v-show="carsCount > page * maxCarsPage"
        class="car-filter__container__show-more__btn"
        @click="page = page + 1"
      >
        Показать больше
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useImportedCarsStore } from '~/components/public/entities/ImportedCars/model'
import { type TImportedCarsResponse } from '~/components/public/entities/ImportedCars/types'

const { getImportedCars } = useImportedCarsStore()

defineProps<{
  title?: string
  subtitle?: string
}>()

const brand = ref({label: '', value: ''})
const model = ref({label: '', value: ''})
const yearOfManufactureFrom = ref('')
const yearOfManufactureTo = ref('')
const page = ref(1)
const maxCarsPage = 8

const brandOpts = ref([{ value: '', label: 'Все марки' }])
const modelOpts = ref()
const isLoading = ref<boolean>(true)

const { data } = await useAsyncData('case', async () => {
  const cases = await getImportedCars({
    brand: brand.value.value,
    model: model.value.value,
    yearOfManufactureFrom: Number(yearOfManufactureFrom.value),
    yearOfManufactureTo: Number(yearOfManufactureTo.value),
    page: page.value
  }) as TImportedCarsResponse

  return cases
})
isLoading.value = false
const preparedData: Record<string, any> = unref(data) as any

const cars = computed(() => {
  let dataValue = data.value as TImportedCarsResponse | null
  if (dataValue)
    return dataValue.cars.rows
})

const carsCount = computed(() => {
  let dataValue = data.value as TImportedCarsResponse | null

  if (dataValue)
    return dataValue.cars.count
  return 0
})

watch(brand, () => {
  model.value.value = ''
  if (brand.value.value !== '') {
    modelOpts.value = [
      { value: '', label: 'Все модели' },
      ...preparedData.values[brand.value.value].map((model: string) => ({ value: model, label: model }))
    ]
  }
  else modelOpts.value = []
})

if (preparedData) {
  brandOpts.value = [
    ...brandOpts.value,
    ...Object.keys(preparedData.values).map((brand) => ({ value: brand, label: brand }))
  ]
}

watch([brand, model, yearOfManufactureFrom, yearOfManufactureTo], async () => {
  isLoading.value = true
  page.value = 1
  data.value = await getImportedCars({
    brand: brand.value.value,
    model: model.value.value,
    yearOfManufactureFrom: Number(yearOfManufactureFrom.value),
    yearOfManufactureTo: Number(yearOfManufactureTo.value),
    page: page.value
  }) as TImportedCarsResponse
  isLoading.value = false
})

watch(page, async () => {
  isLoading.value = true
  const newPageCars = await getImportedCars({
    brand: brand.value.value,
    model: model.value.value,
    yearOfManufactureFrom: Number(yearOfManufactureFrom.value),
    yearOfManufactureTo: Number(yearOfManufactureTo.value),
    page: page.value
  }) as TImportedCarsResponse

  let dataValue = data.value as TImportedCarsResponse | null

  if (dataValue)
    dataValue.cars.rows = dataValue.cars.rows.concat(newPageCars.cars.rows)

  isLoading.value = false
})
</script>

<style lang="scss" scoped>
.car-logos {
  background-image: url('/images/car-logos.png');
  width: 100vw;
  height: 76px;
  background-repeat: repeat;
}
.car-filter__subtitle {
  text-align: center;
  font-size: 16px;
  line-height: 1.4;
  color: #666;
  margin-bottom: 30px;

  @include more-than-tablet {
    font-size: 18px;
  }
}
.catalog-container__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  gap: 10px 20px;

  @include more-than-small-mobile {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 20px;
    width: 95%;
  }

  @include more-than-mobile {
    grid-template-columns: repeat(2, 1fr);
  }

  @include more-than-tablet {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin-top: 40px;
  }
  @include more-than-laptop {
    grid-template-columns: repeat(4, 1fr);
  }
}

.car-filter {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;


  h2 {
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
    color: black;
    margin: 0 auto;

    @include more-than-small-mobile {
      font-size: 26px;
      line-height: 30px;
    }

    @include more-than-tablet {
      font-size: 30px;
      line-height: 36px;
    }

    @include more-than-desktop {
      font-size: 36px;
      line-height: 44px;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 30px;
    width: 95%;

    @include more-than-small-mobile {
      width: 100%;
    }

    @include more-than-tablet {
      width: 95%;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 28px 22px;
      background-color: #da582d;
      border-radius: 20px;
      height: 100%;
      margin-top: 23px;

      @include more-than-small-mobile {
        flex-direction: column;
      }

      @include more-than-tablet {
        flex-direction: row;
      }

      select,
      label {
        background-color: #fff;
        height: 50px;
        width: 100%;
        border-radius: 90px;
        padding: 0 21px;
        border: none;
        color: rgb(0, 0, 0, 0.5);
      }
    }

    &__show-more__btn {
      background-color: #f1f1f1;
      border: none;
      padding: 20px 40px 20px 40px;
      gap: 10px;
      border-radius: 20px;
      margin: 0 auto;
      margin-top: 20px;

      font-size: 16px;
      line-height: 17px;
      font-weight: 700;
      @include more-than-small-mobile {
        width: 95%;
      }

      @include more-than-laptop {
        width: 100%;
      }
    }
  }
}

.model-card {
  margin-bottom: 30px;
  border-radius: 12px;
  display: grid;
  max-width: 100%;
  background-color: #F1F1F1;
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

    &:hover {
      text-decoration: underline !important;
      color: $primary;
    }

    @include more-than-mobile {
      padding: 0 80px;
    }
  }
}

.favorite {
  order: -1;
  border: 1px solid orange;
}
</style>