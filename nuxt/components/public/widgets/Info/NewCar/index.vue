<template>
  <div class="new-car-info">
    <div class="new-car-info__container">
      <h1>Подбор нового автомобиля</h1>

      <div class="new-car-info__container__wrapper">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="new-car-info__container__wrapper__block"
        >
          <div class="new-car-info__container__wrapper__block__img-block">
            <img :src="item.image">
          </div>

          <h2>{{ item.header }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data } from './data'
</script>

<style lang="scss" scoped>


.new-car-info {

  @include more-than-small-mobile {
    margin-top: 150px;
  }

  @include more-than-tablet {
    margin-top: 20px;
  }
  h1 {
    font-weight: bold;
    text-align: center;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 50px;

    @include more-than-tablet {
      padding-top: 40px;
    }
  }

  h2 {
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.05em;
    font-weight: bold;
    text-align: center;
  }
  &__container {
    margin-bottom: 50px;
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 0 10px;

      @include more-than-tablet {
        flex-direction: row;
      }

      &__block {
        display: flex;
        flex-direction: column;

        &__img-block {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 127px;
          height: 98px;
          margin: 0 auto 28px auto;
        }
      }
    }
  }
}
</style>
