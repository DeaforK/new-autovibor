<template>
  <section class="bargain_block">
    <div class="container">
      <h2 class="title">
        <span>В 90% случаев стоимость услуги отбивается</span><br>
        во время торга с продавцом
      </h2>

      <div class="text_columns">
        <div class="column left">
          <p>
            Проверим нужный автомобиль по фирменному чек-листу...
          </p>
          <ul class="features">
            <li><img :src="'/images/checkmark.svg'"> Проводим полную техническую и визуальную проверку авто</li>
            <li><img :src="'/images/checkmark.svg'"> Возможна оплата после получения</li>
            <li><img :src="'/images/checkmark.svg'"> Вы — первый собственник в РФ</li>
          </ul>
          <p>
            Приехать и проверить автомобиль — уже недостаточно...
          </p>
        </div>
        <div class="column right">
          <p>
            Более 10 лет мы занимались перепродажей автомобилей...
          </p>
        </div>
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
  }

  .title {
    font-weight: 800;
    font-size: 36px;
    text-align: left;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .text_columns {
    display: flex;
    gap: 40px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    .column {
      flex: 1;
      font-size: 16px;
      line-height: 1.6;

      .features {
        list-style: none;
        padding-left: 0;
        margin: 20px 0;

        li {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
