<template>
  <section class="reviews">
    <div class="container">
      <h2 class="reviews__title">
        Отзывы наших клиентов
      </h2>

      <div class="reviews__grid">
        <div
          v-for="(video, i) in reviews"
          :key="i"
          class="reviews__video"
        >
          <div class="spinner">
            <q-spinner
              color="primary"
              size="3em"
            />
          </div>
          <iframe
            width="300"
            height="515"
            loading="lazy"
            :src="video.link"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>

      <div class="reviews__button">
        <PublicSharedUiPrimaryButton @click="navigateTo('/about/reviews')">
          Показать все отзывы
        </PublicSharedUiPrimaryButton>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
defineProps<{
  reviews: {
    image: string
    title: string
    link: string
  }[]
}>()

</script>

<style scoped lang="scss">
.reviews {
  background: #f5f5f5;
  border-radius: 30px;
  padding: 60px 0;

  .container {
    max-width: 90%;
    margin: 0 auto;
  }

  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 40px;
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }

  &__video {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    iframe {
      z-index: 4;
    }

    .spinner {
      position: absolute;
      z-index: 3;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__button {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
}

</style>
