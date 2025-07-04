<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Оплата"
  />
  <div class="payment_block">
    <div class="payment_block__bank">
      <div>
        <b>{{ requisitesMap.get('name')?.content }}</b>
      </div>
      <div
        v-for="(item, i) in requisites"
        :key="i"
      >
        <div>
          <b>{{ item.label }}</b>
        </div>
        <div>{{ item.text }}</div>
      </div>
    </div>
    <div class="payment_block__qr">
      <img
        :src="`/${qrCode}`"
        alt="QR"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInitStore } from '~/components/public/entities/initStore/model'

const { requisitesMap } = useInitStore()

definePageMeta({
  layout: 'secondary',
  title: 'Оплата',
  header: 'Оплата'
})
useHead({
  title: 'Оплата'
})
const qrCode = requisitesMap.get('qrCode')?.content ?? ''
const requisites = [
  {
    label: 'ИНН',
    text: requisitesMap.get('TIN')?.content ?? ''
  },
  {
    label: 'ОГРНИП',
    text: requisitesMap.get('OGRNIP')?.content ?? ''
  },
  {
    label: 'Номер счёта',
    text: requisitesMap.get('accountNumber')?.content ?? ''
  },
  {
    label: 'Банк',
    text: requisitesMap.get('bankName')?.content ?? ''
  },
  {
    label: 'БИК',
    text: requisitesMap.get('BIC')?.content ?? ''
  },
  {
    label: 'Корреспондентский счёт',
    text: requisitesMap.get('correspondentAccount')?.content ?? ''
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
    label: 'Оплата',
    to: '/about/payment'
  }
])
</script>

<style lang="scss" scoped>
.payment_block {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 80px 40px;
  @include more-than-tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  &__bank {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 40px;
  }

  &__qr {
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;

    img {
      width: 364px;
      max-width: 100%;
    }
  }
}
</style>
