<template>
  <div class="details-list">
    <ul>
      <li>
        <span>Год выпуска:</span>
        <b>{{ year }}</b>
      </li>

      <li>
        <span>Пробег:</span>
        <b>{{ carData.mileage }}</b>
      </li>

      <li>
        <span>Объём двигателя:</span>
        <b>{{ carData.engineVolume }}</b>
      </li>

      <li>
        <span>Привод:</span>
        <b>{{ carData.gear }}</b>
      </li>

      <li>
        <span>Цена:</span>
        <b>{{ carData.price }}</b>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  year: number
  carData: {
    title: string
    mileage: number
    images: string[]
    engineVolume: string
    gear: string
    price: string
  }
}

const { year, carData } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.details-list {
  ul {
    @include reset-list;
    width: 100%;

    li {
      display: flex;
      font-size: 14px;
      margin-bottom: 3px;
      line-height: 30px;
      justify-content: space-between;

      &:last-child {
        margin: 30px 0;
        margin-bottom: 60px;
        @include more-than-laptop {
          margin-bottom: 10px;
        }
        b {
          font-size: 18px;
          color: $primary;
          @include more-than-laptop {
            font-size: 26px;
          }
        }
      }

      @include more-than-mobile {
        font-size: 18px;
      }
    }
  }
}
</style>
