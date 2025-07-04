<template>
  <div class="check-status">
    <div class="check-status__container">
      <h2 class="check-status__container__title">
        Полностью проверяем состояние автомобиля
      </h2>
      <div class="check-status__container__services">
        <ul>
          <li
            v-for="(stage, index) in preparedStages.slice(0, 4)"
            :key="index"
            :class="stage.isHover ? 'mark__hover' : null"
          >
            <span>{{ stage.title }}</span>
            <p>
              {{ stage.subTitle }}
            </p>
          </li>
        </ul>
        <div class="check-status__container__services__car">
          <div
            v-for="(stage, index) in preparedStages"
            :key="index"
            class="mark"
            @mouseover="stage.isHover = true"
            @mouseleave="stage.isHover = false"
          >
            {{ '0' + (index + 1) }}
          </div>
          <img :src="'/images/car-delivery/car-check-status.png'">
        </div>
        <ul>
          <li
            v-for="(stage, index) in preparedStages.slice(4, 8)"
            :key="index"
            :class="stage.isHover ? 'mark__hover' : null"
          >
            <span>{{ stage.title }}</span>
            <p>
              {{ stage.subTitle }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data } from './data'

const stages = data.map((stage) => {
  return { ...stage, isHover: false }
})

const preparedStages = toRef(stages)
</script>

<style lang="scss" scoped>
.check-status {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-family: "Montserrat";

  &__container {
    border-radius: 40px;
    background-color: #e1e2e7;

    @include more-than-small-mobile {
      width: 100%;
    }

    @include more-than-mobile {
      width: 95%;
    }

    &__title {
      text-align: center;
      margin-top: 43px;
      font-weight: 700;

      @include more-than-small-mobile {
        font-size: 24px;
        line-height: 30px;
      }

      @include more-than-laptop {
        font-size: 32px;
        line-height: 40px;
      }
    }

    &__services {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 19px;
      margin-bottom: 30px;

      @include more-than-small-mobile {
        flex-direction: column;
        gap: 30px;
      }

      @include more-than-laptop {
        flex-direction: row;
      }

      .mark__hover {
        transition: all 500ms;
        background-color: #da582d;

        color: white;
      }

      ul {
        @include reset-list;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 27px;

        @include more-than-laptop {
          width: 33%;
        }

        @include more-than-small-mobile {
          width: 100%;
        }

        li {
          background-color: #fff;
          padding: 30px 30px 20px 30px;
          border-radius: 24px;
          @include more-than-small-mobile {
            width: 90%;
          }
          @include more-than-laptop {
            width: 80%;
            flex: 1 1 200px
          }

          span {
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
          }
        }
      }

      &__car {
        position: relative;

        @include more-than-small-mobile {
          display: none;
        }

        @include more-than-laptop {
          display: block;
          height: 760px;
          img {
            height: 760px;
          }
        }

        @include more-than-desktop {
          height: 100%;
          img {
            height: 100%;
          }
        }

        .mark {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 100%;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        :nth-child(5) {
          top: 12%;
          left: 63%;
        }

        :nth-child(6) {
          top: 28%;
          left: 75%;
        }

        :nth-child(7) {
          top: 55%;
          left: 67%;
        }

        :nth-child(3) {
          top: 53%;
          left: 21%;
        }

        :nth-child(2) {
          top: 33%;
          left: 15%;
        }

        :nth-child(1) {
          top: 18%;
          left: 24%;
        }

        :nth-child(4) {
          top: 69%;
          left: 27%;
        }

        :nth-child(8) {
          top: 82%;
          left: 67%;
        }

        div:hover {
          background-color: #F36E21;
          transition: background-color 500ms;
        }
      }
    }
  }
}
</style>
