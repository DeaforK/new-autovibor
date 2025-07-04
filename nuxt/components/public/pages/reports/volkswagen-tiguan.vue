<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Volkswagen Tiguan"
  />
  <div class="btns-wrapper">
    <div class="report-container">
      <div class="row">
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="https://disk.yandex.ru/d/L2VBueYWG7PDhQ"
            target="_blank"
          >
            Смотреть отчёт
          </q-btn>
        </div>
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="/docs/reports/volkswagen-tiguan.pdf"
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
      Volkswagen Tiguan 2013 г.в.
    </div>
    <div class="content">
      <p>
        <b>2 Владелец</b>
      </p>
      <p>
        <b>Пробег: 52 153 км</b>
      </p>
      <br>
      <p>
        <b>Плюсы:</b>
      </p>
      <p>
        Хорошее внешнее состояние
      </p>
      <p>
        Отличное состояние салона
      </p>
      <p>
        Пробег
      </p>
      <p>
        Без нареканий по тех части
      </p>
      <p>
        Полная история обслуживания
      </p>
      <p>
        Остекление оригинал
      </p>
      <br>
      <p>
        <b>Минусы:</b>
      </p>
      <p>
        Присутствуют эксплуатационные царипинки по кузову
      </p>
      <p>
        Царапины на бамперах
      </p>
      <p>
        Окрас заднего левого крыла
      </p>
      <br>
      <p>
        <b>Нейтральные моменты:</b>
      </p>
      <p>
        Нужно провести ТО по замене масла в ДВС
      </p>
      <p>
        Низкий уровень антифриза
      </p>
    </div>
    <img
      :src="'/images/reports/3.jpg'"
      alt="Volkswagen Tiguan"
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
            href="https://disk.yandex.ru/d/L2VBueYWG7PDhQ"
            target="_blank"
          >
            Смотреть отчёт
          </q-btn>
        </div>
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="/docs/reports/volkswagen-tiguan.pdf"
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
  title: 'Volkswagen Tiguan'
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
    label: 'Volkswagen Tiguan',
    to: '/reports/volkswagen-tiguan'
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