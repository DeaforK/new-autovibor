<template>
  <div class="footer_container">
    <div class="footer_container__wrapper">
      <div class="social">
        <div class="social__wrapper">
          <div
            v-for="item in filteredSocial"
            :key="item.label"
            class="social__wrapper__item"
            :style="{ backgroundColor: item.color }"
          >
            <a
              :href="item.link"
              target="_blank"
            >
              <img
                :src="item.image"
                :alt="item.label"
              >
            </a>
          </div>
        </div>
      </div>

      <div class="footer_container__logo_wrapper">
        <nuxt-link :href="'/'">
          <img
            :src="'/images/logo.png'"
            alt="автовыбор"
          >
        </nuxt-link>
      </div>

      <div class="footer_container__payment-methods__wrapper">
        <div class="footer_container__payment-methods">
          <img
            v-for="paymentMethod in paymentMethods"
            :key="paymentMethod.label"
            :src="paymentMethod.image"
            :alt="paymentMethod.label"
          >
        </div>
      </div>
    </div>
    <PublicSharedUiHorizontalLine />

    <div class="secondary_container">
      <div class="secondary_container__wrapper">
        <a
          class="secondary_container__wrapper-first"
          href="/privacy.pdf"
          target="_blank"
        >
          <p>
            Пользовательское соглашение
          </p>
        </a>
        <a href="https://vverh.digital/">
          <p>
            Сделано в Vverh Digital
          </p>
        </a>
        <a
          class="secondary_container__wrapper-last"
          href="/privacy-policy"
        >
          <p>
            Правовая информация
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInitStore } from '~/components/public/entities/initStore/model'

const { settingsMap } = useInitStore()

const social = [
  {
    image: '/images/layout/social/whatsapp.svg',
    label: 'WhatsApp',
    link: settingsMap.get('whatsapp')?.content ?? '',
    color: '#25D366'
  },
  {
    image: '/images/layout/social/telegram.svg',
    label: 'Telagram',
    link: settingsMap.get('telegram')?.content ?? '',
    color: '#23A0DC'
  },
  {
    image: '/images/layout/social/youtube.svg',
    label: 'YouTube',
    link: settingsMap.get('youtube')?.content ?? '',
    color: '#FF0000'
  }
]

const paymentMethods = [
  {
    label: 'Мир',
    image: '/images/layout/payment/mir.png'
  },
  {
    label: 'MasterCard',
    image: '/images/layout/payment/mastercard.png'
  },
  {
    label: 'Visa',
    image: '/images/layout/payment/visa.png'
  },
  {
    label: 'Paykeeper',
    image: '/images/layout/payment/paykeeper.png'
  }
]

const filteredSocial = computed(() => {
  return social.filter(item => item.link)
})
</script>

<style lang="scss" scoped>
.footer_container {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 30px 28px;

    @include more-than-small-mobile {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    @include more-than-mobile {
      flex-direction: row;
      align-items: center;
    }

    @include more-than-tablet {
      align-items: flex-end;
    }

    &__logo_wrapper {
      display: none;

      span {
        font-size: 12px;
        line-height: 140%;
        width: 150px;
        font-weight: 500;
      }

      @include more-than-tablet {
        display: flex;
        flex-direction: row;
        gap: 40px;
        align-items: flex-end;
      }
    }

    h2 {
      font-weight: 600;
      font-size: 18px;
      line-height: 140%;
      text-align: left;
    }

    .sub {
      font-weight: 500;
      font-size: 9px;
      line-height: 11px;
      text-align: left;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      font-feature-settings: 'kern' off;
      color: #ffffff;
      opacity: 0.3;
      margin-top: 3px;
    }

    a:link,
    a:visited {
      @include reset-link;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 140%;
      color: #ffffff;
      cursor: pointer;
    }

    a:hover {
      text-decoration: underline;
    }
    .social {
      width: 275px;
      display: flex;
      @include more-than-small-mobile {
        flex-direction: column;
        align-items: center;
      }

      @include more-than-mobile {
        flex-direction: row;
        justify-content: flex-start;
      }

      &__wrapper {
        display: flex;
        flex-direction: row;
        gap: 10px;
        // min-width: 150px;

        &__item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #23a0dc;
          margin-bottom: 3px;

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          img {
            height: 18px;
            width: 18px;
          }
        }
      }
    }
  }

  &__payment-methods {
    width: 275px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.secondary_container {
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;

  &__wrapper {
    width: 100%;
    display: flex;

    @include more-than-small-mobile {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-direction: column;
      text-align: center;
      background-color: black;
    }

    @include more-than-mobile {
      justify-content: space-between;
      flex-direction: row;
      align-items: center;

      a {
        width: 20%;
      }

      &-first {
        text-align: left;
      }
      &-last {
        text-align: right;
      }
    }

    p {
      font-family: 'TT Hoves';
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      color: #ffffff;
      opacity: 50%;
    }

    a:visited,
    a:link {
      @include reset-link;
    }

    a:hover {
      text-decoration: underline;
      color: white;
    }
  }
}
</style>
