<template>
  <div
    v-for="(item, i) in props"
    :key="i"
    class="similar-card"
    @click="navigateTo(`/${item.url}`)"
  >
    <div class="similar-card-image">
      <img
        :src="`${item.poster}`"
        class="similar-card-image__image"
        :alt="item.name"
      >
    </div>
    <div class="content">
      <h3>
        {{ item.name }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  props: {
    name: string
    poster: string
    url: string
  }[]
}
const { props } = defineProps<Props>()
</script>

<style lang="scss">
.similar-card {
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 2px 4px 0px rgba(34, 60, 80, 0.2);
  &:hover {
    cursor: pointer;
  }
  .similar-card-image {
    height: 280px;
    &__image {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .content {
    min-height: 82px;
    padding: 0 1rem;
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      padding: 1rem 2rem;
      font-size: 18px;
      line-height: 170%;
      text-align: center;
      font-weight: 500;
      @include more-than-mobile {
        max-width: 90%;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
