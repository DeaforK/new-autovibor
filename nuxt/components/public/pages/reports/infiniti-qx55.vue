<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Infiniti QX55"
  />
  <div class="btns-wrapper">
    <div class="report-container">
      <div class="row">
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="https://disk.yandex.ru/d/m326oQV8-EsMUg"
            target="_blank"
          >
            Смотреть отчёт
          </q-btn>
        </div>
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="/docs/reports/infiniti-qx55.pdf"
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
      Infiniti QX55
    </div>
    <div class="content">
      <p>
        <b>Пробег: 60 750 км</b>
      </p>
      <br>
      <p>
        <b>Плюсы:</b>
      </p>
      <p>
        Заводской окрас, один собственник, элементы кузова в защитной пленке, хорошее состояние
        салона, техника в норме.
      </p>
      <br>
      <p>
        <b>Минусы:</b>
      </p>
      <p>
        Эксплуатационные дефекты по кузову, выработка на тормозных дисках.
      </p>
      <br>
      <p>
        <b>Кузов</b>
      </p>
      <p>
        Корпус левого зеркала-стойкие загрязнения, похожие на клей; крышка багажника-царапина;
        задний бампер, царапина, притертость на чёрном пластике; передний бампер-царапина на
        пленке; лобовое стекло-мелкие точки от попадания камней. На переднем правом и заднем левом
        колёсных дисках притертости на ободе; все элементы кузова в заводской краске, демонтажу и
        регулировке не подвергались, капот, передний бампер, стойки лобового стекла, участок крыши
        над лобовым стеклом покрыты защитной плёнкой. Остекление и оптика оригинал.
      </p>
      <br>
      <p>
        <b>Салон</b>
      </p>
      <p>
        На ковре присутствуют загрязнения, на сиденьях и органах управления присутствуют следы
        эксплуатации, износ соответствует пробегу, электрооборудование мультимедиа и климат
        исправны.
      </p>
      <br>
      <p>
        <b>Техника</b>
      </p>
      <p>
        Запуск двигателя затруднен, низкий заряд аккумулятора, работа на холостых ровная, уровни
        рабочих жидкостей в норме, последнее ТО пройдено 02.10.23 на пробеге 60041км, при
        переключении режимов КПП присутствуют небольшие толчки в пределах нормы, остаток
        тормозных колодок на передней оси около 30 процентов, на задней оси около 50 процентов, на
        тормозных дисках присутствует выработка, состояние рабочее. Рисунок протектора шин на задней
        и передней осях различаются. Активные ошибки в ЭБУ отсутствуют, исторические связаны с
        разрядом аккумулятора, показания пробега не превышают заявленный.
      </p>
    </div>
    <img
      :src="'/images/reports/5.jpg'"
      alt="Hyundai i30"
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
            href="https://disk.yandex.ru/d/m326oQV8-EsMUg"
            target="_blank"
          >
            Смотреть отчёт
          </q-btn>
        </div>
        <div class="col-12 col-md-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="/docs/reports/infiniti-qx55.pdf"
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
  title: 'Infiniti QX55'
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
    label: 'Infiniti QX55',
    to: '/reports/infiniti-qx55'
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