<template>
  <div class="consult">
    <div class="consult__container">
      <div class="consult__container__left-side" />
      <div class="consult__container__right-side">
        <h2 class="consult__container__right-side__title">
          Наши преимущества
        </h2>

        <ul class="consult__container__right-side__consult-list">
          <li
            v-for="(consultPoint, idx) in consultList"
            :key="idx"
          >
            <img
              :src="'/images/orange-elipse.svg'"
              alt="orange point"
            ><span>{{ consultPoint }}</span>
          </li>
        </ul>
        <PublicSharedUiConsultLink>
          Консультация
        </PublicSharedUiConsultLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const consultList = [
  'Привозим авто под ваш индивидуальный заказ',
  'Страхование автомобиля на этапе доставки',
  'Срок доставки 40 дней',
  'Работаем исключительно по договору'
]

</script>

<style lang="scss" scoped>
.consult {
  font-family: "Montserrat";
  margin-top: 30px;

  &__container {
    background-image: url('/images/car-delivery/consult.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    position: relative;
    align-items: flex-start;
    margin: 0 auto;
    border-radius: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;

    @include more-than-small-mobile {
      width: 100%;
    }

    @include more-than-laptop {
      width: 95%;
    }

    &__left-side {
      @include more-than-small-mobile {
        width: 0;
      }

      @include more-than-laptop {
        width: 60%;
      }

      @include more-than-desktop {
        width: 70%;
      }
    }

    &__right-side {
      width: 33%;
      margin-top: 80px;
      margin-bottom: 100px;
      background-color: #fff;
      border-radius: 40px;
      padding: 55px;

      @include more-than-small-mobile {
        width: 100%;
      }

      @include more-than-laptop {
        width: 40%;
        margin-right: 70px;
      }

      @include more-than-desktop {
        width: 30%;
        margin-right: 70px;
      }

      &__title {
        font-weight: 700;
        @include more-than-small-mobile {
          font-size: 26px;
          line-height: 30px;
          text-align: center;
        }

        @include more-than-laptop {
          font-size: 36px;
          line-height: 43px;
          text-align: left;
        }
      }

      &__consult-list {
        margin-top: 19px;
        margin-bottom: 26px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          span {
            margin-left: 13px;
          }

          @include more-than-small-mobile {
            text-align: center;
          }

          @include more-than-laptop {
            text-align: left;
          }
        }
      }
    }
  }
}

.orange-circle {
  height: 9px;
  width: 9px;
  background-color: #DA582D;
  border-radius: 100%;
}
</style>