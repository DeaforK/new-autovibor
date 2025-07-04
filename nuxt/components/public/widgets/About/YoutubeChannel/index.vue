<template>
  <div class="youtube-channel">
    <div class="youtube-channel__wrapper">
      <div class="youtube-channel__wrapper__left-side">
        <h2 class="youtube-channel__wrapper__left-side__title">
          Нас смотрит более 740 000 человек
        </h2>
        <p class="youtube-channel__wrapper__left-side__sub-title">
          Заходите на YouTube канал Автовыбор Екатеринбург, вы увидите самый актуальный и свежий
          контент!
        </p>
        <div class="youtube-channel__wrapper__left-side-links">
          <div class="youtube-channel__wrapper__left-side-links__channel">
            <a href="https://www.youtube.com/@autovibor">Перейти на канал</a>
          </div>
          <PublicSharedUiConsultLink>
            Консультация
          </PublicSharedUiConsultLink>
        </div>
        <p class="youtube-channel__wrapper__left-side__underline-sign">
          Мы подбираем автомобили и даем лучшую гарантию!
        </p>
      </div>

      <div class="youtube-channel__wrapper__right-side">
        <q-img
          :src="'/images/car-delivery/profile-youtube.png'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.youtube-channel {
  margin-top: 30px;
  font-family: "Montserrat";
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #da582d;
    margin: 0 auto;
    border-radius: 40px;

    @include more-than-small-mobile {
      flex-direction: column;
      width: 100%;
      padding: 0;
    }

    @include more-than-mobile {
      flex-direction: row;
      width: 95%;
      padding: 60px 90px;
    }

    &__left-side {
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 28px 0;

      @include more-than-small-mobile {
        width: 100%;
        padding: 40px 40px;
      }

      @include more-than-laptop {
        width: 60%;
        &__wrapper {
          img {
          width: 300px
          }
        }
      }

      @include more-than-desktop {
        padding: 75px 90px;
        width: 60%;
      }

      h2 {
        font-size: 40px;
        line-height: 52px;
        font-weight: 700;

        @include more-than-small-mobile {
          text-align: center;
        }

        @include more-than-laptop {
          text-align: left;
        }
      }

      &__sub-title {
        font-family: "TT Hoves";
        font-size: 24px;
        font-weight: 400;
        line-height: 33px;
        @include more-than-small-mobile {
          text-align: center;
        }

        @include more-than-laptop {
          text-align: left;
        }
      }

      &-links {
        display: flex;
        gap: 16px;
        align-content: center;
        justify-content: left;

        @include more-than-small-mobile {
          flex-direction: column;
        }

        @include more-than-laptop {
          flex-direction: row;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &__channel {
          background-color: #fff;
          text-align: center;
          padding: 20px 40px;
          border-radius: 20px;
          a {
            @include reset-link;

            color: #da582d;
            font-family: 'Montserrat';
            font-size: 16px;
            font-weight: 700;
          }
        }

        &__consult {
          background-color: #da582d;
          text-align: center;
          padding: 20px 40px;
          border: 1px solid #fff;
          border-radius: 20px;

          a {
            @include reset-link;
            font-family: 'Montserrat';
            font-size: 16px;
            font-weight: 700;
            color: #fff;
          }
        }
      }

      &__underline-sign {
        font-size: 14px;
        font-weight: 500;

        @include more-than-small-mobile {
          text-align: center;
        }

        @include more-than-laptop {
          text-align: left;
        }
      }
    }

    &__right-side {
      @include more-than-small-mobile {
        width: 100%;
        display: none;
      }

      @include more-than-laptop {
        width: 60%;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>