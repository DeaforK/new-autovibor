<template>
  <PublicWidgetsTopHeroSection :video="true">
    <template #title>
      Сопровождение сделки
    </template>
  </PublicWidgetsTopHeroSection>
  <PublicWidgetsInfoStatistics />
  <PublicSharedUiInfoSection>
    <template #title>
      Продаете или покупаете автомобиль?
    </template>
    <template #body>
      <p>
        Наши эксперты помогут Вам составить полный пакет документов и провести юридически чистую
        сделку без дальнейших рисков.
      </p>
      <p>
        Возможен выезд эксперта в любую часть Екатеринбурга или помощь в составлении удаленно.
      </p>
      <p class="price">
        Стоимость услуги от 2 500 рублей.
      </p>
    </template>
  </PublicSharedUiInfoSection>
  <PublicSharedUiOrangeWrapper>
    <PublicWidgetsCommonOrangeForm />
  </PublicSharedUiOrangeWrapper>
  <PublicWidgetsInfoGuarantee />
  <PublicSharedUiFlampContiner />
  <PublicWidgetsAboutRating />
</template>

<script setup lang="ts">
useHead({
  title: 'Сопровождение сделки'
})
</script>

<style lang="scss" scoped>

p {
  font-size: 18px;
  line-height: 170%;

  @include more-than-mobile {
    font-size: 16px;
  }
}

.price {
  padding: 15px 40px;
  color: white;
  font-weight: 700;
  border-radius: 70px;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  margin: 0 auto;
}
</style>
