<template>
  <div
    class="top-hero-section_container"
    :style="{ backgroundImage: `url(${backgroundImage || '/images/modal_bg.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div class="top-hero-section_container__left_container_hero_info">
      <h1 class="top-hero-section_container__left_container_hero_info__heading">
        <slot name="title" />
      </h1>
      <p
        style="margin-top: 30px"
        class="top-hero-section_container__left_container_hero_info__sub-title"
      >
        <slot name="title-body" />
      </p>
      <q-list class="top-hero-section_container__left_container__list">
        <q-item
          v-for="(point, idx) in list"
          :key="idx"
        >
          <img :src="'/images/checkmark.svg'">
          <p v-html="point" />
        </q-item>
      </q-list>

      <p
        style="margin-top: 30px"
        class="top-hero-section_container__left_container_hero_info__sub-title"
      >
        <slot name="body" />
      </p>

      <p
        v-if="text"
        style="margin-top: 20px"
      >
        {{ text }}
      </p>

      <p
        v-if="smalltext"
        class="small-text-with-star"
      >
        {{ smalltext }}
      </p>

      <div class="top-hero-section_container__left_container__btns">
        <button @click="showModalFormImport = true">
          Подобрать авто
        </button>
      </div>
    </div>

    <div class="top-hero-section_container__right_container_hero_info">
      <h2>Бесплатная консультация</h2>

      <PublicWidgetsCommonLeaveRequestForm btncolor="primary" />
    </div>
  </div>
  <PublicWidgetsCommonImportFormModal v-model:show-modal="showModalFormImport" />
</template>

<script setup lang="ts">
interface Props {
  title?: string
  buttons?: Button[]
  subTitle?: string
  text?: string
  video?: boolean
  smalltext?: string
  list?: string[]
  backgroundImage?: string // ← новый пропс
}

type Button = {
  label: string,
  to: string
}
defineProps<Props>()

const showModalInfoImport = ref(false)
const showModalFormImport = ref(false)

</script>

<style lang="scss" scoped>
.top-hero-section_container {
  background: v-bind('backgroundImage') no-repeat center center;
  background-size: cover;
  background-color: $primary;

  &__video {
    background-color: #000000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: hidden;

    @include more-than-small-mobile {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 900px;
      z-index: -1;
      background-size: cover;
    }

    @include more-than-tablet {
      height: 900px;
    }
  }

  @include more-than-laptop {
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 40px;
  }

  @include more-than-small-mobile {
    padding-bottom: 40px;
    padding-top: 40px;
  }
  @include more-than-laptop {
    padding-top: 240px;
  }

  &__left_container_hero_info {
    display: flex;
    flex-direction: column;
    margin: 0 5%;
    color: white;

    @include more-than-small-mobile {
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 20px 30px;
    }

    @include more-than-laptop {
      align-items: flex-start;
      justify-content: center;
      margin: 0 5%;
      max-width: 50%;
    }

    &__heading {
      font-weight: bold;
      font-size: 32px;
      line-height: 120%;
      padding: 0 !important;
      margin: 0 !important;
      text-align: center;

      @include more-than-mobile {
        font-size: 36px;
      }

      @include more-than-laptop {
        text-align: left;
        max-width: 80%;
      }
    }
    .small-text-with-star {
      font-size: 14px;
    }

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 170%;

      @include more-than-small-mobile {
        text-align: center;
      }

      @include more-than-laptop {
        text-align: left;
      }
    }

    &__sub-title {
      font-family: TT Hoves;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      text-align: left;
    }
  }

  &__left_container__list {
    @include reset-list;

    margin-top: 18px;
    display: flex;
    flex-direction: column;

    .q-item {
      min-height: min-content;
      font-family: "TT Hoves";
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      padding: 5px 0;

      display: flex;
      align-items: center;

      p {
        margin-left: 12px;
      }

      img {
        width: 14px;
        height: 14px;
      }
    }
  }

  &__left_container__btns {
    display: flex;
    gap: 18px;
    margin-top: 29px;

    a, button {
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

      &:nth-child(2) {
        background-color: transparent;
        border: 1px solid white;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  &__right_container_hero_info {
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-right: 60px;
    border-radius: 40px;
    padding: 30px;

    @include more-than-small-mobile {
      margin: 0 auto;
    }

    @include more-than-mobile {
      width: 80%;
    }

    @include more-than-laptop {
      margin-right: 100px;
      width: 400px;
    }

    h2 {
      text-align: center;
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;
      color: #000000;
      margin: 0 auto;
    }
  }
}

.btn {
  border: 1px solid white;
  border-radius: 20px;
  @include more-than-small-mobile {
    padding: 15px;
  }

  @include more-than-mobile {
    padding: 20px 30px;
  }

  @include more-than-tablet {
    padding: 20px 50px;
  }
}
</style>
