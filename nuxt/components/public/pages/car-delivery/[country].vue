<template>
  <div class="container">
    <PublicWidgetsTopHeroImport
      :list="pageData.fields.list"
      :background-image="pageData.fields.backgroundImage"
    >
      <template #title>
        {{ pageData.fields.topHeroTitle }}
      </template>
    </PublicWidgetsTopHeroImport>
    <PublicWidgetsInfoStatistics :statistics="importedPageStatistics" />
    <PublicWidgetsCarFilter />
    <PublicWidgetsReviewsBlock :reviews="shortsPreview" />
    <PublicWidgetsSection2 />
    <CarCostEstimateSection />
    <CompanyTrustSection />
    <WhyChooseUs />
    <PublicWidgetsInfoCheckStatusCar />
    <PublicWidgetsAboutPaymentStages />
    <PublicWidgetsAboutWhyChooseUs :points="carDeliveryData.whyChooseUsPoints" />
    <PublicWidgetsAboutYoutubeChannel />
    <PublicWidgetsInfoConsult />
    <PublicWidgetsAboutRating />
    <PublicWidgetsAboutMap />
  </div>
</template>

<script setup lang="ts">
import { carDeliveryData } from './data'
import { deliveryPages } from './pageData'
import { useInitStore } from '~/components/public/entities/initStore/model'
import { useRoute } from 'vue-router'
import PublicWidgetsReviewsBlock from '~/components/public/widgets/ReviewsSlider/index.vue'
import PublicWidgetsSection2 from '~/components/public/widgets/ReviewsSlider/Section2.vue'
import CarCostEstimateSection from '~/components/public/widgets/ReviewsSlider/CarCostEstimateSection.vue'
import CompanyTrustSection from '~/components/public/widgets/ReviewsSlider/CompanyTrustSection.vue'
import WhyChooseUs from '~/components/public/widgets/ReviewsSlider/WhyChooseUs.vue'
import { useShortsStore } from '~/components/public/entities/Shorts/model'
import { type TShortsResponse } from '~/components/public/entities/Shorts/types'

const shortsPreview = ref<
  {
    image: string
    title: string
    link: string
  }[]
>([])

const { getShorts } = useShortsStore()

// Загружаем короткие видео (первые 4)
const { data: shortsData } = await useAsyncData('shorts-preview', () => getShorts(1))

const preparedShorts = shortsData.value as TShortsResponse

if (preparedShorts) {
  shortsPreview.value = preparedShorts.rows.map(short => ({
    image: short.poster,
    title: short.name,
    link: short.url // Убедись, что это внешняя ссылка или внутренняя
  }))
}

const { importedPageStatistics } = useInitStore()
const route = useRoute()
const country = route.params.country

type PageResponse = {
  page: {
    title?: string
    description?: string
    keywords?: string
    fields: Record<string, any>
  } | null
}

const { data: pageResponse } = await useAsyncData<PageResponse>(`page-${country}`, () =>
  $fetch(`/api/pages/car-delivery/${country}`)
)

const pageData = computed(() => {
  if (pageResponse.value?.page) {
    return pageResponse.value.page.fields
  }
  return deliveryPages[country as keyof typeof deliveryPages] || deliveryPages.korea
})

useHead(() => ({
  title: pageResponse.value?.page?.title || 'Автовыбор',
  meta: [
    {
      name: 'description',
      content: pageResponse.value?.page?.description || ''
    },
    {
      name: 'keywords',
      content: pageResponse.value?.page?.keywords || ''
    }
  ]
}))

</script>

<style lang="scss" scoped></style>
