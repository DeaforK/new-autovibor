<template>
  <div>
    <PublicWidgetsLayoutHeaderWithBreadcrumbs
      :breadcrumbs="crumbs"
      name="Контакты"
    />
    <div class="container">
      <div class="container__map">
        <PublicWidgetsAboutMap />
      </div>

      <div style="max-width: 80%; margin: 0 auto">
        <h2 style="font-size: 30px; font-weight: 600; line-height: 1.1; margin-top: 70px">
          Контакты:
        </h2>

        <div class="container__contacts">
          <div class="container__contacts__left">
            <p
              v-for="(item, i) in contacts"
              :key="i"
            >
              {{ item.text }}
            </p>
          </div>

          <div class="container__contacts__right">
            <p
              v-for="(item, i) in requisites"
              :key="i"
            >
              <b>{{ item.label }}</b> {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInitStore } from '~/components/public/entities/initStore/model'

const { requisitesMap, settingsMap } = useInitStore()
definePageMeta({
  layout: 'secondary',
  title: 'Контакты',
  header: 'Где нас найти'
})

useHead({
  title: 'Контакты'
})

const contacts = [
  {
    label: 'Номер телефона',
    text: settingsMap.get('phoneNumber')?.content ?? ''
  },
  {
    label: 'Часы работы',
    text: settingsMap.get('workingHours')?.content ?? ''
  },
  {
    label: 'Адрес',
    text: settingsMap.get('address')?.content ?? ''
  }
]
const requisites = [
  {
    label: '',
    text: requisitesMap.get('name')?.content ?? ''
  },
  {
    label: 'ИНН',
    text: requisitesMap.get('TIN')?.content ?? ''
  },
  {
    label: 'Р/с',
    text: requisitesMap.get('r/s')?.content ?? ''
  },
  {
    label: 'ОГРНИП',
    text: requisitesMap.get('OGRNIP')?.content ?? ''
  }
]

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'О нас',
    to: '/about'
  },
  {
    label: 'Контакты',
    to: '/about/contacts'
  }
])
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;

  &__map {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px black solid;
  }

  &__contacts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
