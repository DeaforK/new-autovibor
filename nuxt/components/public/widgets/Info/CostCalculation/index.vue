<template>
  <div class="cost-calculation">
    <div class="cost-calculation__container">
      <div class="cost-calculation__container-content">
        <h2 class="cost-calculation__container-content__title">
          Рассчитать стоимость автомобиля
        </h2>

        <span class="cost-calculation__container-content__sub-title">
          Укажите Ваши пожелания, и получите несколько расчетов бесплатно
        </span>
        <button
          class="cost-calculation__container-content__btn"
          @click="showImportModal = true"
        >
          Сделать рассчёт
        </button>
      </div>
    </div>
  </div>
  <PublicWidgetsCommonImportFormModal v-model:show-modal="showImportModal" />
</template>

<script setup lang="ts">
const showImportModal = ref(false)
</script>

<style lang="scss" scoped>
.cost-calculation {
  font-family: "Montserrat";
  margin-top: 30px;

  &-link {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #da582d;
    text-align: center;
    color: white;
    padding: 20px 40px;
    border: 1px solid #fff;
    border-radius: 20px;
    cursor: pointer;

    button {
      @include reset-button;
      font-family: 'Montserrat';
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      width: 100%;
    }
  }
  &__container {
    background-image: url('/images/car-delivery/cost-calculation.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    position: relative;
    align-items: flex-start;
    margin: 0 auto;
    border-radius: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;

    @include more-than-small-mobile {
      width: 100%;
    }

    @include more-than-mobile {
      width: 95%;
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 33%;
      margin-top: 80px;
      margin-bottom: 100px;
      background-color: #fff;
      border-radius: 40px;
      padding: 55px;

      @include more-than-small-mobile {
        width: 100%;
      }

      @include more-than-laptop {
        width: 50%;
        margin-left: 70px;
      }

      @include more-than-desktop {
        width: 27%;
        margin-left: 70px;
      }

      &__title {
        font-weight: 700;

        @include more-than-small-mobile {
          text-align: center;
          font-size: 20px;
          line-height: 23px;
        }

        @include more-than-laptop {
          text-align: left;
          font-size: 36px;
          line-height: 43px;
        }
      }

      &__sub-title {
        @include more-than-small-mobile {
          text-align: center;
        }

        @include more-than-laptop {
          text-align: left;
        }
      }

      &__consult-list {
        margin-top: 19px;
        margin-bottom: 26px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          display: flex;
        }
      }
      &__btn {
        @include reset-button;
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 700;
        font-size: 16px;
        border-radius: 20px;
        background-color: #DA582D;
        color: #fff;

        @include more-than-small-mobile {
          padding: 20px;
        }

        @include more-than-mobile {
          padding: 20px 30px;
        }

        @include more-than-tablet {
          padding: 25px 50px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.orange-circle {
  height: 9px;
  width: 9px;
  background-color: #DA582D;
  border-radius: 100%;
}

</style>