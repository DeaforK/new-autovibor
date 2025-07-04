<template>
  <div class="background-white">
    <div class="product-description-container">
      <div class="product-description-container__boxes-container">
        <div
          v-if="data.benefits.length"
          class="product-description-container__boxes-container__box orange"
        >
          <span>Плюсы авто</span>
          <ul>
            <li
              v-for="(point, index) in data.benefits"
              :key="index"
            >
              {{ point }}
            </li>
          </ul>
        </div>

        <div
          v-if="data.negative.length"
          class="product-description-container__boxes-container__box black"
        >
          <span>Минусы авто</span>
          <ul>
            <li
              v-for="(point, index) in data.negative"
              :key="index"
            >
              {{ point }}
            </li>
          </ul>
        </div>

        <div
          v-if="data.recommended.length"
          class="product-description-container__boxes-container__box grey"
        >
          <span>Рекомендации</span>
          <ul>
            <li
              v-for="(point, index) in data.recommended"
              :key="index"
            >
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: {
    benefits: string[]
    negative: string[]
    recommended: string[]
  }
}
const { data } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.background-white {
  background-color: white;
}

.product-description-container {
  margin: 0px auto;
  padding: 40px 0;
  max-width: 95%;

  @include more-than-mobile {
    // max-width: 60%;
  }

  @include more-than-laptop {
    grid-template-columns: repeat(2, 1fr);
    // max-width: 80%;
  }

  p {
    font-size: 16px;
    line-height: 1.428571429;
    font-weight: 400;
    padding-bottom: 40px;
  }

  &__boxes-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 30px;

    @include more-than-laptop {
      grid-template-columns: repeat(3, 1fr);
    }

    &__box {
      padding: 30px 50px 30px 30px;
      border-radius: 16px;
      border: 3px solid;
      position: relative;
      height: fit-content;

      span {
        position: absolute;
        top: -14px;
        left: 34px;
        padding: 3px 10px;
        margin-bottom: 8px;
        font-weight: bold;
        background-color: #de5c31;
        color: #ffffff;
        border-radius: 12px;
      }

      ul {
        @include reset-list;
        padding-left: 30px;

        li {
          position: relative;
          font-weight: bold;
          font-size: 16px;
          line-height: 1.428571429;
          margin-bottom: 8px;
        }
      }
    }

    .orange {
      border-color: #de5c31;

      li::before {
        position: absolute;
        left: -32px;
        top: 10px;
        height: 4px;
        width: 18px;
        background-color: #de5c31;
        content: '';
        border-radius: 4px;
      }

      li::after {
        position: absolute;
        left: -25px;
        top: 4px;
        height: 18px;
        width: 4px;
        background-color: #de5c31;
        content: '';
        border-radius: 4px;
      }
    }

    .black {
      border-color: #000000;

      li::before {
        position: absolute;
        left: -32px;
        top: 10px;
        height: 4px;
        width: 18px;
        background-color: #de5c31;
        content: '';
        border-radius: 4px;
      }
    }

    .grey {
      background-color: #f6f6f6;

      span {
        background-color: #000000;
      }

      li::before {
        position: absolute;
        left: -32px;
        top: 2px;
        height: 18px;
        width: 18px;
        background-color: #de5c31;
        border-radius: 50%;
        content: '';
      }

      li::after {
        position: absolute;
        left: -26px;
        top: 8px;
        height: 6px;
        width: 6px;
        background-color: #ffffff;
        border-radius: 50%;
        content: '';
      }
    }
  }
}
</style>
