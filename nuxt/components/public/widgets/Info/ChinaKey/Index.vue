<template>
  <section class="bargain_block">
    <div class="container two-column">
      <div class="text">
        <h2 class="title">
          Авто из Китая под ключ <br>
          с доставкой до Екатеринбурга
        </h2>
        <p>
          Компания «Автовыбор» предлагает купить авто из Китая под ключ с доставкой до Екатеринбурга.
          В настоящее время на рынке КНР представлен большой выбор качественных и технологичных автомобилей
          новых и с пробегом, способных удовлетворить ожидания и запросы российских покупателей.
        </p>
        <p>
          Автомобили идут не только китайского автопрома, но и всем известные европейские, корейские,
          японские, американские и др. бренды.
        </p>
        <p>
          Более того, практика показывает, что цена доставки авто из Китая даже с учетом всех дополнительных
          и обязательных платежей оказывается на 20–30% ниже стоимости машин в России с аналогичными
          характеристиками и параметрами.
        </p>
        <p>
          По запросу физических и юридических лиц мы готовы привезти китайские автомобили в Россию:
          внедорожники, кроссоверы, седаны, микроавтобусы и т.д.
        </p>
      </div>
      <div class="image">
        <img
          :src="'/images/car-delivery/china-car.jpg'"
          alt="Авто из Китая"
        >
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.bargain_block {
  padding: 80px 20px;

  .container {
    max-width: 1200px;
    margin: 0 auto;

    &.two-column {
      display: flex;
      align-items: center;
      gap: 40px;

      @media (max-width: 1024px) {
        flex-direction: column;
      }

      .text {
        flex: 1;

        .title {
          font-weight: 800;
          font-size: 32px;
          line-height: 1.3;
          margin-bottom: 24px;

          @media (max-width: 768px) {
            font-size: 24px;
          }
        }

        p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
      }

      .image {
        flex: 1;
        text-align: center;

        img {
          max-width: 100%;
          height: auto;
          border-radius: 16px;
        }
      }
    }
  }
}

</style>
