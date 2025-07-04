<template>
  <div class="car_card__container">
    <div
      v-for="item in insurance.props"
      :key="item.insureanceTitle"
      class="car_card__container__wrapper"
    >
      <img
        :src="item.logo"
        width="100px"
        class="car_card__container__wrapper__logo"
      >

      <div class="car_card__container__wrapper__header">
        <div class="car_card__container__wrapper__header__wrapper">
          <img
            :src="item.img"
            :alt="item.insureanceTitle"
            class="car_card__container__wrapper__header__wrapper__img"
          >

          <h3>{{ item.insureanceTitle }}</h3>
        </div>

        <p>{{ item.description }}</p>
      </div>

      <div
        v-if="item.info"
        class="car_card__container__wrapper__info_wrapper"
      >
        <div
          v-for="(infoItem, index) in item.info"
          :key="index"
          class="car_card__container__wrapper__info_wrapper__info"
        >
          <h4>{{ infoItem.title }}</h4>

          <p>{{ infoItem.description }}</p>
        </div>
      </div>
      <div class="car_card__container__wrapper__links">
        <PublicSharedUiPrimaryButton
          style="padding: 15px 25px"
          @click="navigateTo(`${item.link}#calc`)"
        >
          оформить полис
        </PublicSharedUiPrimaryButton>

        <NuxtLink :to="item.link">
          Узнать подробнее
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  props: {
    insureanceTitle: string
    logo: string
    img: string
    description: string
    info?: { title: string; description: string }[]
    link: string
  }[]
}
const insurance = defineProps<Props>()
</script>

<style lang="scss" scoped>


.car_card__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @include more-than-small-mobile {
    padding: 5px;
  }

  @include more-than-mobile {
    padding: 80px 40px;
  }

  p {
    font-size: 16px;
    color: #000000;
    margin-bottom: 15px;
    max-width: 80%;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
  }

  h4 {
    font-weight: 500;
    line-height: 1.1;
    font-size: 18px;
  }

  &__wrapper {
    background-color: white;
    border-radius: 25px;
    padding: 25px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    gap: 10px;
    width: 100%;
    @include more-than-tablet {
      width: 80%;
    }

    &__logo {
      @include more-than-small-mobile {
        display: none;
      }

      @include more-than-laptop {
        display: block;
        position: absolute;
        top: 5%;
        right: 2%;
      }
    }

    &__links {
      @include more-than-small-mobile {
        display: flex;
        flex-direction: row;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      @include more-than-mobile {
        justify-content: flex-start;
      }

      a {
        @include reset-link;
        color: #2e6be6;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    &__header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding-bottom: 10px;

        &__img {
          width: 24px;
        }
      }
    }

    &__info_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @include more-than-small-mobile {
        flex-wrap: wrap;
        gap: 10px;
      }

      @include more-than-mobile {
        flex-wrap: nowrap;
        gap: 20px;
      }

      &__info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
