<template>
  <section class="why-choose-us">
    <div class="why-choose-us__wrapper">
      <h2 class="why-choose-us__title">
        Почему стоит заказать автомобиль у нас?
      </h2>
      <p class="why-choose-us__subtitle">
        Подберем, проверим, доставим. Гарантия легальности и выгодной цены
      </p>

      <div class="why-choose-us__grid">
        <div
          v-for="item in benefits"
          :key="item.number"
          class="why-choose-us__card"
        >
          <div class="why-choose-us__text">
            <span class="why-choose-us__number">{{ item.number }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="why-choose-us__image">
            <img
              :src="item.image"
              :alt="item.title"
            >
          </div>
        </div>
      </div>

      <div class="why-choose-us__button-container">
        <button class="why-choose-us__button">
          Подобрать авто за 1 день
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    number: '01',
    title: 'Гарантия, что автомобиль хороший',
    description:
      'Предоставляем вам детальный отчет с замерами ЛКП, состоянием подкапотки, салона, багажника, ходовой. В отчете более 6 подробных видео и порядка 100 фотографий, что позволяет нам полностью понять',
    image: '/images/car-delivery/why-choose-us/car-good.png'
  },
  {
    number: '02',
    title: 'Быстрые сроки доставки',
    description:
      'Предоставляем вам детальный отчет с замерами ЛКП, состоянием подкапотки, салона, багажника, ходовой. В отчете более 6 подробных видео и порядка 100 фотографий, что позволяет нам полностью понять',
    image: '/images/car-delivery/why-choose-us/delivery-fast.png'
  },
  {
    number: '03',
    title: 'Гарантия законности документов',
    description:
      'Предоставляем вам детальный отчет с замерами ЛКП, состоянием подкапотки, салона, багажника, ходовой. В отчете более 6 подробных видео и порядка 100 фотографий, что позволяет нам полностью понять',
    image: '/images/car-delivery/why-choose-us/documents.png'
  },
  {
    number: '04',
    title: 'Гарантия беспроблемного использования авто',
    description:
      'Предоставляем вам детальный отчет с замерами ЛКП, состоянием подкапотки, салона, багажника, ходовой. В отчете более 6 подробных видео и порядка 100 фотографий, что позволяет нам полностью понять',
    image: '/images/car-delivery/why-choose-us/no-issues.png'
  }
]
</script>

<style scoped lang="scss">
.why-choose-us {
  padding: 60px 20px;
  background-color: #fff;

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 12px;
    line-height: 1.2;
  }

  &__subtitle {
    font-size: 16px;
    text-align: center;
    margin-bottom: 40px;
    color: #555;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background: #f7f7f7;
    border-radius: 20px;
    overflow: hidden;
    padding: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__text {
    flex: 1;
    padding-right: 20px;

    h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
      line-height: 1.2;
    }

    p {
      font-size: 14px;
      color: #333;
      line-height: 1.5;
    }
  }

  &__number {
    display: inline-block;
    background: #e15a2b;
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 50px;
    margin-bottom: 10px;
  }

  &__image {
    width: 180px;
    min-width: 180px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
    }
  }

  &__button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  &__button {
    background: #e15a2b;
    color: white;
    font-weight: 700;
    font-size: 16px;
    padding: 14px 28px;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #cc4e22;
    }
  }
}
</style>
