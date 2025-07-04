<template>
  <div class="price_block">
    <div class="price_block__container">
      <h2 class="price_block__container__header">
        Даём 3 вида гарантии
      </h2>

      <div class="price_block__container__body">
        <div
          v-for="(item, index) in data"
          :key="item.title"
          style="height: auto;"
          class="price_block__container__body__card__container"
        >
          <div
            class="price_block__container__body__card"
            :style="{ background: `url(${item.image})` }"
          >
            <div>
              <h4>{{ item.title }}</h4>
            </div>

            <div class="price_block__container__body__card__container__description">
              <p v-text="item.text" />
              <button
                class="button__container"
                @click="viewModal[index].value = true"
              >
                Подробнее
              </button>
              <PublicWidgetsCommonGuaranteeLegalModal v-model:showModal="showLegalModal" />
              <PublicWidgetsCommonGuaranteeTechModal v-model:showModal="showTechModal" />
              <PublicWidgetsCommonGuaranteeCarModal v-model:showModal="showCarModal" />
            </div>
          </div>
        </div>
      </div>
      <p class="price_block__container__restrictions">
        *Есть ограничения. Подробнее об условиях предоставления гарантии расскажет наш специалист.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data } from './data'
const showLegalModal = ref(false)
const showTechModal = ref(false)
const showCarModal = ref(false)

const viewModal = [showLegalModal, showTechModal, showCarModal]
</script>

<style lang="scss">
.price_block {
  background: #fff;
  background-size: cover;

  &__container {
    padding: 80px 0;
    max-width: 90%;
    margin: 0 auto;

    @include more-than-small-mobile {
      padding: 20px 0;
    }

    @include more-than-mobile {
      padding: 40px 0;
    }

    &__header {
      color: black;
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      margin: 20px 0;
      text-align: center;
    }

    &__description {
      font-weight: 500;
      font-size: 16px;
      line-height: 170%;
      color: white;
      margin-bottom: 30px;
      @include more-than-tablet {
        max-width: 60%;
        margin: 30px auto;
      }
    }

    &__body {
      margin: 40px auto;
      display: flex;
      text-align: left;

      @include more-than-small-mobile {
        flex-direction: column;
        max-width: 100%;
        gap: 25px;
      }

      @include more-than-tablet {
        flex-direction: row;
        max-width: 80%;
        gap: 30px;
      }

      &__card {
        position: relative;
        display: flex;
        color: #fff;
        flex-direction: column;
        justify-content: space-between;
        min-height: max-content;
        border-radius: 15px;
        gap: 15px;
        overflow-anchor: none;

        &__container {
          @include more-than-small-mobile {
            width: 100%;
          }

          @include more-than-tablet {
            width: 33%;
          }

          &__description {
            p {
              font-size: 16px;
            }
          }
          h4 {
            font-size: 24px;
          }
        }

        @include more-than-small-mobile {
          padding: 20px 32px;
          height: auto;
          min-height: 300px;
        }

        @include more-than-tablet {
          padding: 30px 30px;
          height: 90%;
          min-height: 550px;
        }
      }
    }

    &__restrictions {
      text-align: center;
      margin-top: 15px;
    }
  }
}

.price_block__container__body__card:hover {
  .button__container {
    margin-top: 20px;
    margin-bottom: 30px;
    transition: all .5s;
    opacity: 1;
    padding: 10px 20px;
    border: 1px solid white;
  }
}

.button__container {
  @include reset-button;
  border-radius: 20px;
  opacity: 0;
  padding: 10px 20px;
  transition: all .5s;
  width: min-content;

  @include more-than-small-mobile {
    opacity: 1;
    margin-top: 20px;
    margin-bottom: 30px;
    border: 1px solid white;
  }

  @include more-than-mobile {
    opacity: 0;
    margin-top: 0px;
    margin-bottom: 0px;
    border: 1px solid transparent;
  }
}
</style>
