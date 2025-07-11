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

  @media (max-width: 768px) {
    padding: 40px 16px;
    margin: 20px;
    border-radius: 24px;
  }

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__title {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 24px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    // "Лесенка" — отступ слева у чётных элементов второй строки
     & > :nth-child(2) {
      margin-inline-end: 76px;

      @media (max-width: 900px) {
        margin-inline-end: 0;
      }
    }
    & > :nth-child(3) {
      margin-inline-start: 76px;

      @media (max-width: 900px) {
        margin-inline-start: 0;
      }
    }

    @media (max-width: 900px) {
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
    font-size: 14px;
    color: white;

    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      display: block;
      border-radius: 20px;

      @media (max-width: 768px) {
        height: 180px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.7));
      border-radius: 20px;
      z-index: 1;
    }

    p {
      position: absolute;
      bottom: 16px;
      left: 16px;
      right: 16px;
      margin: 0;
      font-size: 13px;
      z-index: 2;
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
        margin-bottom: 6px;
      }

      span {
        font-size: 14px;
        color: #333;
      }
    }

    @media (max-width: 768px) {
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
      justify-content: center;
      align-items: center;

      &__value {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 12px;
      }

      &__desc {
        text-align: center;

        p {
          margin: 0;
          line-height: 1.4;
        }

        .text-small {
          font-size: 13px;
          opacity: 0.9;
          margin-top: 10px;
        }
      }

      .yandex-btn {
        margin-top: 20px;
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
