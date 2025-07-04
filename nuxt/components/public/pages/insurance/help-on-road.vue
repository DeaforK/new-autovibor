<template>
  <PublicWidgetsTopHeroSection :video="true">
    <template #title>
      ПОМОЩЬ НА ДОРОГЕ В ЕКАТЕРИНБУРГЕ
    </template>
    <template #body>
      Программы помощи на дороге. Доставка карты помощи в удобное место
    </template>
  </PublicWidgetsTopHeroSection>

  <PublicWidgetsInsuranceBenefitsList
    :title="'«СВОИХ НЕ БРОСАЕМ!» КАРТА ПОМОЩИ НА ДОРОГЕ'"
    :benefits-data="content.helpBenefitsData"
    style="margin-top: 80px"
  />

  <PublicWidgetsCommonHelpForm id="calc" />

  <PublicSharedUiCompanyLogos style="max-width: 65%;" />

  <PublicWidgetsInsuranceContent :content="content.helpOnRoad" />
</template>

<script setup lang="ts">
import { content } from './data'

useHead({
  title: 'Помощь на дороге'
})
</script>
