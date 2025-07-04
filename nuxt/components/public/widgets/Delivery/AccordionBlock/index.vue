<template>
  <div class="container">
    <div class="container__left-wrapper">
      <q-expansion-item
        v-for="(item, index) in data.left"
        :key="index"
        class="shadow-1 overflow-hidden"
        group="faq"
        style="border-radius: 30px; margin-bottom: 10px"
        expand-icon-class="text-primary"
        :header-style="{ fontWeight: 'bold' }"
        :label="item.title"
      >
        <q-card>
          <q-card-section>
            <p v-html="item.body" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>

    <img
      :src="'/images/deliveryCar.png'"
      class="container__image"
    >

    <div class="container__right-wrapper">
      <q-expansion-item
        v-for="(item, index) in data.right"
        :key="index"
        class="shadow-1 overflow-hidden"
        group="faq"
        style="border-radius: 30px; margin-bottom: 10px"
        expand-icon-class="text-primary"
        :header-style="{ fontWeight: 'bold' }"
        :label="item.title"
      >
        <q-card>
          <q-card-section>
            <p v-html="item.body" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data } from './data'
</script>

<style scoped lang="scss">

.container {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: url('/images/report2.png') center no-repeat;
  background-size: cover;

  @include more-than-laptop {
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 40px 40px;
  }

  &__left-wrapper,
  &__right-wrapper {
    @include more-than-laptop {
      gap: 30px;
      display: flex;
      flex-direction: column;
    }
  }

  &__image {
    display: none;
    max-width: 300px;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    @include more-than-laptop {
      display: block;
    }
  }
}
</style>
