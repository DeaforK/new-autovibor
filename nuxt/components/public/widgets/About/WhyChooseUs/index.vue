<template>
  <div class="why-us">
    <div class="why-us__container">
      <h2 class="why-us__container__title">
        Почему выбирают нас
      </h2>
      <div class="why-us__container__questions">
        <q-expansion-item
          v-for="(point, index) in points"
          :key="index"
          :label="point.title"
          class="why-us__container__questions__item"
          :header-style="{ fontWeight: 'bold' }"
          expand-icon="arrow_downward"
        >
          <q-card>
            <q-card-section>
              <p v-html="point.additionalInfo" />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>

      <div class="why-us__container__redirect-yt-channel">
        <div class="why-us__container__redirect-yt-channel__left-side">
          Больше информации на нашем канале
        </div>
        <div class="why-us__container__redirect-yt-channel__right-side">
          <span>Более 100 видео от экспертов</span>
          <a href="https://www.youtube.com/@autovibor">Перейти на канал</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ points: { title: string, additionalInfo: string }[] }>()

</script>

<style lang="scss" scoped>
.why-us {
  font-family: "Montserrat";
  margin-top: 30px;
  &__container {
    background-image: url('/images/car-delivery/why-choose-us.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    position: relative;
    align-items: flex-start;
    margin: 0 auto;

    border-radius: 40px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @include more-than-mobile {
      width: 95%;
    }

    &__title {
      color: #fff;
      margin-top: 43px;
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      text-align: center;
    }

    &__questions {
      display: flex;
      flex-direction: column;
      margin-top: 34px;
      gap: 12px;

      @include more-than-small-mobile {
        width: 100%;
      }

      @include more-than-mobile {
        width: 70%;
      }

      &__item {
        border-radius: 20px;
        background-color: #fff;
        padding: 24px 25px;
      }
    }

    &__redirect-yt-channel {
      display: flex;
      justify-content: space-between;

      padding: 60px 50px;
      margin-top: 30px;
      margin-bottom: 50px;
      border-radius: 20px;
      color: #fff;
      background-color: #DA582D;

      @include more-than-small-mobile {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      @include more-than-mobile {
        width: 70%;
      }

      @include more-than-laptop {
        flex-direction: row;
        justify-content: space-between;
        &__left-side {
          width: 100%;
        }
      }

      &__left-side {
        display: flex;
        align-items: center;

        @include more-than-small-mobile {
          font-size: 30px;
          width: 100%;
          line-height: 40px;
          font-weight: 700;
          text-align: center;
        }

        @include more-than-laptop {
          font-size: 40px;
          line-height: 48px;
          font-weight: 700;
          width: 55%;
          text-align: left;
        }
      }

      &__right-side {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        @include more-than-small-mobile {
          span {
            text-align: center;
          }
        }

        @include more-than-laptop {
          margin-right: 50px;
          span {
            text-align: right;
          }
        }

        span {
          font-size: 18px;
        }

        a {
          @include reset-link;

          width: 100%;
          font-weight: 700;
          font-size: 16px;
          line-height: 17px;
          margin-top: 15px;
          padding: 20px 40px;
          background-color: #fff;
          border: none;
          color: #DA582D;
          border-radius: 20px;
          text-align: center;
        }
      }
    }
  }
}
</style>