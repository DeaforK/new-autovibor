<template>
  <div class="autosalon">
    <div
      v-for="(item, index) in props"
      :key="index"
      class="autosalon__block"
    >
      <img
        :src="item.image"
        class="autosalon__block__img"
        :alt="item.header"
      >

      <div class="autosalon__block__text">
        <h3>{{ item.header }}</h3>
        <p v-html="item.body" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  props: { image: string; header: string; body: string }[]
}
const { props } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.autosalon {
  max-width: 100%;
  margin: 0 auto;
  padding: 30px 0;
  display: grid;
  gap: 4rem;

  @include more-than-mobile {
    grid-template-columns: 1fr;
  }

  @include more-than-laptop {
    grid-template-columns: repeat(2, 1fr);
  }

  &__block {
    display: flex;
    gap: 30px;
    padding: 1rem;
    width: 100%;
    flex-direction: column;

    @include more-than-small-mobile {
      align-items: center;
    }

    @include more-than-mobile {
      flex-direction: row;
      align-items: flex-start;
    }

    &__img {
      max-width: 80px;
      max-height: 80px;
      border-radius: 20px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      @include more-than-tablet {
        align-items: flex-start;
      }

      h3 {
        font-weight: bold;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        text-align: center;
        @include more-than-mobile {
          text-align: left;
        }
      }
      p {
        font-size: 14px;
        line-height: 170%;
        max-width: 100%;
        text-align: center;
        @include more-than-mobile {
          text-align: justify;
          text-justify: inter-word;
        }
      }
    }
  }
}
</style>
