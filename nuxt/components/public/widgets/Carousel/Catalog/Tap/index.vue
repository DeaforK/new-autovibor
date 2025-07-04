<template>
  <div class="">
    <q-carousel
      v-model="slide"
      v-model:fullscreen="fullscreen"
      swipeable
      animated
      arrows
      padding
      infinite
      thumbnails
      style="border-radius: 30px; padding-top: 0; min-height: 100%;"
      :class="fullscreen ? 'fullscreen-mode' : ''"
      class="carousel-catalog-tap"
    >
      <q-carousel-slide
        v-for="car in data"
        :key="car.id"
        :name="car.id"
        :img-src="car.image"
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
    <!-- <q-carousel
      v-model="slide"
      v-model:fullscreen="fullscreen"
      animated
      arrows
      infinite
      navigation
      control-color="primary"
      padding
      control-type="regular"
      style="border-radius: 15px;"
      :class="fullscreen ? 'fullscreen-mode' : ''"
      class="carousel-catalog-tap"
    >
      <q-carousel-slide
        v-for="car in data"
        :key="car.id"
        :name="car.id"
        :img-src="car.image"
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
    </q-carousel> -->
  </div>
</template>

<script lang="ts" setup>
interface Props {
  images: string[]
}

const { images } = defineProps<Props>()

const data = images.map((image, index) => ({
  id: index + 1,
  image: `/${image}`
}))

const slide = ref(1)
const fullscreen = ref(false)
</script>

<style lang="scss">
.carousel-catalog-tap {
  height: 400px;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
}

.fullscreen-mode {
  background-color: black;
}

.bg-cover {
  background-size: cover;
  background-repeat: no-repeat;
  @include more-than-laptop {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: transparent;
  }
}

</style>
