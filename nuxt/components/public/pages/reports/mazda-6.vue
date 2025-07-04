<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Mazda 6 2.5 АТ"
  />
  <div class="btns-wrapper">
    <div class="report-container">
      <div class="row">
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="https://disk.yandex.ru/d/zXEdRDA2hievKA"
            target="_blank"
          >
            Смотреть отчёт
          </q-btn>
        </div>
        <div class="col-12 col-sm-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="/docs/reports/mazda-6.pdf"
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
      Mazda 6 2.5 АТ
    </div>
    <div class="content">
      <div>
        <b>Год: 2015</b>
      </div>
      <div>
        <b>Пробег: 64.747км</b>
      </div>
      <br>
      <div>
        Остекление оригинал
      </div>
      <div>
        Тормозные диски в хорошем состоянии
      </div>
      <div>
        Тормозные колодки требуют замены
      </div>
      <div>
        Покрышки летние 2015 года (родные)
      </div>
      <div>
        Колёсные диски без повреждений
      </div>
      <br>
      <div>
        <b>Кузов:</b>
      </div>
      <div>
        <ul style="padding-left: 20px;">
          <li>
            Капот: в заводском окрасе
          </li>
          <li>
            Крыло переднее левое: косметический окрас
          </li>
          <li>
            Крыло переднее правое: в заводском окрасе
          </li>
          <li>
            Дверь передняя левая: в заводском окрасе
          </li>
          <li>
            Дверь передняя правая: в заводском окрасе
          </li>
          <li>
            Дверь задняя левая: в заводском окрасе
          </li>
          <li>
            Дверь задняя правая: в заводском окрасе
          </li>
          <li>
            Крыло заднее левое: в заводском окрасе
          </li>
          <li>
            Крыло заднее правое: в заводском окрасе
          </li>
          <li>
            Крышка багажника: в заводском окрасе
          </li>
          <li>
            Крыша: в заводском окрасе
          </li>
          <li>
            Порог левый: в заводском окрасе
          </li>
          <li>
            Порог правый: косметический окрас
          </li>
        </ul>
      </div>
      <br>
      <div>
        <b>Документы:</b>
      </div>
      <div>
        ПТС ОРИГИНАЛ, мест свободных нет.
      </div>
      <div>
        2 собственника
      </div>
      <br>
      <div>
        2 ключа, сигнализация с АЗ «Pandora», блокировка АКПП
      </div>
      <div>
        Все вин коды и номер двс соответствуют
      </div>
      <br>
      <div>
        Оптика оригинал, родная!
      </div>
      <div>
        На передней левой фаре виден ремонт корпуса (внутри)
      </div>
      <br>
      <div>
        <b>Салон:</b>
      </div>
      <div>
        В хорошем состоянии, на центральном дисплее есть две трещинки на пластике внутри, сенсор работает. (См.фото)
      </div>
      <div>
        Сиденья в хорошем состоянии, рекомендую сделать лёгкую чистку.
      </div>
      <div>
        Все элементы управления работают исправно
      </div>
      <div>
        По технической части при тест драйве нареканий нет
      </div>
      <div>
        На авто есть дополнительная гарантия «D2» (ДВС, АКПП)  на год.
      </div>
    </div>
    <img
      :src="'/images/reports/1.jpg'"
      alt="Mazda 6 2.5 АТ"
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
            href="https://disk.yandex.ru/d/zXEdRDA2hievKA"
            target="_blank"
          >
            Смотреть отчёт
          </q-btn>
        </div>
        <div class="col-12 col-md-6 text-center">
          <q-btn
            color="white"
            text-color="black"
            href="/docs/reports/mazda-6.pdf"
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
  title: 'Mazda 6 2.5 АТ'
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
    label: 'Mazda 6 2.5 АТ',
    to: '/reports/mazda-6'
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