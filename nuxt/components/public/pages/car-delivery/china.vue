<template>
  <div class="container">
    <PublicWidgetsTopHeroCountries
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
    </PublicWidgetsTopHeroCountries>
    <PublicWidgetsInfoStatistics :statistics="importedPageStatistics" />
    <PublicWidgetsCarFilter :title="pageData?.fields.filterTitle" />
    <PublicWidgetsReviewsSlider />
    <PublicWidgetsInfoChinaKey />
    <PublicWidgetsCarCostEstimate />
    <PublicWidgetsCompanyTrust :title="pageData?.fields.companyTitle" />
    <PublicWidgetsWhyChooseUs />
    <PublicWidgetsAboutPaymentSteps :steps="pageData.fields.steps" />
    <PublicWidgetsInfoCheckStatusCar />
    <PublicWidgetsAboutPaymentStages :stages="pageData.fields.stages" />
    <PublicWidgetsCommonFormCarCost />
    <PublicWidgetsAboutWhyChooseUs :points="carDeliveryData.whyChooseUsPoints" />
    <PublicWidgetsAboutYoutubeChannel />
    <PublicWidgetsInfoConsultCountries />
    <PublicWidgetsAboutRating />
    <PublicWidgetsAboutMap />
  </div>
</template>

<script setup lang="ts">
import { carDeliveryData } from './data'
import { deliveryPages } from './pageData'
import { useInitStore } from '~/components/public/entities/initStore/model'

const { importedPageStatistics } = useInitStore()

const pageData = deliveryPages['china']


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
