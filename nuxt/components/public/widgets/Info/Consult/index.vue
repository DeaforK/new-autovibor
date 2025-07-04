<template>
  <div class="consult__wrapper">
    <div class="consult">
      <div>
        <h3 class="consult__title-top">
          ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
        </h3>
        <h3 class="consult__title-bottom">
          ПРИ ПОКУПКЕ АВТОМОБИЛЯ ИЗ-ЗА ГРАНИЦЫ
        </h3>
      </div>
      <p class="consult__body">
        Свяжитесь с нами любым удобным способом
      </p>
      <div class="consult__contacts">
        <div class="consult__contacts__left">
          <a
            :href="`tel:${phoneNumber}`"
            type="tel"
            v-text="phoneNumber"
          />
        </div>
        <div class="consult__contacts__button">
          <button @click="showModal = true">
            Получить консультацию
          </button>
        </div>
      </div>

      <div class="consult__contacts">
        <div class="consult__contacts__left">
          <div
            v-for="(social, idx) in socials"
            :key="idx"
          >
            <a :href="social.link">
              <img
                :src="social.image"
                :alt="social.label"
              >
            </a>
          </div>
        </div>
        <div class="consult__contacts__right">
          <p><b>Офис в России:</b> г. Екатеринбург, ул. Амундсена д.107, оф.516 (вход блок2)</p>
          <p><b>Офис в Южной Корее:</b> 49-34 Hang-dong 7(chil)-ga, Jung-gu, Incheon</p>
        </div>
      </div>
    </div>
  </div>
  <PublicWidgetsCommonFormModal v-model:showModal="showModal" />
</template>

<script setup lang="ts">
import { useInitStore } from '~/components/public/entities/initStore/model'

const { settingsMap } = useInitStore()
const showModal = ref(false)

const phoneNumber = settingsMap.get('phoneNumber')?.content ?? ''

const socials = [
  {
    image: '/images/whatsapp_1.svg',
    label: 'Whatsapp',
    link: settingsMap.get('whatsapp')?.content ?? ''
  },
  {
    image: '/images/youtube_2.svg',
    label: 'Youtube',
    link: settingsMap.get('youtube')?.content ?? ''
  }
]

</script>

<style lang="scss" scoped>
.consult {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 40px;
  background: url(/images/bg-info2.png);
  background-position: center;
  background-size: cover;
  padding: 60px 30px;
  width: 100%;
  color: #fff;
  gap: 35px;

  &__wrapper {
    margin: 0 auto;
    margin-top: 30px;

    @include more-than-small-mobile {
      width: 100%;
    }

    @include more-than-mobile {
      width: 95%;
    }
  }

  &__title-top {
    line-height: 37px;
    font-weight: bold;

    @include more-than-small-mobile {
      font-size: 24px;
      margin-left: 0;
      text-align: center;
    }
    @include more-than-desktop {
      font-size: 32px;
      margin-left: 15%;
      text-align: left;
    }
  }

  &__title-bottom {
    line-height: 37px;
    font-weight: bold;

    @include more-than-small-mobile {
      font-size: 24px;
      margin-left: 0;
      text-align: center;
    }
    @include more-than-desktop {
      font-size: 32px;
      margin-left: 26%;
      text-align: left;
    }
  }

  &__body {
    font-size: 24px;
    line-height: 30px;

    @include more-than-small-mobile {
      margin-left: 0;
      text-align: center;
      width: 100%;
    }
    @include more-than-desktop {
      margin-left: 26%;
      text-align: left;
      width: 26%;
    }
  }

  &__contacts {
    display: flex;
    align-items: center;
    gap: 15px;

    @include more-than-small-mobile {
      flex-direction: column;
    }
    @include more-than-desktop {
      flex-direction: row;
      margin-top: 10px;
    }

    &__left {
      display: flex;
      gap: 10px;
      font-size: 32px;
      @include more-than-small-mobile {
        margin-left: 0px;
        text-align: center;
        position: relative;
      }
      @include more-than-desktop {
        margin-left: 30px;
        text-align: left;
        position: absolute;
      }
      a {
        @include reset-link;
      }
    }
    &__right {
      font-size: 24px;
      @include more-than-small-mobile {
        text-align: center;
        margin-left: 0%;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      @include more-than-desktop {
        text-align: left;
        margin-left: 26%;
      }
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: transparent;
      text-align: center;
      padding: 20px 40px;
      border: 1px solid #fff;
      border-radius: 20px;
      cursor: pointer;

      @include more-than-small-mobile {
        margin-top: 10px;
        text-align: center;
        margin-left: 0%;
        padding: 10px 30px;
      }
      @include more-than-desktop {
        margin-top: 0px;
        text-align: left;
        margin-left: 26%;
        padding: 15px 40px;
      }

      button {
        @include reset-button;
        font-family: 'Montserrat';
        font-size: 20px;
        color: #fff;
      }
    }
  }
}
</style>