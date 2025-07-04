<template>
  <div
    v-for="item in data"
    :key="item.title"
    class="container"
  >
    <div class="container__wrapper">
      <div class="container__wrapper__header">
        <img :src="'/images/config.svg'">
        <h2>{{ item.title }}</h2>
      </div>

      <div
        v-for="(component, index) in item.content"
        :key="index"
        class="container__wrapper__content"
      >
        <template v-if="component.type === 'text'">
          <div v-html="component.data" />
        </template>

        <template v-if="component.type === 'list'">
          <!-- <PublicSharedUiCatalogList>
            <div v-html="component.data" />
          </PublicSharedUiCatalogList> -->
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { data } from './data'
</script>

<style lang="scss" scoped>


.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  &__wrapper {
    border: 2px $primary solid;
    border-radius: 20px;
    padding: 22px;
    &__header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      h2 {
        margin: 6px 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 1.3;
      }
      @include more-than-laptop {
        flex-direction: row;
      }
      img {
        width: 86px;
      }
    }
    &__content {
      margin: 20px 0;
    }
  }
}
</style>
