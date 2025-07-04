<template>
  <div class="cards">
    <h2
      class="cards-title"
      v-html="title"
    />
    <ul class="cards-list">
      <li
        v-for="(card, idx) in cards"
        :key="idx"
        class="cards-item"
        :style="card.image !== '' ? 'padding: 0;' : ''"
      >
        <img
          v-if="card.image !== ''"
          class="cards-item__image"
          :src="card.image"
          :alt="card.title"
        >
        <template v-if="card.image === ''">
          <h3
            class="cards-item__title"
            v-text="card.title"
          />
          <p
            class="cards-item__description"
            v-text="card.description"
          />
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  cards: { title?: string, description?: string, image?: string }[]
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.cards {
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;

  @include more-than-small-mobile {
    width: 100%;
  }

  @include more-than-tablet {
    width: 95%;
  }

  &-title {
    font-weight: 700;
    text-align: center;
    margin: 0 auto;

    @include more-than-small-mobile {
      width: 100%;
      font-size: 28px;
      line-height: 36px;
    }

    @include more-than-mobile {
      font-size: 36px;
      width: 70%;
      line-height: 44px;
    }
  }

  &-list {
    @include reset-list;
    margin: 0 auto;
    margin-top: 40px;
    display: grid;
    gap: 15px;

    @include more-than-small-mobile {
      max-width: 95%;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }

    @include more-than-tablet {
      max-width: 80%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }

  &-item {
    display: flex;
    padding: 70px 40px;
    border: 1px solid #7c7c7c;
    border-radius: 15px;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 200px;
    @include more-than-tablet {
      &:nth-child(1) {
        margin-left: 15%;
      }
      &:nth-child(2) {
        margin-right: 15%;
      }
      &:nth-child(3) {
        margin-right: 15%;
      }
      &:nth-child(4) {
        margin-left: -15%;
        margin-right: 30%;
      }

      &__description {
        font-size: 16px;
      }
    }
    &__title {
      color: #da582d;
      font-size: 36px;
      line-height: 50px;
      font-weight: 500;
    }

    &__image {
      margin: 0 auto;
      width: 100%;
      border-radius: 15px;
      max-height: 300px;
      object-fit: cover;
    }
  }
}
</style>