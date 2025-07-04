<template>
  <div class="shorts-list">
    <div
      v-for="(item, i) in shorts"
      :key="i"
      class="video-card"
      :class="item.favorite ? 'favorite': null"
      style="cursor: pointer"
      @click="navigateTo(`/${item.url}`)"
    >
      <div class="video-card-image">
        <img
          :src="`/${item.poster}`"
          class="video-card-image__image"
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
export type TShort = {
  poster: string
  url: string
  name: string
  favorite: boolean
}

defineProps({
  shorts: {
    type: Array<TShort>,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.shorts-list {
  display: grid;
  justify-content: center;
  align-items: center;

  @include more-than-small-mobile {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 30px 10px;
  }

  @include more-than-mobile {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 45px 20px;
  }

  @include more-than-desktop {
    grid-template-columns: repeat(5, 1fr);
    padding: 50px 20px;
  }

  @include more-than-desktop-big {
    grid-template-columns: repeat(6, 1fr);
    padding: 60px 20px;
  }
  .video-card {
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 2px 2px 4px 0px rgba(34, 60, 80, 0.2);
    .video-card-image {
      height: 250px;
      @include more-than-small-mobile {
        height: 200px;
      }

      @include more-than-mobile {
        height: 300px;
      }

      @include more-than-laptop {
        height: 350px;
      }
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
        padding: 1rem 0;
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
