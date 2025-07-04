<template>
  <div class="catalog-main-carousel">
    <div v-if="images.length === 1">
      <img
        :src="images[0]"
        style="width: 100%; height: auto; border-radius: 17px"
      >
    </div>
    <q-carousel
      v-if="images.length >= 2"
      v-model="slide"
      v-model:fullscreen="fullscreen"
      animated
      arrows
      infinite
      thumbnails
      style="border-radius: 15px"
      :class="fullscreen ? 'fullscreen-mode' : ''"
    >
      <q-carousel-slide
        v-for="(car, i) in images"
        :key="i"
        :name="i"
        :img-src="car"
        class="bg-cover"
      />

      <template #control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
        >
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
interface Props {
  images: string[]
}
const { images } = defineProps<Props>()

const slide = ref(0)
const fullscreen = ref(false)
</script>

<style lang="scss">
.catalog-main-carousel {
  @include more-than-laptop {
    padding-top: 70px;
  }
}
.fullscreen-mode {
  background-color: black;
}
.bg-cover {
  background-size: contain;
  background-repeat: no-repeat;
  @include more-than-laptop {
    background-size: cover;
    background-color: transparent;
  }
}
</style>
