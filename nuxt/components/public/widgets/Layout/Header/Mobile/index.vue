<template>
  <q-header
    reveal
    class="bg-accent text-white mobile"
  >
    <q-toolbar style="padding-left: 20px">
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="toggleLeftDrawer"
      />
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    side="left"
    overlay
    behavior="mobile"
    bordered
    class="bg-accent text-white"
  >
    <q-list
      style="width: 90%; height: calc(100% - 60px); margin: 0 auto; margin-top: 30px; display: flex; flex-direction: column;"
    >
      <template v-for="item in menu">
        <q-item
          v-if="!item.subPages.length"
          :key="item.title"
          clickable
          style="padding: 8px 16px"
          @click="handleItemClick(item)"
        >
          <q-item-section style="text-transform: initial">
            {{ item.title }}
          </q-item-section>
        </q-item>

        <q-expansion-item
          v-else
          :key="item.url"
          expand-icon="arrow_drop_down"
          :content-inset-level="1"
        >
          <template #header>
            <q-item-section>
              <div
                style="width: fit-content"
                @click="navigateTo(item.url)"
              >
                {{ item.title }}
              </div>
            </q-item-section>
          </template>

          <q-item
            v-for="subPage in item.subPages"
            :key="subPage.title"
            clickable
            :style="{ 'background-color': '$primary' }"
            :to="subPage.url"
            @click="toggleLeftDrawer()"
          >
            <q-item-section>
              {{ subPage.title }}
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </template>
      <q-item style="margin-top: auto">
        <address class="mobile-address">
          <a
            class="mobile-address__phone"
            :href="`tel:${data.phoneNumber}`"
            target="_blank"
          >{{ data.phoneNumber }}</a>
          <p class="mobile-address__working_hours">
            {{ data.workingHours }}
          </p>
        </address>
      </q-item>
      <q-item>
        <PublicSharedUiSocialLinks />
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { useInitStore } from '~/components/public/entities/initStore/model'
const { menu, settingsMap } = useInitStore()

interface SubPage {
  pages: { title: string; url: string }[]
}

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const data = {
  phoneNumber: settingsMap.get('phoneNumber')?.content ?? '',
  workingHours: settingsMap.get('workingHours')?.content ?? ''
}

const social = [
  {
    image: '/images/telegram.svg',
    label: 'Telegram',
    link: settingsMap.get('telegram')?.content ?? ''
  },
  {
    image: '/images/whatsapp.svg',
    label: 'Whatsapp',
    link: settingsMap.get('whatsapp')?.content ?? ''
  },
  {
    image: '/images/vk.svg',
    label: 'VK',
    link: settingsMap.get('vk')?.content ?? ''
  },
  {
    image: '/images/youtube.svg',
    label: 'Youtube',
    link: settingsMap.get('youtube')?.content ?? ''
  }
]

const filteredSocial = computed(() => {
  return social.filter(item => item.link)
})

const handleItemClick = (item: { title: string; url: string; subPage?: SubPage }) => {
  if (item.subPage) {
    toggleLeftDrawer()
  } else {
    navigateTo(item.url)
    toggleLeftDrawer()
  }
}
</script>

<style lang="scss" scoped>
.mobile {
  @include more-than-desktop {
    display: none;
  }
}

.mobile-address {
  &__phone {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  &__phone:visited,
  &__phone:link {
    @include reset-link;
  }

  &__working_hours {
    font-size: 12px;
    line-height: 15px;
    font-style: normal;
  }
}

.social {
  @include more-than-small-mobile {
    display: flex;
    flex-direction: column;
  }

  @include more-than-tablet {
    align-items: flex-start;
  }

  margin-right: 15px;

  &__wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #242424;
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