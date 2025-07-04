<template>
  <div class="logos">
    <h2>Нам доверяют!</h2>
    <div class="logos__wrapper">
      <div
        v-for="idx in 5"
        :key="idx"
        class="logos__wrapper__image_container"
      >
        <q-img
          :src="`/images/insurance/companies/${idx}.png`"
          class="image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.logos {
  margin: 0 auto;
  width: 90%;
  margin: 45px auto;

  h2 {
    font-weight: bold;
    font-size: 27px;
    line-height: 39px;
    margin: 30px 20px;
    text-align: center;
  }

  &__wrapper {
    display: grid;

    @include more-than-small-mobile {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }

    @include more-than-mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    @include more-than-laptop {
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
    }

    @include more-than-desktop-big {
      grid-template-columns: repeat(5, 1fr);
      gap: 30px;
    }

    &__image_container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      background: #ffffff;
      box-shadow: 0px 7px 34px rgba(0, 0, 0, 0.09);
      border-radius: 6px;
      max-height: 150px;
      min-width: 150px;
    }

    .image {
      object-fit: contain;
      @include more-than-small-mobile {
        min-height: 100px;
      }

      @include more-than-small-mobile {
        max-height: 150px;
        max-width: 150px;
      }
    }
  }
}
</style>
