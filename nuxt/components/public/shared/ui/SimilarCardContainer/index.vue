<template>
  <div
    v-show="props.length > 1"
    class="suggest-to-read"
  >
    <h2 class="heading-similar">
      Предлагаем почитать
    </h2>
    <div class="similar-list">
      <PublicSharedUiSimilarCard
        v-if="props"
        :props="props"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  props: {
    name: string
    poster: string
    url: string
  }[]
}
const { props } = defineProps<Props>()
</script>

<style lang="scss">
.similar-list {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  padding-bottom: 60px;
  @include more-than-mobile {
    grid-template-columns: repeat(3, 1fr);
  }
}
.heading-similar {
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 44px;
  text-align: center;
  margin-bottom: 2em;
  margin-top: 2em;
}
</style>
