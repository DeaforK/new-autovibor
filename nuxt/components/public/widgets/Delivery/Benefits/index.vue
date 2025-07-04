<template>
  <div class="conatiner">
    <div class="conatiner__wrapper">
      <img
        :src="'/images/audi.png'"
        class="conatiner__wrapper__image"
      >

      <div class="conatiner__wrapper__card-wrapper">
        <PublicWidgetsDeliveryBenefitsCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">


.conatiner {
  background: url('/images/report2.png') center no-repeat;
  background-size: cover;
  padding: 60px 40px;

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @include more-than-laptop {
      grid-template-columns: repeat(2, 1fr);
    }
    &__image {
      display: none;
      @include more-than-laptop {
        display: block;
        max-width: 100%;
      }
    }
    &__card-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      @include more-than-mobile {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>
