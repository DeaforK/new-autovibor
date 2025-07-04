<template>
  <div class="catalog-list">
    <ul>
      <li
        v-for="(point, i) in data"
        :key="i"
      >
        {{ point }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: string[]
}
const { data } = defineProps<Props>()
</script>

<style lang="scss">
.catalog-list {
  @include more-than-laptop {
  }

  ul {
    @include reset-list;
    margin: 30px 0;
    @include more-than-laptop {
      margin-bottom: 20px;
      margin-top: 0;
    }

    li {
      position: relative;
      margin-bottom: 10px;
      font-weight: 500;
      line-height: 1.444444;
      font-size: 16px;
      margin-left: 40px;
      @include more-than-laptop {
        font-size: 18px;
      }

      &::before {
        position: absolute;
        left: -30px;
        top: 5px;
        height: 18px;
        width: 18px;
        background-color: $primary;
        border-radius: 50%;
        content: '';
      }

      &::after {
        position: absolute;
        left: -24px;
        top: 11px;
        height: 6px;
        width: 6px;
        background-color: #ffffff;
        border-radius: 50%;
        content: '';
      }
    }
  }
}
</style>
