<template>
  <div class="benefits">
    <h2 v-html="title" />

    <div class="benefits__wrapper">
      <div
        v-for="benefit in benefitsData"
        :key="benefit.title"
        class="benefits__wrapper__box"
      >
        <div
          class="benefits__wrapper__box__container"
          :style="{ backgroundColor: backgroundColor }"
        >
          <img
            :src="benefit.img"
            class="benefits__wrapper__box__container__icon"
            :style="{ width: iconwidth, borderRadius: borderRadius }"
          >
        </div>

        <div class="benefits__wrapper__box__description">
          <h3 v-if="benefit.title">
            {{ benefit.title }}
          </h3>

          <p v-html="benefit.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  iconwidth?: string
  backgroundColor?: string
  borderRadius?: string
  benefitsData: {
    title?: string
    img?: string
    description?: string
  }[]
}

const { title, benefitsData, iconwidth, backgroundColor, borderRadius } = defineProps<Props>()
</script>

<style lang="scss" scoped>


.benefits {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include more-than-small-mobile {
    padding: 60px 0;
    margin-top: 60px;
  }

  @include more-than-laptop {
    max-width: 90%;
    margin: 0 auto;
    margin-top: 100px;
    padding: 20px;
  }

  h2 {
    font-weight: bold;
    text-align: center;
    text-align: center;
    overflow-wrap: break-word;
    max-width: 95%;

    @include more-than-small-mobile {
      font-size: 28px;
      line-height: 36px;
    }

    @include more-than-mobile {
      font-size: 36px;
      line-height: 44px;
    }
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 90%;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 30px;

    @include more-than-tablet {
      grid-template-columns: 1fr 1fr;
    }

    h3 {
      font-weight: bold;
      display: flex;
      font-size: 18px;
      line-height: 160%;
      letter-spacing: 0.05em;
      text-transform: uppercase;

      @include more-than-small-mobile {
        text-align: center;
      }

      @include more-than-mobile {
        text-align: left;
      }
    }

    p {
      font-size: 14px;
      line-height: 170%;

      @include more-than-small-mobile {
        text-align: center;
      }

      @include more-than-mobile {
        text-align: left;
      }
    }

    &__box {
      display: flex;
      flex-direction: row;
      gap: 30px;
      justify-content: flex-start;
      align-items: center;
      @include more-than-tablet {
        align-items: flex-start;
      }

      &__container {
        background-color: black;
        min-width: 82px;
        height: 82px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        &__icon {
          width: 25px;
        }
      }

      &__description {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        text-align: left;
        align-self: center;
        @include more-than-tablet {
          min-width: 300px;
        }
        h3 {
          text-align: left;
        }
        p {
          text-align: left;
          max-width: 90%;
        }
      }
    }
  }
}
</style>
