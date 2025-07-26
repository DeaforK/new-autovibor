<template>
  <section class="payment-steps">
    <div class="payment-steps__wrapper">
      <h2 class="payment-steps__title">
        Этапы покупки автомобиля
      </h2>
      <div class="payment-steps__grid">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="payment-steps__card"
        >
          <div class="payment-steps__card__content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
          <div class="payment-steps__card__footer">
            <span class="payment-steps__card__number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <img
              class="payment-steps__card__icon"
              :src="step.icon"
              :alt="step.title"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  steps: {
    title: string
    description: string
    icon: string
  }[]
}>()
</script>

<style scoped lang="scss">
.payment-steps {
  background: #f9f9f9;
  border-radius: 36px;
  padding: 60px 20px;
  margin: 0 40px;

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__title {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    background: #fff;
    border-radius: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    min-height: 240px;

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
      line-height: 1.2; // уменьшенный межстрочный интервал

      display: -webkit-box;
      -webkit-line-clamp: 2; // максимум 2 строки
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (max-width: 768px) {
        h3 {
          font-size: 16px;
        }
      }

    }

    p {
      font-size: 14px;
      color: #333;
      line-height: 1.4;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
    }

    &__number {
      font-size: 18px;
      font-weight: 600;
      color: #e15a2b;
    }

    &__icon {
      width: 50px;
      height: 50px;
      background: #fef1eb;
      border-radius: 50%;
      padding: 8px;
      object-fit: contain;
    }
  }
  @media (max-width: 768px) {
      padding: 30px 20px;
      max-width: 0 20px;
    }
}
</style>
