<template>
  <div class="product-container">
    <div
      v-if="data.title"
      class="product-title"
    >
      {{ data?.title }}
    </div>
    <div class="product-wrapper">
      <div
        class="q-pa-md"
        style="height: 100%;"
      >
        <img
          v-if="data.images.length === 1"
          :src="data.images[0]"
          style="border-radius: 30px; width: 100%; min-height: 100%;"
        >
        <q-carousel
          v-if="data.images.length > 1"
          v-model="slide"
          v-model:fullscreen="fullscreen"
          swipeable
          animated
          arrows
          padding
          infinite
          thumbnails
          style="border-radius: 30px; padding-top: 0; min-height: 100%;"
          :class="fullscreen ? 'fullscreen-mode' : ''"
        >
          <q-carousel-slide
            v-for="(car, i) in data.images"
            :key="i"
            :name="i"
            :img-src="car"
            class="bg-cover"
          />

          <template #control>
            <q-carousel-control
              position="top-right"
              :offset="[18, 18]"
            >
              <q-btn
                push
                round
                dense
                color="white"
                text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
      <div class="details q-pa-md">
        <q-table
          :rows="rows"
          row-key="name"
          flat
          :dense="$q.screen.lt.md"
          :columns="columns"
          :pagination="{ page: 1, rowsPerPage: 10 }"
          hide-header
          hide-bottom
          card-class="bg-black text-white text-weight-bold "
          class="bg-black text-white"
          style="font-size: 18px"
          table-class="text-weight-bold"
        />
        <div class="price-block">
          <div class="product-price">
            <span>
              Стоимость
              <!-- <br> -->
              автомобиля
            </span>

            <br>

            <span style="font-size: 32px; color: #de5c31">{{ data.price }} ₽</span>

            <div>
              <slot />
            </div>
          </div>

          <img
            :src="'/images/stamp.png'"
            style="width: 40%; height: 80%"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TServiceList } from '~/components/public/entities/Cases/types'

interface Props {
  data: {
    title?: string | null
    engine: number
    transmission: string
    gear: string
    owners: number
    mileage: number
    specialict: string
    service: number
    yearOfService: number
    price: string
    images: string[]
  }
  year: number
  servicesList: TServiceList
}

const getServiceById = (serviceId: number) => {
  const service = servicesList.services.find(serivce => serivce.id === serviceId)
  return service
}

const { data, servicesList, year } = defineProps<Props>()

const service = getServiceById(data.service)

const slide = ref(0)

const fullscreen = ref(false)

const columns = [
  {
    required: true,
    align: 'left',
    field: (row: number | string | any) => row.name,
    format: (val: string | number) => `${val}`
  },
  {
    required: true,
    align: 'right',
    field: (row: number | string | any) => row.value,
    format: (val: string | number) => `${val}`
  }
]

const rows = [
  {
    name: 'Год выпуска:',
    value: year
  },
  {
    name: 'Двигатель:',
    value: data.engine
  },
  {
    name: 'Привод:',
    value: data.transmission
  },
  {
    name: 'Коробка передач:',
    value: data.gear
  },
  {
    name: 'Владельцы:',
    value: data.owners
  },
  {
    name: 'Пробег:',
    value: data.mileage
  },

  {
    name: 'Специалист:',
    value: data.specialict
  },

  {
    name: 'Услуга:',
    value: service?.label
  },
  ,
  {
    name: 'Год исполнения:',
    value: data.yearOfService
  }
]
</script>

<style lang="scss">
.product-container {
  background-color: $primary;

  .product-title {
    color: white;
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    padding: 40px 0;
  }

  .product-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    @include more-than-laptop {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .details {
    background-color: black;
    color: white;
    border-radius: 30px;
    padding: 20px;
    @include more-than-mobile {
      padding: 30px 40px;
      margin: 16px;
    }

    .q-table thead th,
    .q-table tbody td {
      font-size: 14px;
      @include more-than-laptop {
        font-size: 18px;
      }
    }

    .price-block {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .product-price {
        font-size: 14px;
        font-weight: bold;
        padding-left: 13px;
        @include more-than-laptop {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
