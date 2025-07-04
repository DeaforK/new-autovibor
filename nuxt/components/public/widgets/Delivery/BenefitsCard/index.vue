<template>
  <div
    v-for="card in data"
    :key="card.title"
    class="container"
  >
    <h1 v-html="card.title" />

    <p>{{ card.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { data } from './data'
</script>

<style lang="scss" scoped>

.container {
  box-shadow: 4px 4px 4px 4px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  background-color: white;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include more-than-laptop {
    padding: 0 15px;
  }

  h1 {
    color: $primary;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 1.1;
    margin-bottom: 20px;
    @include more-than-laptop {
      margin-bottom: 20px;
      font-size: 28;
    }
  }

  p {
    text-align: center;
  }
}
</style>
