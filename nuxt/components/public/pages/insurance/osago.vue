<template>
  <PublicWidgetsTopHeroSection :video="true">
    <template #title>
      ОСАГО в Екатеринбурге
    </template>
    <template #body>
      Бесплатно рассчитаем и оформим полис ОСАГО по тарифам страховых компаний без переплат и скрытых комиссий.
    </template>
  </PublicWidgetsTopHeroSection>

  <PublicWidgetsInsuranceBenefitsList
    :title="'Преимущества страхования ОСАГО онлайн'"
    :benefits-data="content.osagoBenifetsData"
  />

  <PublicWidgetsInsuranceBenefits
    title="Электронный полис автострахо&shy;вания"
    :data="content.osagoData"
    img="/images/insurance/osago.jpeg"
  />

  <PublicWidgetsCommonInsuranceForm
    id="calc"
    type="ОСАГО"
    title="Рассчитайте стоимость ОСАГО на калькуляторе"
  />

  <PublicSharedUiCompanyLogos style="max-width: 65%;" />

  <PublicWidgetsInsuranceContent :content="content.osago" />
</template>

<script setup lang="ts">
import { content } from './data'

useHead({
  title: 'ОСАГО'
})
</script>

<style lang="scss" scoped>

.white_plain {
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin: 30px;
    text-align: center;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    padding-bottom: 20px;
    text-align: left;
    @include more-than-tablet {
      max-width: 80%;
      margin: 0 auto;
    }
  }

  ul {
    padding-left: 50px;
  }
}
</style>
