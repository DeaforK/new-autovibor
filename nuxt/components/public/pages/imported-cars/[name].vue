<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="car.breadcrumbs"
    :name="car.name"
  />
  <div class="detail-section">
    <div
      v-for="(component, index) in car.components"
      :key="index"
    >
      <div
        v-if="component.type === 'importedCarsMain'"
        class="detail-section__container"
      >
        <div class="detail-section__container__left">
          <h1
            class="detail-section__container__left__title detail-section__container__left__onlymobile"
          >
            {{ (component.props as ImportedCarsMainComponent)?.title }}
          </h1>

          <PublicWidgetsCarouselCatalog
            :images="(component.props as ImportedCarsMainComponent)?.images"
          />
        </div>

        <div class="detail-section__container__right">
          <h1
            class="detail-section__container__right__title detail-section__container__left__onlylaptop"
          >
            {{ (component.props as ImportedCarsMainComponent)?.title }}
          </h1>

          <div class="detail-section__container__right__details">
            <PublicWidgetsImportedCarsDetailsList
              :year="car.fields.yearOfManufacture"
              :car-data="component.props as ImportedCarsMainComponent"
            />
          </div>

          <PublicSharedUiPrimaryButton
            class="detail-section__container__left__onlymobile"
            @click="showModal = true"
          >
            Заказать подбор
          </PublicSharedUiPrimaryButton>

          <!-- <PublicSharedUiCatalogList
            :data="(component.props as ImportedCarsMainComponent)?.recommendation"
          />

          <PublicSharedUiPrimaryButton
            class="detail-section__container__left__onlylaptop"
            style="align-self: center"
            @click="showModal = true"
          >
            Заказать подбор
          </PublicSharedUiPrimaryButton>

          <PublicWidgetsCatalogSideList
            :rating="(component.props as ImportedCarsMainComponent)?.rating"
            class="detail-section__container__left__onlymobile"
          />

          <PublicWidgetsCatalogSideBlock
            :data="(component.props as ImportedCarsMainComponent)?.plusesAndMinuses"
            class="detail-section__container__left__onlymobile"
          /> -->
        </div>
      </div>
    </div>
    <template v-if="Object.values(car.tabs).length > 0">
      <div>
        <q-tabs
          v-model="tab"
          class="detail-section__tabs"
          inline-label
          outside-arrows
          mobile-arrows
          no-caps
          active-color="primary"
          indicator-color="primary"
        >
          <q-tab
            v-for="tabTitle in tabs"
            :key="tabTitle.name"
            :label="tabTitle.label"
            :name="tabTitle.name"
          />
        </q-tabs>

        <q-tab-panels v-model="tab">
          {{ car.tabs }}
          <q-tab-panel
            v-for="(tabValue, tabKey) in car.tabs"
            :key="tabKey"
            :name="tabKey"
          >
            <PublicWidgetsCatalogTab :blocks="tabValue" />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </template>
    <div class="btn-wrapper-catalog">
      <h1>Понравился автомобиль?</h1>
      <div class="btn-wrapper">
        <PublicSharedUiPrimaryButton @click="showModal = true">
          Заказать авто
        </PublicSharedUiPrimaryButton>
        <PublicSharedUiBlackButton @click="handleClick">
          Все кейсы этой модели
        </PublicSharedUiBlackButton>
      </div>
    </div>

    <PublicSharedUiOrangeWrapper>
      <PublicWidgetsCommonOrangeForm />
    </PublicSharedUiOrangeWrapper>

    <PublicSharedUiFlampContiner />

    <PublicWidgetsAboutRating />

    <PublicWidgetsAboutMap />
  </div>
  <PublicWidgetsCommonImportFormModal v-model:show-modal="showModal" />
</template>

<script setup lang="ts">
import type { TCar, ImportedCarsMainComponent } from '~/components/public/entities/ImportedCars/types'

import { useImportedCarsStore } from '../../entities/ImportedCars/model'
import { useRoute } from 'vue-router'

import { storeToRefs } from 'pinia'
import { useTabsStore } from '~/components/public/entities/ProductDetail/UI'

const store = useTabsStore()
const { tabs } = storeToRefs(store)
const tab = ref('description')

const showModal = ref(false)

const { getImportedCar } = useImportedCarsStore()
const route = useRoute()
const router = useRouter()
const car = ref<TCar>({} as TCar)
const { data, error } = await useAsyncData(
  'importedCar',
  async () => await getImportedCar({ url: String(`imported-cars/${route.params.name}`) })
)

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    message: error.value.message,
    fatal: true
  })
}

car.value = unref(data)!.page

function handleClick() {
  router.push(`/cases?brand=${car.value.fields.brand.toUpperCase()}&model=${car.value.fields.model.toUpperCase()}`)
}

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: () => `${car.value.title} | Aвтовыбор-екб`,
  description: 'Оказание услуг в области генерального проектирования',
  keywords: '',
  ogTitle: car.value.title,
  ogDescription: 'Оказание услуг в области генерального проектирования',
  ogType: 'website'
})
</script>

<style lang="scss" scoped>
.detail-section {
  line-height: 1.444444;
  background-color: white;

  &__container {
    display: flex;
    flex-direction: column;
    @include more-than-laptop {
      flex-direction: row;
      margin-bottom: 20px;
      max-width: 85%;
      margin: 0 auto;
    }

    &__left {
      padding: 20px;

      &__title {
        padding: 18px 10px;
        letter-spacing: 1px;
        color: $primary;
        font-size: 28px;
        text-align: center;
        font-weight: bold;
        line-height: 36px;
      }

      &__onlylaptop {
        display: none !important;
        @include more-than-laptop {
          display: grid !important;
        }
      }

      &__onlymobile {
        align-self: center;
        @include more-than-laptop {
          display: none !important;
        }
      }

      @include more-than-laptop {
        flex-grow: 1;
        width: 50%;
      }
    }

    &__right {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 50px;
      // justify-content: space-between;

      &__title {
        font-size: 28px;
        font-weight: bold;
        line-height: 36px;
        text-align: center;
        color: $primary;
        padding: 70px 0;
        padding-bottom: 20px;

        @include more-than-laptop {
          line-height: 44px;
          font-size: 36px;
        }
      }

      @include more-than-laptop {
        flex-grow: 1;
        width: 50%;
      }
    }
  }
  &__tabs {
    @include more-than-laptop {
      max-width: 80%;
      margin: 40px auto;
    }
  }
}
.btn-wrapper-catalog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-bottom: 40px;

  padding: 10px;
  h1 {
    font-size: 24px;
    line-height: 1.2;
    padding: 20px 0;
    padding-left: 5px;
    margin: 20px 0;
    font-weight: bold;
    text-align: center;
  }
  .btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    @include more-than-tablet {
      flex-direction: row;
    }
  }
}
</style>
