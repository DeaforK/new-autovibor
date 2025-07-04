<template>
  <div class="details-list">
    <ul>
      <li>
        <span>Годы выпуска:</span>
        <b>{{ year.yearOfManufactureFrom }} - {{ year.yearOfManufactureUntil }}</b>
      </li>

      <li>
        <span>Кузов:</span>
        <b>{{ carData.transmission }}</b>
      </li>

      <li>
        <span>Привод:</span>
        <b>{{ carData.gear }}</b>
      </li>

      <li>
        <span>Мощность:</span>
        <b>{{ carData.power }} л.с. </b>
      </li>

      <li>
        <span>Топливо:</span>
        <b>от {{ carData.fuel }} </b>
      </li>

      <li>
        <span>Налог:</span>
        <b>{{ carData.taxes }}</b>
      </li>

      <li>
        <span>Рекомендуемая цена:</span>
        <b>{{ carData.price }}</b>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  year: {
    yearOfManufactureFrom: number
    yearOfManufactureUntil: number
  }
  carData: {
    fuel: string
    gear: string
    power: string
    price: string
    taxes: string
    title: string
    transmission: string
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
