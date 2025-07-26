<template>
  <div class="payment-stages__wrapper">
    <div class="payment-stages">
      <h3 class="payment-stages__title">
        Оплата происходит в 4 этапа
      </h3>

      <ul class="payment-stages__list">
        <li
          v-for="(stage, index) in actualStages"
          :key="index"
        >
          <img
            :src="`/images/car-delivery/payment-stages/payment${index + 1}.png`"
            style="width: 80px; height: 80px;"
          >
          <b v-text="stage.title" />
          <p v-text="stage.body" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stages as defaultStages } from './data'

const props = defineProps<{
  stages?: {
    title: string
    body: string
  }[]
}>()

const actualStages = computed(() => props.stages ?? defaultStages)
</script>

<style lang="scss" scoped>
.payment-stages {
  display: grid;

  background: #fff;
  border-radius: 45px;
  margin: 0 auto;
  margin-top: 30px;

  @include more-than-small-mobile {
    padding: 30px 20px;
    padding-bottom: 45px;
    width: 100%;
  }

  @include more-than-mobile {
    padding: 30px;
    padding-bottom: 60px;
    width: 95%;
  }

  &__title {
    text-align: center;
    font-weight: bold;
    max-width: 90%;
    margin: 0 auto;

    @include more-than-small-mobile {
      font-size: 28px;
      line-height: 36px;
      margin-top: 15px;
    }

    @include more-than-mobile {
      font-size: 32px;
      line-height: 40px;
      margin-top: 0;
    }
  }

  &__list {
    @include reset-list;
    display: grid;
    // align-items: center;
    margin-top: 30px;
    gap: 25px;

    @include more-than-small-mobile {
      grid-template-columns: repeat(1, 1fr);
    }

    @include more-than-mobile {
      grid-template-columns: repeat(2, 1fr)
    }

    @include more-than-laptop {
      grid-template-columns: repeat(4, 1fr);
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 20px;
      gap: 10px;
      padding: 10px;

      b {
        height: 25%;
      }

      p {
        height: max-content;
        min-height: 50%;
      }

      @include more-than-small-mobile {
        text-align: center !important;
      }

      @include more-than-mobile {
        text-align: left;
      }
    }
  }
}
</style>