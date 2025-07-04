<template>
  <div class="carousel-container">
    <h2 class="carousel-container__header">
      {{ data.title }}
    </h2>

    <div class="carousel_wrapper">
      <Swiper
        :breakpoints="{ 1080: { slidesPerView: 3 }, 640: { slidesPerView: 2 } }"
        :modules="[SwiperNavigation, SwiperAutoplay]"
        :slides-per-view="1"
        :navigation="true"
        :loop="false"
        :space-between="50"
        :effect="'creative'"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true
        }"
        class="carousel_wrapper__swiper"
      >
        <SwiperSlide
          v-for="(item, index) in data.props"
          :key="index"
          style="height: auto"
        >
          <h3 class="carousel_wrapper__carousel-number">
            {{ index < 10 ? `0${index + 1}` : index + 1 }}
          </h3>

          <h4
            v-if="item.title"
            class="carousel_wrapper__carousel-title"
          >
            {{ item.title }}
          </h4>

          <p
            class="carousel_wrapper__carousel-description"
            v-html="item.description"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  props: {
    title?: string
    description: string
  }[]
}

const data = defineProps<Props>()
</script>

<style lang="scss" scoped>


.carousel-container {
  --swiper-navigation-color: #e15a2b;
  --swiper-vaigation-weight: bold;
  @include more-than-small-mobile {
    --swiper-navigation-size: 0px;
  }

  @include more-than-mobile {
    --swiper-navigation-size: 40px;
  }

  max-width: 90%;
  margin: 0 auto;
  padding: 80px 0;

  &__header {
    font-weight: bold;
    font-size: 26px;
    line-height: 1.1;
    text-align: center;
    margin-bottom: 40px;
    color: black;
    @include more-than-tablet {
      font-size: 36px;
      line-height: 44px;
      max-width: 60%;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }
}
.carousel_wrapper {
  &__swiper {
    @include more-than-small-mobile {
      padding: auto;
    }

    @include more-than-mobile {
      padding: 0 50px;
    }
  }

  &__carousel-number {
    font-weight: bold;
    font-size: 96px;
    line-height: 117px;
    text-align: center;
    color: #242424;
  }

  &__carousel-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #e15a2b;
  }

  &__carousel-description {
    font-size: 14px;
    line-height: 160%;
    text-align: center;
  }
}
</style>
