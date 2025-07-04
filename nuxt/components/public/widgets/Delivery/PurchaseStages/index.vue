<template>
  <div class="purchase-stages">
    <div class="purchase-stages__wrapper">
      <h2 class="purchase-stages__wrapper__title">
        Этапы покупки автомобиля
      </h2>
      <ul class="purchase-stages__wrapper__stages">
        <li
          v-for="(stage, index) in stages"
          :key="stage.title"
        >
          <div class="stage__top-side">
            <span class="stage-title">{{ stage.title }}</span>
            <p class="stage-sub-title">
              {{ stage.subtitle }}
            </p>
          </div>
          <div class="stage__bottom-side">
            <div class="stage-index">
              {{ '0' + (index + 1) }}
            </div>
            <img :src="`./images/car-delivery/stages/stage-${index + 1}.svg`">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ stages: { title: string; subtitle: string }[] }>()
</script>

<style lang="scss" scoped>
.purchase-stages {
  margin: 0 auto;
  margin-top: 30px;
  background-color: #f1f1f1;
  border-radius: 40px;
  font-family: "Montserrat";

  @include more-than-small-mobile {
    width: 100%;
  }

  @include more-than-mobile {
    width: 95%;
  }

  &__wrapper {
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      padding-top: 30px;
      font-size: 32px;
      font-weight: 700;
      line-height: 52px;
      text-align: center;
    }

    ul {
      @include reset-list;
      display: grid;
      gap: 30px;

      @include more-than-small-mobile {
        margin-top: 20px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 3fr));
        padding: 0;
      }

      @include more-than-mobile {
        margin-top: 0px;
        grid-template-columns: repeat(auto-fit, minmax(400px, 3fr));
        padding: 20px 36px;
      }

      li {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        border-radius: 30px;
        padding: 58px 30px 30px 50px;
        background-color: #ffffff;
      }
    }

    &__stages {
      margin: 0 auto;

      @include more-than-small-mobile {
        width: 100%;
      }

      @include more-than-laptop {
        width: 90%;
      }
      .stage {
        &__bottom-side {
          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-top: 30px;
        }
        font-family: 'TT Hoves';

        &-title {
          font-size: 28px;
          font-weight: 500;
          line-height: 31px;
        }

        &-sub-title {
          margin-top: 11px;
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
        }

        &-index {
          font-size: 24px;
          font-weight: 400;
          line-height: 31px;
          color: #da582d;
        }
      }
    }
  }
}
</style>