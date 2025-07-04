<template>
  <div v-if="data.pluses.length > 0 && data.pluses.length > 0">
    <div class="container">
      <div class="container__wrapper">
        <div
          v-if="data.pluses.length > 0"
          class="container__wrapper__header"
        >
          <img :src="'/images/plus.svg'">
          <h3>Лучшие конфигурации</h3>
        </div>

        <ul>
          <li
            v-for="(item, index) in data.pluses"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="container__wrapper">
        <div
          v-if="data.minuses.length > 0"
          class="container__wrapper__header"
        >
          <img :src="'/images/minus.svg'">
          <h3>Не рекомендуем</h3>
        </div>

        <ul>
          <li
            v-for="(item, index) in data.minuses"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: { pluses: string[]; minuses: string[] }
}
const { data } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 3px $primary solid;
  border-radius: 30px;
  margin: 40px 0;
  padding: 20px;
  @include more-than-laptop {
    margin: 40px 0;
  }

  @include more-than-laptop {
    flex-direction: row;
    gap: 20px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    ul {
      @include reset-list;

      li {
        font-weight: bold;
        margin-left: 55px;
      }
    }

    &__header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;

      h3 {
        font-size: 18px;
        font-weight: bold;
        line-height: normal;
      }
    }
  }
}
</style>
