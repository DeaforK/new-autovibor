<template>
  <div class="container">
    <PublicWidgetsTopHeroImport>
      <template #title>
        Авто под заказ из Южной Кореи, Китая и Японии с большой выгодой
      </template>
      <template #body>
        В стоимость  ВКЛЮЧЕНО ВСЕ: подбор авто, комплексная проверка за<br> рубежом, покупка, оформление, доставка, таможенные платежи.
        <br>Работаем в автомобильной сфере более 10 лет, тысячи клиентов доверяют нам.
      </template>
    </PublicWidgetsTopHeroImport>

    <PublicWidgetsInfoStatistics :statistics="importedPageStatistics" />
    <PublicWidgetsInfoChooseUsedCar />
    <PublicWidgetsCarFilter />
    <PublicWidgetsInfoCards
      title="АВТОВЫБОР - Надежный партнер по доставке автомобилей из-за границы"
      :cards="carDeliveryData.cardList"
    />
    <PublicWidgetsInfoCostCalculation />
    <PublicWidgetsDeliveryPurchaseStages
      :stages="carDeliveryData.purchaseStages"
    />
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
import { useInitStore } from '~/components/public/entities/initStore/model'
useHead({
  title: 'Доставить авто из-за рубежа'
})
const { importedPageStatistics } = useInitStore()
</script>

<style lang="scss" scoped></style>
