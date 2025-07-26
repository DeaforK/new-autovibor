<template>
  <section class="reviews">
    <div class="container">
      <h2 class="reviews__title">
        Отзывы наших клиентов
      </h2>

      <div class="reviews__wrapper">
        <button
          class="arrow left"
          @click="scrollLeft"
        >
          <img :src="'/images/slider_left_arrow.png'">
        </button>

        <div
          ref="scrollContainer"
          class="reviews__grid"
        >
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

        <button
          class="arrow right"
          @click="scrollRight"
        >
          <img :src="'/images/slider_right_arrow.png'">
        </button>
      </div>

      <div class="reviews__button">
        <button @click="navigateTo('/about/reviews')">
          Показать все отзывы
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  scrollContainer.value?.scrollBy({ left: -330, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value?.scrollBy({ left: 330, behavior: 'smooth' })
}

const reviews = [
  {
    link: 'https://vk.com/video_ext.php?oid=-129549043&id=456239677'
  },
  {
    link: 'https://vk.com/video_ext.php?oid=-129549043&id=456239694'
  },
  {
    link: 'https://vk.com/video_ext.php?oid=-129549043&id=456239708'
  },
  {
    link: 'https://vk.com/video_ext.php?oid=-129549043&id=456239713'
  },
  {
    link: 'https://vk.com/video_ext.php?oid=-129549043&id=456239715&hd=2&autoplay=0'
  },
  {
    link: 'https://vk.com/video_ext.php?oid=-129549043&id=456239726&hd=2&autoplay=0'
  }
]
</script>


<style scoped lang="scss">
.reviews {
  background: #f5f5f5;
  border-radius: 30px;
  padding: 60px 0;
  margin: 60px 40px;

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

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__grid {
    display: flex;
    gap: 30px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__video {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 515px;

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

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    width: 36px;
    height: 36px;
    padding: 0;
    z-index: 10;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }

    &.left {
      left: -44px; // Центр по краю контейнера
    }

    &.right {
      right: -44px;
    }

    &:hover {
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }
  }


  &__button {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    color: #f5f5f5;

    a,
    button {
      @include reset-link;
      @include reset-button;

      font-weight: 700;
      font-size: 16px;


      @include more-than-small-mobile {
        padding: 10px;
      }

      @include more-than-mobile {
        padding: 20px 30px;
      }

      @include more-than-tablet {
        padding: 20px 50px;
      }

      border-radius: 20px;

      &:nth-child(1) {
        background-color: #DA582D;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
