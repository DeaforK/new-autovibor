<template>
  <div class="white_wrapper">
    <div class="white_wrapper__container">
      <div class="white_wrapper__container__heading">
        <h2 v-html="title" />

        <h3 v-if="subtitle">
          {{ subtitle }}
        </h3>
      </div>

      <div class="white_wrapper__container__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

const { title, subtitle } = defineProps<Props>()
</script>

<style lang="scss" scoped>


.white_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;

  &__container {
    display: flex;
    flex-direction: column;

    &__heading {
      h2 {
        font-weight: bold;

        @include more-than-small-mobile {
          font-size: 28px;
          line-height: 120%;
          padding: 0 !important;
          margin: 0 !important;
          text-align: center;
          line-height: 44px;
        }

        @include more-than-mobile {
          font-size: 36px;
          margin-bottom: 10px;
          padding: 0 10px;
        }
      }

      h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-align: center;

        @include more-than-small-mobile {
          font-size: 22px;
          line-height: 120%;
          padding: 0 !important;

          text-align: center;
          line-height: 44px;
          max-width: 100%;
          margin: 0 auto;
        }

        @include more-than-mobile {
          font-size: 24px;
          margin-bottom: 10px;
          padding: 0 10px;
        }
      }
    }

    &__content {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 0 auto;
      flex-wrap: wrap;
      @include more-than-mobile {
        max-width: 80%;
      }
    }
  }
}
</style>
