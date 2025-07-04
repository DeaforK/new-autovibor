<template>
  <PublicWidgetsTopHeroSection :video="true">
    <template #title>
      КАСКО в Екатеринбурге
    </template>
    <template #body>
      Оформление полиса в проверенных страховых компаниях. Выезд специалиста и доставка полиса в удобное для вас место/время
    </template>
  </PublicWidgetsTopHeroSection>

  <div>
    <PublicWidgetsInsuranceBenefitsList
      :title="'Преимущества страхования КАСКО онлайн'"
      :benefits-data="content.kaskoBenifetsData"
    />

    <PublicWidgetsInsuranceBenefits
      title="Выбор пакета и способа оплаты"
      :data="content.kaskoData"
      img="/images/insurance/kasko.jpeg"
      style="margin-top: 30px;"
    />
  </div>

  <PublicWidgetsCommonInsuranceForm
    id="calc"
    title="Рассчитайте стоимость КАСКО на калькуляторе"
    type="КАСКО"
  />

  <PublicSharedUiCompanyLogos style="max-width: 65%;" />

  <PublicWidgetsInsuranceContent :content="content.kasko" />
</template>

<script setup lang="ts">
import { content } from './data'

useHead({
  title: 'КАСКО'
})
</script>

<style lang="scss">

</style>
