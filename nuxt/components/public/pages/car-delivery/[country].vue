<template>
  <div class="container">
    <PublicWidgetsTopHeroImport
      :list="pageData.list"
      :background-image="pageData.backgroundImage"
    >
      <template #title>
        {{ pageData.topHeroTitle }}
      </template>
    </PublicWidgetsTopHeroImport>
    <PublicWidgetsInfoStatistics
      :statistics="importedPageStatistics"
    />
    <PublicWidgetsCarFilter />
    <PublicWidgetsReviewsBlock :reviews="pageData.reviews" />
    <PublicWidgetsSection2 />
    <CarCostEstimateSection />
    <CompanyTrustSection />
    <WhyChooseUs />
    <PublicWidgetsInfoCheckStatusCar />
    <PublicWidgetsAboutPaymentStages />
    <PublicWidgetsAboutWhyChooseUs
      :points="carDeliveryData.whyChooseUsPoints"
    />
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
const { importedPageStatistics } = useInitStore()
const route = useRoute()
const country = route.params.country
const pageData = deliveryPages[country as keyof typeof deliveryPages] || deliveryPages.korea
useHead({
  title: pageData.pageTitle
})
</script>

<style lang="scss" scoped></style>
