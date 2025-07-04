<template>
  <div class="flamp_container">
    <PublicSharedUiFAQ />
    <h2>Результаты нашей ежедневной работы</h2>

    <LazyPublicFeaturesFlampWidget />

    <div class="flamp_container__btn_wrapper">
      <PublicSharedUiBlackButton @click="navigateTo('/about/reviews')">
        страница отзывов
      </PublicSharedUiBlackButton>

      <PublicSharedUiPrimaryButton @click="showModal = true">
        оставить заявку
      </PublicSharedUiPrimaryButton>
    </div>
  </div>

  <PublicWidgetsCommonFormModal v-model:showModal="showModal" />
</template>

<script setup lang="ts">
onMounted(() => {
  const script = document.createElement('script')
  script.src = '//widget.flamp.ru/loader.js'
  script.async = true
  document.head.appendChild(script)
})
const showModal = ref(false)
</script>

<style lang="scss" scoped>
.flamp_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  padding-bottom: 150px;
  margin: 0 auto;
  margin-top: 30px;

  @include more-than-small-mobile {
    width: 100%;
    margin-bottom: 50px;
  }

  @include more-than-tablet {
    width: 95%;
    margin-bottom: 50px;
    padding-bottom: 120px;
  }

  h2 {
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 40px;
    text-align: center;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 600;
    line-height: 1.1;
    color: inherit;
  }

  &__btn_wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
