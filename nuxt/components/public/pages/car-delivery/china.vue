<template>
  <div class="container">
    <PublicWidgetsTopHeroImportJKC
      :list="pageData.fields.list"
      :background-image="pageData.fields.backgroundImage"
    >
      <template
        v-if="pageData.fields.topHeroTitle"
        #title
      >
        {{ pageData.fields.topHeroTitle }}
      </template>

      <template
        v-if="pageData.fields.topHeroDescription"
        #title-body
      >
        {{ pageData.fields.topHeroDescription }}
      </template>
    </PublicWidgetsTopHeroImportJKC>
    <PublicWidgetsInfoStatistics :statistics="importedPageStatistics" />
    <PublicWidgetsCarFilter :title="pageData?.fields.filterTitle" />
    <PublicWidgetsReviewsBlock />
    <PublicWidgetsSection2 />
    <CarCostEstimateSection />
    <CompanyTrustSection :title="pageData?.fields.companyTitle" />
    <WhyChooseUs />
    <PublicWidgetsAboutPaymentStagesSteps :steps="pageData.fields.steps" />
    <PublicWidgetsInfoCheckStatusCar />
    <PublicWidgetsAboutPaymentStages :stages="pageData.fields.stages" />
    <PublicWidgetsFormCarCost />
    <PublicWidgetsAboutWhyChooseUs :points="carDeliveryData.whyChooseUsPoints" />
    <PublicWidgetsAboutYoutubeChannel />
    <Consult />
    <PublicWidgetsAboutRating />
    <PublicWidgetsAboutMap />
  </div>
</template>

<script setup lang="ts">
import { carDeliveryData } from './data'
import { deliveryPages } from './pageData'
import { useInitStore } from '~/components/public/entities/initStore/model'
import PublicWidgetsTopHeroImportJKC from '~/components/public/widgets/ReviewsSlider/PublicWidgetsTopHeroImportJKC.vue'
import PublicWidgetsReviewsBlock from '~/components/public/widgets/ReviewsSlider/index.vue'
import PublicWidgetsSection2 from '~/components/public/widgets/ReviewsSlider/Section2.vue'
import CarCostEstimateSection from '~/components/public/widgets/ReviewsSlider/CarCostEstimateSection.vue'
import CompanyTrustSection from '~/components/public/widgets/ReviewsSlider/CompanyTrustSection.vue'
import WhyChooseUs from '~/components/public/widgets/ReviewsSlider/WhyChooseUs.vue'
import PublicWidgetsAboutPaymentStagesSteps from '~/components/public/widgets/ReviewsSlider/PublicWidgetsAboutPaymentStagesSteps.vue'
import PublicWidgetsFormCarCost from '~/components/public/widgets/ReviewsSlider/PublicWidgetsFormCarCost.vue'
import Consult from '~/components/public/widgets/ReviewsSlider/Consult.vue'

const { importedPageStatistics } = useInitStore()

const pageData = deliveryPages['china'] // или 'japan', 'china' в зависимости от страницы


useHead({
  title: pageData.title || 'Автовыбор',
  meta: [{ name: 'description', content: pageData.description || '' }]
})
</script>


<style lang="scss">
.article-container {
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  max-width: 90%;

  @media (min-width: 1024px) {
    max-width: 50%;
  }
}

.text-editor {
  img {
    max-width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-top: 10px;
  }
}

.shorts__video {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  padding: 20px;

  iframe {
    background-color: black;
    border: none;
  }
}

.seperator-component {
  text-align: center;
  margin: 20px 0;
  color: #ccc;
}
</style>
