<template>
  <div class="car_wrapper">
    <button class="car_wrapper__car-btn">
      <span class="car_wrapper__car-btn-num">{{ num }}. </span>
      <span
        class="car_wrapper__car-btn-title"
        v-html="title"
      />
      <q-tooltip
        anchor="top middle"
        self="bottom middle"
        :offset="[10, 10]"
        class="bg-black tooltip"
        max-width="12rem"
      >
        <span v-text="tooltip" />
      </q-tooltip>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  num: string
  tooltip?: string
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.car_wrapper {
  padding: 10px;
  margin: 0 auto;

  &__car-btn {
    border: none;
    height: 45px;
    color: #fff;
    background-color: #242424;
    box-shadow: 0px 7px 34px rgba(0, 0, 0, 0.09);
    border-radius: 70px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    white-space: nowrap;
    line-height: 129%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0 25px;

    @include more-than-small-mobile {
      width: 220px;
      font-size: 10px;
      text-align: left;
    }

    @include more-than-laptop {
      text-align: center;
    }

    @include more-than-desktop {
      width: 230px;
    }

    @include more-than-desktop-big {
      width: 280px;
      font-size: 12px;
    }

    &-num {
      font-size: 10px;
      color: #e15a2b;
      font-weight: bold;

      @include more-than-laptop {
        font-size: 10px;
      }

      @include more-than-desktop-big {
        font-size: 12px;
      }
    }
  }
}

.tooltip {
  span {
    font-size: 12px;
  }
}
</style>
