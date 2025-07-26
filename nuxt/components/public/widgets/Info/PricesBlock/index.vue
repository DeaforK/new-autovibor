<template>
  <div class="price_block">
    <div class="price_block__container">
      <h2 class="price_block__container__header">
        Цены на услуги подбора авто
      </h2>

      <p class="price_block__container__description">
        Подберем автомобиль за один день. Услуги автоподбора в Екатеринбурге с проверкой по 150
        параметрам. Берем на себя торг с продавцом. Собьем цену за каждый косяк. Берем на себя
        ответственность за подбор безаварийного, не требующего дополнительных вложений автомобиля.
        Даем 3 вида гарантии
      </p>

      <div class="price_block__container__swiper">
        <Swiper
          :breakpoints="{
            1330: { slidesPerView: 3 },
            870: { slidesPerView: 2 },
            2060: { slidesPerView: 4 }
          }"
          :modules="[SwiperNavigation]"
          :slides-per-view="1"
          :navigation="true"
          :loop="false"
          :space-between="50"
          class="price_block__container__swiper__swiper"
        >
          <SwiperSlide
            v-for="(item, index) in data"
            :key="item.title"
            style="height: auto"
          >
            <div class="price_block__container__swiper__card">
              <div>
                <h3>{{ index < 10 ? `0${index + 1}` : index + 1 }}</h3>

                <h4>{{ item.title }}</h4>
              </div>

              <ul>
                <li
                  v-for="prop in item.props"
                  :key="prop"
                >
                  {{ prop }}
                </li>
              </ul>

              <h4 class="price_block__container__swiper__card__price">
                {{ item.price }}
              </h4>

              <PublicSharedUiBlackButton
                class="price_block__container__swiper__card__btn"
                @click="showModal = true"
              >
                Заказать услугу
              </PublicSharedUiBlackButton>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="price_block__container__info">
        <h3>Авто подбор автомобиля за минуты — без рисков</h3>
        <p>
          У нас есть собственная база предложений от надёжных автосалонов Екатеринбурга. Благодаря этому авто подбор
          автомобиля под ваш запрос занимает минимум времени — уже в день обращения вы можете получить список подходящих
          машин.
        </p>
        <p>
          Мы ежедневно мониторим:
          <br>— региональные и федеральные распродажи,
          <br>— акции дилеров,
          <br>— закрытые объявления, недоступные обычным пользователям.
        </p>
        <p>
          С нашей помощью в подборе автомобиля вы находите оптимальный вариант быстро, безопасно и с максимальной
          выгодой.
        </p>
      </div>
    </div>
  </div>

  <PublicWidgetsCommonFormModal v-model:showModal="showModal" />
</template>

<script setup lang="ts">
import { data } from './data'

const showModal = ref(false)
</script>

<style lang="scss" scoped>
.price_block {
  background: url('/images/Background_price.png') no-repeat center;
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
      color: white;
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      margin: 20px 0;
    }

    &__description {
      font-weight: 500;
      font-size: 16px;
      line-height: 170%;
      color: white;
      text-align: center;
      margin-bottom: 30px;

      @include more-than-tablet {
        max-width: 60%;
        margin: 30px auto;
      }
    }

    &__swiper {
      max-width: 95%;
      margin: 0 auto;
      --swiper-navigation-color: #e15a2b;
      --swiper-navigation-size: 15px;

      .swiper-button-next,
      .swiper-button-prev {
        @include more-than-mobile {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          border-radius: 50%;
          padding: 15px;
        }
      }

      &__card {
        background-color: white;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: max-content;
        border-radius: 30px;
        gap: 15px;
        margin-top: 30px;
        margin-bottom: 30px;

        @include more-than-small-mobile {
          padding: 20px 32px;
          height: auto;
        }

        @include more-than-mobile {
          padding: 20px 60px;
          height: 90%;
        }

        h3 {
          font-weight: 600;
          font-size: 54px;
          line-height: 140%;
          text-align: center;
          color: #e15a2b;
          margin-top: 10px;
        }

        h4 {
          font-weight: 600;
          font-size: 20px;
          line-height: 140%;
          text-align: center;
          margin-bottom: 18px;
        }

        ul {
          @include reset-list;
          list-style-image: url('/images/array.png');
        }

        li {
          font-size: 13px;
          line-height: 150%;
          margin-bottom: 24.3px;
        }

        &__price {
          font-weight: bold;
          font-size: 26px;
          line-height: 140%;
          text-align: center;
          color: #e15a2b;
          margin-bottom: 20px;
        }

        &__btn {
          position: absolute;
          width: 80%;

          bottom: -30px;
          z-index: 100;
        }
      }

      &__swiper {
        @include more-than-small-mobile {
          padding: auto;
        }

        @include more-than-mobile {
          padding: 0 50px;
        }
      }
    }

    &__info {
      margin-top: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 30px 20px;
      color: white;
      font-size: 16px;
      line-height: 170%;
      backdrop-filter: blur(5px);

      @include more-than-tablet {
        max-width: 800px;
        margin: 40px auto 0;
        padding: 40px;
        font-size: 18px;
      }

      h3 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
      }

      p {
        margin-bottom: 16px;
      }
    }

  }
}
</style>
