<template>
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
    image: '/images/layout/social/vk.svg',
    label: 'VK',
    link: settingsMap.get('vk')?.content ?? ''
  },
  {
    image: '/images/layout/social/whatsapp.svg',
    label: 'WhatsApp',
    link: settingsMap.get('whatsapp')?.content ?? ''
  },
  {
    image: '/images/layout/social/telegram.svg',
    label: 'Telagram',
    link: settingsMap.get('telegram')?.content ?? ''
  },
  {
    image: '/images/layout/social/youtube.svg',
    label: 'YouTube',
    link: settingsMap.get('youtube')?.content ?? ''
  }
]
const filteredSocial = computed(() => {
  return social.filter(item => item.link)
})
</script>

<style lang="scss" scoped>
.social {
  @include more-than-small-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  @include more-than-tablet {
    align-items: flex-start;
  }

  &__wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #ffffff34;
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
</style>
