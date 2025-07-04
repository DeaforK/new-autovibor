<template>
  <div class="articles-list">
    <div
      v-for="(item, i) in statments"
      :key="i"
      class="article-card"
      :class="item.favorite ? 'favorite': null"
      style="cursor: pointer"
      @click="navigateTo(`/${item.url}`)"
    >
      <div class="article-card-image">
        <img
          :src="`/${item.poster}`"
          class="article-card-image__image"
          :alt="item.name"
        >
      </div>
      <div class="content">
        <h2>
          {{ item.name.length > 75 ? `${item.name.substring(0, 75)}...` : item.name }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type TStatment = {
  poster: string
  url: string
  name: string
  favorite: boolean
}

defineProps({
  statments: {
    type: Array<TStatment>,
    default: () => []
  }
})
</script>

<style lang="scss">
.articles-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  @include more-than-mobile {
    grid-template-columns: repeat(2, 1fr);
  }
  @include more-than-tablet {
    grid-template-columns: repeat(4, 1fr);
  }
  @include more-than-desktop-big {
    grid-template-columns: repeat(6, 1fr);
  }
  .article-card {
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 2px 2px 4px 0px rgba(34, 60, 80, 0.2);
    .article-card-image {
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
      h2 {
        padding: 1rem 0rem;
        font-size: 18px;
        line-height: 170%;
        text-align: center;
        font-weight: 500;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.favorite {
  order: -1;
  border: 1px solid orange;
}
</style>
