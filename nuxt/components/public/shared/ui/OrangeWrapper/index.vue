<template>
  <div class="container_orange">
    <h2 v-if="title">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
}

const { title } = defineProps<Props>()
</script>

<style lang="scss" scoped>


.container_orange {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  max-width: 100%;
  background-color: #e15a2b;

  h2 {
    font-weight: bold;
    text-align: center;
    color: white;

    @include more-than-small-mobile {
      font-size: 28px;
      line-height: 120%;
      margin-bottom: 50px;
      padding: 0 !important;
    }

    @include more-than-mobile {
      font-size: 32px;
      line-height: 39px;
      max-width: 60%;
    }
  }
}
</style>
