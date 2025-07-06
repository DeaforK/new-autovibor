<template>
  <section class="company-trust">
    <div class="company-trust__wrapper">
      <h2 class="company-trust__title">
        Автовыбор – надёжный партнёр по доставке автомобилей из Японии
      </h2>

      <div class="company-trust__grid">
        <!-- Офис в России -->
        <div class="company-trust__office company-trust__block--image">
          <img
            :src="'/images/car-delivery/office-russia.png'"
            alt="Офис в России"
          >
          <p><strong>Офис в России:</strong> г. Екатеринбург, ул. Амундсена д.107, оф.516 (вход блок2)</p>
        </div>

        <!-- Преимущества -->
        <div class="company-trust__block company-trust__block--stats">
          <div class="stat">
            <strong>8 лет</strong><span>средний стаж работы<br>сотрудников компании</span>
          </div>
          <div class="stat">
            <strong>95</strong><span>параметров проверки<br>автомобиля</span>
          </div>
          <div class="stat">
            <strong>> 1000</strong><span>подобранных и<br>привезенных авто</span>
          </div>
          <div class="stat">
            <strong>> 7 лет</strong><span>успешной работы<br>на рынке</span>
          </div>
        </div>

        <!-- Офис в Корее -->
        <div class="company-trust__office company-trust__block--image">
          <img
            :src="'/images/car-delivery/office-korea.png'"
            alt="Офис в Южной Корее"
          >
          <p><strong>Офис в Южной Корее:</strong> 49-34 Hang-dong 7(chil)-ga, Jung-gu, Incheon</p>
        </div>

        <!-- Оценка -->
        <div class="company-trust__block company-trust__block--rating">
          <div class="rating">
            <div class="rating__value">
              5,0 ★★★★★
            </div>
            <div class="rating__desc">
              <p>оценка компании<br>на сервисах Яндекса</p>
              <p class="text-small">
                Отзывы реальных клиентов расскажут<br>
                о нашей работе лучше, чем мы
              </p>
            </div>
            <button class="yandex-btn">
              Читать отзывы на Яндексе
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.company-trust {
  background-color: #f4f4f4;
  border-radius: 36px;
  padding: 60px 20px;
  margin: 25px 48px;

  &__wrapper {
    max-inline-size: 1200px;
    margin: 0 auto;
  }

  &__title {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin-block-end: 40px;

    @media (max-inline-size: 768px) {
      font-size: 20px;
      margin-block-end: 20px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    // "Лесенка" — отступ слева у чётных элементов второй строки
     & > :nth-child(2) {
      margin-inline-end: 76px;

      @media (max-inline-size: 900px) {
        margin-inline-end: 0;
      }
    }
    & > :nth-child(3) {
      margin-inline-start: 76px;

      @media (max-inline-size: 900px) {
        margin-inline-start: 0;
      }
    }

    @media (max-inline-size: 900px) {
      grid-template-columns: 1fr;
    }
  }

  &__block {
    border-radius: 20px;
    overflow: hidden;
    background-color: white;
  }

  &__block--image {
    position: relative;
    color: white;
    font-size: 14px;
    border-radius: 20px;
    overflow: hidden;

    img {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      display: block;
      border-radius: 20px;
    }

    // Градиент сверху вниз
    &::after {
      content: '';
      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;
      block-size: 100%;
      inline-size: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent 30%, transparent 60%, rgba(0, 0, 0, 0.6));
      border-radius: 20px;
      z-index: 10;
    }

    p {
      position: absolute;
      inset-block-end: 16px;
      inset-inline-start: 16px;
      inset-inline-end: 16px;
      margin: 0;
      font-size: 14px;
      z-index: 11;
      background: none;
      padding: 0;
      color: #fff;
    }
  }

  &__block--stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 20px;

    .stat {
      background: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;

      strong {
        display: block;
        font-size: 20px;
        color: #e15a2b;
        margin-block-end: 6px;
      }

      span {
        font-size: 14px;
        color: #333;
      }
    }

    @media (max-inline-size: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__block--rating {
    background: #e15a2b;
    color: white;
    padding: 30px 20px;
    border-radius: 20px;

    .rating {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      block-size: 100%;

      &__value {
        font-size: 32px;
        font-weight: 700;
        margin-block-end: 12px;
      }

      &__desc p {
        margin: 0;
        line-height: 1.4;
      }

      .text-small {
        font-size: 13px;
        opacity: 0.9;
        margin-block-start: 10px;
      }

      .yandex-btn {
        margin-block-start: 20px;
        background: white;
        color: black;
        font-weight: 600;
        border: none;
        border-radius: 25px;
        padding: 12px 20px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: #f2f2f2;
        }
      }
    }
  }
}
</style>
