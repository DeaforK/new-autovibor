<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Porshe Cayenne 2012"
  />
  <div class="btns-wrapper">
    <div class="report-container">
      <div class="row">
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="https://disk.yandex.ru/d/_VNUqZ5mexwZpg"
            target="_blank"
          >
            Смотреть отчёт
          </q-btn>
        </div>
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="/docs/reports/porshe-cayenne.pdf"
            target="_blank"
          >
            Пример отчёта
          </q-btn>
        </div>
      </div>
    </div>
  </div>
  <div class="report-container">
    <div class="h1">
      Porshe Cayenne 2012
    </div>
    <div class="content">
      <p>
        <b>ПТС оригинал, 6 записей</b>
      </p>
      <p>
        <b>Пробег 105 581 км</b>
      </p>
      <br>

      <p>
        <b>Плюсы</b>
      </p>
      <p>
        Заводской окрас кузова, хорошее состояние салона, юридически чистая, продажа от дилера,
        техника без серьезных недочетов
      </p>
      <br>
      <p>
        <b>Минусы</b>
      </p>

      <p>
        Эксплуатационные дефекты по кузову, отпотевание на стыке двигателя и коробки, ошибка по
        клапану системы охлаждения, требуется замена свечей накаливания
      </p>
      <br>

      <p>
        <b>Кузов</b>
      </p>
      <p>
        Передний бампер-сколы; крыша-царапины с коррозией; заднее левое крыло-скол, царапины на
        накладке колёсной арки; задний бампер-дефекты; крышка багажника-пузыри на хроме моддинга;
        задняя левая дверь-скол. Все элементы кузова в заводской краске, демонтажу и регулировке не
        подвергались, остекление и оптика оригинал, лобовое заменено, оригинал, с подогревом.
      </p>
      <br>
      <p>
        <b>Салон</b>
      </p>
      <p>
        На ковре присутствуют загрязнения, на сиденьях и органах управления присутствуют следы
        эксплуатации, износ соответствует пробегу. На торпедо присутствуют следы от клея,
        электрооборудование мультимедиа и климат исправны.
      </p>
      <br>
      <p>
        <b>Техника</b>
      </p>
      <p>
        Запуск двигателя нормальный, работа на холостых ровная, уровни рабочих жидкостей в норме,
        переключение режимов работы КПП в норме. Присутствуют активная ошибка p199e00 клапан
        контура охлаждающей жидкости ГБЦ, 000843 запорный блок центрального замка задней правой
        двери (проверена, функционирует без нареканий), так же присутствуют исторические ошибки по
        свечами накала в 2,3,6 цилиндров, пробег в блоках соответствует заявленному. По диагностике
        при приемке выявлена течь на стыке двигателя и АКПП.
      </p>
    </div>
    <img
      :src="'/images/reports/4.jpg'"
      alt="Porshe Cayenne"
      class="poster"
    >
  </div>
  <div class="btns-wrapper">
    <div class="report-container">
      <div class="row">
        <div class="col-12 col-md-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="https://disk.yandex.ru/d/_VNUqZ5mexwZpg"
            target="_blank"
          >
            Смотреть отчёт
          </q-btn>
        </div>
        <div class="col-12 col-md-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="/docs/reports/porshe-cayenne.pdf"
            target="_blank"
          >
            Пример отчёта
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Porshe Cayenne 2012'
})

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Отчеты',
    to: '/reports'
  },
  {
    label: 'Porshe Cayenne 2012',
    to: '/reports/porshe-cayenne'
  }
])

</script>

<style lang="scss" scoped>
.top_header__breadcrumbs {
    text-align: center;
    @include more-than-tablet {
      text-align: left;
      padding-left: 40px;
    }

    a {
      @include reset-link;
      color: white;
      font-weight: 500;
      line-height: 170%;
      margin-top: 1em;
      font-size: 14px;
      &:hover {
        color: $primary;
        text-decoration: underline;
      }
    }

    ul {
      @include reset-list;
      padding: 10px 16px;
      margin: 0 auto;
      width: 100%;

      li {
        display: inline;
      }

      li + li:before {
        padding: 8px;
        color: white;
        content: '/\00a0';
      }
    }
  }
.report-container {
  margin: 0 auto;
  padding: 40px 20px;
  @include more-than-mobile {
    width: 80%;
  }
  @include more-than-desktop {
    width: 70%;
  }
  .h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    padding: 20px 0 50px;
    text-align: center;
    @include more-than-mobile {
      font-size: 36px;
      line-height: 44px;
    }
  }
  .content {
    font-size: 18px;
  }
  .poster {
    width: 100%;
    margin-top: 40px;
    border-radius: 17px;
    width: 100%;
    max-height: 600px;
    object-fit: cover;
  }
}
.btns-wrapper {
  background-color: #000;
  .row {
    margin-bottom: -20px;
  }
  .q-btn {
    margin-bottom: 20px;
  }
}
</style>