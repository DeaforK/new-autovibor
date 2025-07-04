<template>
  <section class="reviews">
    <div class="container">
      <h2 class="reviews__title">
        Отзывы наших клиентов
      </h2>

      <Swiper
        :breakpoints="{
          1330: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 }
        }"
        :space-between="30"
        :navigation="true"
        :loop="false"
        class="reviews__swiper"
      >
        <SwiperSlide
          v-for="(card, i) in reviews"
          :key="i"
        >
          <div class="review-card">
            <img
              :src="card.image"
              alt="preview"
              class="review-card__image"
            >
            <div class="review-card__footer">
              <p class="review-card__desc">
                {{ card.title }}
              </p>
              <PublicSharedUiBlackButton
                :href="card.link"
                target="_blank"
              >
                Смотреть клип в VK
              </PublicSharedUiBlackButton>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="reviews__button">
        <PublicSharedUiPrimaryButton>
          Показать все отзывы
        </PublicSharedUiPrimaryButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reviews = [
  {
    image: '/images/car-delivery/reviews.png',
    title: 'Подбор авто с пробегом в Екб | ОТЗЫВ КЛИЕНТА',
    link: 'https://vk.com/video-123456_1'
  },
  {
    image: '/images/car-delivery/reviews.png',
    title: 'Подбор авто в Китае | ОТЗЫВ КЛИЕНТА',
    link: 'https://vk.com/video-123456_2'
  },
  {
    image: '/images/car-delivery/reviews.png',
    title: 'Подбор из Кореи | ОТЗЫВ КЛИЕНТА',
    link: 'https://vk.com/video-123456_3'
  },
  {
    image: '/images/car-delivery/reviews.png',
    title: 'Доставка из Японии | ОТЗЫВ КЛИЕНТА',
    link: 'https://vk.com/video-123456_4'
  }
]
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

  &__swiper {
    --swiper-navigation-color: #e15a2b;
    --swiper-navigation-size: 22px;

    .swiper-button-prev,
    .swiper-button-next {
      background: white;
      border-radius: 50%;
      padding: 15px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }

  &__button {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
}

.review-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &__image {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 16;
  }

  &__footer {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  &__desc {
    font-size: 14px;
    text-align: center;
    font-weight: 500;
  }
}
</style>
