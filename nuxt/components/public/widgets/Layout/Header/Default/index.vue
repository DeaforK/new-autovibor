<template>
  <header class="header_default">
    <div class="header_default__container__navigation_wrapper">
      <nav class="header_default__container__navigation_wrapper__main_menu">
        <ul class="header_default__container__navigation_wrapper__main_menu__menu">
          <li
            v-for="item in menu"
            :key="item.title"
            class="header_default__container__navigation_wrapper__main_menu__menu__el"
            @mouseover="showDropdown = true"
          >
            <nuxt-link
              :to="item.url"
              active-class="active-top-header"
            >
              {{ item.title }}
            </nuxt-link>
            <div
              v-if="showDropdown"
              class="drop_items"
            >
              <ul v-if="item.subPages.length">
                <li
                  v-for="child in item.subPages"
                  :key="child.url"
                  @click="showDropdown = false"
                >
                  <NuxtLink :to="child.url">
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="header_default__container__contacts-wrapper">
          <div class="social">
            <div class="social__wrapper">
              <div
                v-for="item in filteredSocial"
                :key="item.label"
                class="social__wrapper__item"
              >
                <a
                  :href="item.link"
                  target="_blank"
                >
                  <img
                    :src="item.image"
                    :alt="item.label"
                  >
                  {{ item.label }}
                </a>
              </div>
            </div>
          </div>
          <address class="header_default__container__contacts">
            <span class="header_default__container__contacts__working_hours">
              {{ data.workingHours }}
            </span>
            <a
              class="header_default__container__contacts__phone"
              :href="`tel:${data.phoneNumber}`"
              target="_blank"
            >{{ data.phoneNumber }}</a>
          </address>
        </div>
      </nav>

      <PublicSharedUiHorizontalLine />
    </div>

    <div class="header_default__container">
      <div class="header_default__container__logo_wrapper">
        <img
          :src="'/images/logo.png'"
          alt="автовыбор"
          style="cursor: pointer"
          @click="navigateTo('/')"
        >
        <p>Подбор и полная диагностика авто в Екатеринбурге</p>
      </div>
      <div class="header_default__container__services">
        <ul>
          <li
            v-for="service in services"
            :key="service.title"
          >
            <nuxt-link
              :to="service.link"
              active-class="active"
            >
              {{ service.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <PublicSharedUiHorizontalLine />
  </header>
</template>

<script setup lang="ts">
import { useInitStore } from '~/components/public/entities/initStore/model'

const { menu } = useInitStore()
const { settingsMap } = useInitStore()
const showDropdown = ref(true)

const data = {
  phoneNumber: settingsMap.get('phoneNumber')?.content ?? '',
  workingHours: settingsMap.get('workingHours')?.content ?? ''
}

const social = [
  {
    image: '/images/layout/social/telegram.svg',
    label: 'Telegram',
    link: settingsMap.get('telegram')?.content ?? ''
  },
  {
    image: '/images/layout/social/whatsapp.svg',
    label: 'Whatsapp',
    link: settingsMap.get('whatsapp')?.content ?? ''
  },
  {
    image: '/images/layout/social/vk.svg',
    label: 'VK',
    link: settingsMap.get('vk')?.content ?? ''
  },
  {
    image: '/images/layout/social/youtube.svg',
    label: 'Youtube',
    link: settingsMap.get('youtube')?.content ?? ''
  }
]

const services = [
  {
    title: 'Подбор под ключ',
    link: '/services/car-choise'
  },
  {
    title: 'Выездная диагностика',
    link: '/services/car-diagnose'
  },
  {
    title: 'Доставка авто из-за рубежа',
    link: '/car-delivery'
  },
  {
    title: 'Наши работы',
    link: '/cases'
  },
  {
    title: 'Наши видео',
    link: '/blog/shorts'
  }
]

const filteredSocial = computed(() => {
  return social.filter(item => item.link)
})
</script>

<style lang="scss" scoped>
.header_default {
  font-family: 'TT Hoves';
  display: none;
  font-weight: 400;
  color: white;

  @include more-than-desktop {
    display: block;
  }

  &__container {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 32px 0;

    &__logo_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 285px;

      p {
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        width: 99px;
        @media (max-width: 1400px) {
          display: none;
        }
      }
    }

    &__navigation_wrapper {
      @include reset-link;
      padding-top: 16px;

      &__main_menu {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 14px;
        &__menu {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          @include reset-list;

          &__el {
            position: relative;
            font-size: 12px;
            line-height: 17px;
            color: #fff;
            text-transform: initial;
            height: 36px;
            padding: 8px 5px;
            margin: 0 2px;
            overflow-wrap: break-word;
            background: transparent;
            box-sizing: border-box;
            // border-radius: 73px;
            border: 1px solid transparent;
            white-space: nowrap;
            transition: border-color 0.2s ease-in-out;
            @include more-than-desktop-big {
              font-size: 14px;
            }
            & > a {
              @include reset-link;
            }
            .drop_items {
              display: none;
              padding-top: 15px;
              position: absolute;
              left: 0;
              top: calc(100%);
              ul {
                @include reset-list;
                background: $primary;
                // border-radius: 6px;
                display: flex;
                flex-direction: column;
                gap: 15px;
                padding: 10px;
                li {
                  a {
                    @include reset-link;
                    font-weight: 500;
                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }
              }
            }
            &:hover {
              // border-bottom: 1px solid #fff;
              .drop_items {
                display: block;
              }
            }
          }
        }
      }
    }

    &__contacts {
      width: fit-content;
      // min-width: 180px;
      display: flex;
      justify-content: center;
      align-items: center;

      @include more-than-desktop {
        margin-left: 15px;
      }

      @include more-than-desktop-big {
        margin-left: 50px;
      }

      &-wrapper {
        // display: flex;
        // width: 285px;
        display: flex;
        margin-left: auto;
      }

      &__phone {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;

        margin-left: 19px;
      }

      &__phone:visited,
      &__phone:link {
        @include reset-link;
      }

      &__working_hours {
        font-size: 13px;
        line-height: 15px;
        font-style: normal;
      }
    }

    &__services {
      ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 0;
        margin: 0;
        gap: 36px;

        list-style-type: none;

        li {
          padding: 10px 20px;

          background: transparent;
          box-sizing: border-box;
          border-radius: 73px;
          border: 1px solid transparent;
          white-space: nowrap;
          transition: border-color 0.2s ease-in-out;

          font-family: 'Montserrat';

          a {
            @include reset-link;

            &:hover {
              border: 1px solid #fff;
              border-radius: 75px;
              margin: 0 -9px;
              padding: 8px;
            }
          }
        }
      }
    }
  }
  .social {
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include more-than-small-mobile {
      flex-direction: row;
    }

    @include more-than-tablet {
      flex-direction: row;
      justify-content: center;
    }

    &__wrapper {
      display: flex;
      gap: 10px;

      &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;

        a {
          text-decoration: none;
          color: #fff;
        }

        img {
          width: 12px;
          height: 12px;
          margin-right: 7px;
        }
        margin-bottom: 3px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.active-top-header {
  border-bottom: 1px solid white;
  // border-radius: 75px;
  padding-bottom: 25px;
  margin: 0 -4px;
}

.active {
  border: 1px solid #fff;
  border-radius: 75px;
  margin: 0 -9px;
  padding: 8px;
}
</style>
