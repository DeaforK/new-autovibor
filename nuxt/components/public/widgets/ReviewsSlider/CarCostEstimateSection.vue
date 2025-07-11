<template>
  <section class="car_calc">
    <div class="car_calc__background">
      <div class="car_calc__tag">
        Экономия до 30–40% за счёт прямых аукционов
      </div>

      <div class="car_calc__offer">
        <h2>Рассчитать стоимость автомобиля</h2>
        <p>
          Укажите Ваши пожелания, и получите<br>
          несколько расчетов бесплатно
        </p>
        <button
          class="car_calc__button"
          @click="openModal = true"
        >
          Сделать расчёт
        </button>
      </div>
    </div>

    <PublicWidgetsCommonFormModal v-model:showModal="openModal" />
  </section>
</template>

<script setup lang="ts">
const openModal = ref(false)
</script>

<style scoped lang="scss">
.car_calc {
  padding: 50px 48px;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }

  &__background {
    background: url('/images/car-delivery/bg-car-calc.png') no-repeat center;
    background-size: cover;
    border-radius: 36px;
    position: relative;
    min-height: 500px;
    padding: 70px 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 24px 16px 100px;
      border-radius: 20px;
      min-height: auto;
    }
  }

  &__tag {
    position: absolute;
    top: 18px;
    right: 18px;
    background: #e15a2b;
    padding: 10px 30px;
    color: white;
    border-radius: 30px;
    font-weight: 600;
    font-size: 18px;
    white-space: nowrap;

    @media (max-width: 768px) {
      top: 12px;
      right: 12px;
      font-size: 12px;
      padding: 6px 16px;
    }
  }

  &__offer {
    position: absolute;
    left: 70px;
    background-color: rgba(255, 255, 255, 0.95);
    width: 100%;
    max-width: 480px;
    padding: 36px 28px;
    border-radius: 30px;
    text-align: center;

    h2 {
      font-size: 26px;
      font-weight: 700;
      line-height: 120%;
      margin-bottom: 18px;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    p {
      font-size: 16px;
      line-height: 140%;
      margin-bottom: 24px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    @media (max-width: 768px) {
      position: static;
      padding: 24px 16px;
      margin-top: 40px;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.95);
    }
  }

  &__button {
    background-color: #e15a2b;
    color: white;
    border: none;
    border-radius: 14px;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #cc4e22;
    }

    @media (max-width: 768px) {
      font-size: 15px;
      padding: 10px 20px;
      width: 100%;
    }
  }
}

</style>
