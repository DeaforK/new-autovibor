<template>
  <PublicWidgetsTopHeroSection :video="false">
    <template #title>
      Узнайте реальную историю любого автомобиля
    </template>
    <template #body>
      По статистике каждый второй автомобиль - проблемный. Не дайте себя обмануть! Сделайте юридическую проверку авто.
    </template>
  </PublicWidgetsTopHeroSection>
  <div class="report-container">
    <h1 class="report-container__header">
      Вся история автомобиля <br>в одном отчёте
    </h1>
    <h2 class="report-container__sub-header">
      Полная юридическая проверка авто
    </h2>
    <div class="report-container__bg">
      <img
        :src="'/images/report-down.jpg'"
        class="report-container__bg__bottom"
      >
      <div class="report-container__bg__block">
        <div class="report-container__bg__block__image-container">
          <img :src="'/images/report-car-1.jpg'">
          <img :src="'/images/report-car-2.jpg'">
          <img :src="'/images/report-car-3.jpg'">
        </div>
        <div class="report-container__bg__block__item">
          <div class="report-container__bg__block__item__heading">
            Периоды владения транспортным средством:
          </div>
          <div class="report-container__bg__block__item__desc">
            <div class="report-container__bg__block__item__desc__sub-title">
              Количество владельцев:
            </div>
            <div class="report-container__bg__block__item__desc__count">
              1
            </div>
          </div>
          <div class="report-container__bg__block__item__info">
            <p class="report-container__bg__block__item__info__text">
              C 11.10.2012 по 112.11.2016, 4 года 32 дня, Физическое лицо, прекращение регистрации
            </p>
            <div class="report-container__bg__block__item__info__notice">
              1 владелец, минимальный пробег, не битый, не крашенный. Владелец действительно один
            </div>
          </div>
        </div>
        <div class="report-container__bg__block__item">
          <div class="report-container__bg__block__item__heading">
            Периоды владения транспортным средством:
          </div>
          <div class="report-container__bg__block__item__desc">
            <div class="report-container__bg__block__item__desc__sub-title">
              Количество происшествий:
            </div>
            <div class="report-container__bg__block__item__desc__count">
              1
            </div>
          </div>
          <div class="report-container__bg__block__item__info">
            <div class="report-container__bg__block__item__info__row">
              <div class="report-container__bg__block__item__info__row__left">
                <table class="report-container__bg__block__item__info__row__left__table">
                  <tbody>
                    <tr>
                      <td>№ происшествия:</td>
                      <td>570030134</td>
                    </tr>
                    <tr>
                      <td>Тип происшествия:</td>
                      <td>столкновение</td>
                    </tr>
                    <tr>
                      <td>Дата:</td>
                      <td>13.09.2016</td>
                    </tr>
                    <tr>
                      <td>Состояние ТС:</td>
                      <td>повреждено</td>
                    </tr>
                    <tr>
                      <td>Регион:</td>
                      <td>пермский край</td>
                    </tr>
                    <tr>
                      <td>Марка ТС:</td>
                      <td>hyundai</td>
                    </tr>
                    <tr>
                      <td>Модель ТС:</td>
                      <td>solaris</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="report-container__bg__block__item__info__row__right">
                <div class="report-container__bg__block__item__info__row__right__image">
                  <img :src="'/images/dtp.jpg'">
                </div>
                <div class="report-container__bg__block__item__info__row__right__notice">
                  А говорили, что не битый . . .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="report-container__bg__block__item">
          <div class="report-container__bg__block__item__heading">
            Найденные объявления:
          </div>
          <div class="report-container__bg__block__item__desc">
            <div class="report-container__bg__block__item__desc__sub-title">
              Количество владельцев:
            </div>
            <div class="report-container__bg__block__item__desc__count">
              1
            </div>
          </div>
          <div class="report-container__bg__block__item__info">
            <p class="report-container__bg__block__item__info__text">
              28.10.2016, auto.ru, Hyundai Solaris, (2012), Пермь, 105 000 км, 285 000 руб.,
              79504686093, Variant
            </p>
            <div class="report-container__bg__block__item__info__notice">
              Найдено объявление о продаже этого авто, в объявлении был указан пробег 105 000 км
            </div>
          </div>
        </div>
        <div class="report-container__bg__block__item">
          <div class="report-container__bg__block__item__heading">
            Реестр залогов:
          </div>
          <div class="report-container__bg__block__item__desc">
            <div class="report-container__bg__block__item__desc__sub-title">
              Количество происшествий:
            </div>
            <div class="report-container__bg__block__item__desc__count">
              1
            </div>
          </div>
          <div class="report-container__bg__block__item__info">
            <div class="report-container__bg__block__item__info__row">
              <div class="report-container__bg__block__item__info__row__left">
                <table
                  class="report-container__bg__block__item__info__row__left__table"
                  style="width: 100%; margin-bottom: 20px"
                >
                  <tbody>
                    <tr>
                      <td>Дата регистрации:</td>
                      <td>09.01.2015</td>
                    </tr>
                    <tr>
                      <td>Регистрационный номер:</td>
                      <td>2015-000-886362-301</td>
                    </tr>
                    <tr>
                      <td>Имущество:</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>Залогодатель:</td>
                      <td>... / 12.12.1984</td>
                    </tr>
                    <tr>
                      <td>Залогодержатель:</td>
                      <td>свердловский областной фонд поддержки предпринимательства</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="report-container__bg__block__item__info__notice">
              Автомобиль находится в залоге
            </div>
          </div>
        </div>
        <div class="report-container__bg__block__item">
          <div class="report-container__bg__block__item__heading">
            Использование автомобиля в качестве такси:
          </div>
          <div class="report-container__bg__block__item__desc">
            <div class="report-container__bg__block__item__desc__sub-title">
              Найдено разрешений:
            </div>
            <div class="report-container__bg__block__item__desc__count">
              1
            </div>
          </div>
          <div class="report-container__bg__block__item__info">
            <div class="report-container__bg__block__item__info__row">
              <div
                class="report-container__bg__block__item__info__row__left"
                style="width: 100%; margin-bottom: 20px"
              >
                <table
                  class="report-container__bg__block__item__info__row__left__table"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td>Дата выдачи:</td>
                      <td>21.10.2013</td>
                    </tr>
                    <tr>
                      <td>Регистрационный номер разрешения:</td>
                      <td>15125</td>
                    </tr>
                    <tr>
                      <td>Перевозчик:</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>Марка автомобиля:</td>
                      <td>hyundai</td>
                    </tr>
                    <tr>
                      <td>Модель автомобиля:</td>
                      <td>solaris</td>
                    </tr>
                    <tr>
                      <td>Государсственный регистрационный знак:</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>Год выпуска автомобиля:</td>
                      <td>2012</td>
                    </tr>
                    <tr>
                      <td>Серия и номер бланка разрешения:</td>
                      <td>0021665</td>
                    </tr>
                    <tr>
                      <td>Срок действия разрешения:</td>
                      <td>21.10.2018</td>
                    </tr>
                    <tr>
                      <td>Город регистрации:</td>
                      <td>Екатеринбург</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="report-container__bg__block__photo">
          <div class="report-container__bg__block__photo-image">
            <img :src="'/images/report-car-3.jpg'">
          </div>
          <div class="report-container__bg__block__photo__notice">
            Фото со страховой компании
          </div>
        </div>
      </div>
    </div>
  </div>
  <PublicWidgetsReportRegularReports
    title="Отчеты удобным для вас способом!"
    description="Вы будете получать регулярные, детальные отчеты с указанием всех
     плюсов и минусов по авто. Вы получите полную проверку
      юридической чистоты авто. Помимо этого, каждый отчет сопровождается фотографиями,видеозаписью и
     текстовым описанием проведенной проверки. Все это для того чтобы Вы могли наглядно видеть работу в продвижении к вашему новому автомобилю."
  />
  <PublicWidgetsInsuranceBenefitsList
    title="Сформируем вам подробный отчет<br>по любому автомобилю"
    :benefits-data="benefitsData"
    background-color="transparent"
    iconwidth="80px"
    border-radius="20px"
    style="margin-top: 30px;"
  />
  <PublicSharedUiOrangeWrapper>
    <PublicWidgetsCommonOrangeForm />
  </PublicSharedUiOrangeWrapper>
  <PublicSharedUiFlampContiner />
  <PublicWidgetsAboutRating />
</template>

<script setup lang="ts">
const benefitsData = [
  {
    title: 'ПРОБЕГ',
    description: 'Информация от таксопарков Екатеринбурга об использовании автомобиля в такси',
    img: '/images/counter.png'
  },
  {
    title: 'ВЛАДЕЛЬЦЫ',
    description: 'Реально количество владельцев, даже если ПТС - дубликат',
    img: '/images/safty.png'
  },
  {
    title: 'ДТП',
    description: 'Данные об участии в ДТП, схемы и типы столкновений',
    img: '/images/accedint.png'
  },
  {
    title: 'БАЗЫ ДАННЫХ',
    description: 'Фото автомобиля с камер ГИБДД, а так же других объявлений',
    img: '/images/year.png'
  },
  {
    title: 'СКИДКА',
    description:
      'Все тайное станет явным, поэтому Вы гарантированно получите скидку на автомобиль.',
    img: '/images/percent.png'
  },
  {
    title: 'ФОТО',
    description: 'Фото автомобиля с камер ГИБДД, а так же других объявлений',
    img: '/images/police.png'
  }
]
useHead({
  title: 'Проверка автомобиля'
})
</script>

<style lang="scss" scoped>


.report-container {
  margin: 80px 10px;

  &__header {
    font-weight: bold;
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 20px;
    text-align: center;

    @include more-than-tablet {
      font-size: 36px;
      line-height: 44px;
    }
  }

  &__sub-header {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.1;
    margin-bottom: 10px;
    text-align: center;

    @include more-than-tablet {
      font-size: 24px;
    }
  }

  &__bg {
    background: transparent;
    position: relative;

    @include more-than-tablet {
      background: url('/images/report-up.jpg') top center no-repeat;
    }

    &__bottom {
      display: none;

      @include more-than-tablet {
        display: block;
        position: absolute;
        bottom: -5%;
        left: 50%;
        transform: translateX(-50%);
        z-index: -999;
      }
    }

    &__block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin: 40px 0;

      @include more-than-tablet {
        width: 627px;
        margin: 40px auto;
        padding-bottom: 200px;
      }

      &__image-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding: 30px 0;
        justify-content: center;
        flex-wrap: wrap;
        align-self: center;

        @include more-than-tablet {
          flex-wrap: nowrap;
          margin-top: 200px;
        }
      }

      &__item {
        width: 100%;

        &__heading {
          margin-top: 35px;
          margin-bottom: 20px;
          padding-bottom: 8px;
          font-size: 1.375em;
          font-weight: 700;
          border-bottom: 2px solid #e5e5e5;
          color: #3c4858;
          text-align: left;
        }

        &__desc {
          margin-bottom: 20px;

          &__sub-title {
            margin-right: 15px;
            display: inline-block;
            font-weight: 700;
            vertical-align: middle;
            color: #3c4858;
          }

          &__count {
            vertical-align: middle;
            display: inline-block;
            font-weight: 700;
            width: 40px;
            line-height: 30px;
            text-align: center;
            background-color: #feeceb;
          }
        }

        &__info {
          &__text {
            font-size: 0.875em;
            color: #737373;
          }

          &__notice {
            font-family: BadScript;
            font-weight: 600;
            color: red;
            font-size: 1.125em;
          }

          &__row {
            display: flex;
            flex-direction: column;
            gap: 20px;
            @include more-than-mobile {
              flex-direction: row;
            }

            &__left {
              color: #737373;

              &__table {
                width: 355px;
                font-size: 0.875em;
                border-collapse: collapse;

                tbody {
                  display: table-row-group;
                  vertical-align: middle;
                  border-color: inherit;

                  tr {
                    color: #737373;

                    td {
                      padding: 5px 15px;
                    }
                  }

                  tr:nth-child(odd) {
                    background-color: #f5f5f5;
                  }
                }
              }
            }

            &__right {
              text-align: center;

              &__image {
                margin-top: -5px;
                margin-bottom: 40px;
              }

              &__notice {
                font-family: BadScript;
                font-weight: 500;
                color: red;
                font-size: 1.125em;
              }
            }
          }
        }
      }

      &__photo {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        align-self: center;
        @include more-than-tablet {
          flex-direction: row;
          gap: 80px;
        }

        &__notice {
          font-family: BadScript;
          font-weight: 600;
          color: red;
          font-size: 1.125em;
        }
      }
    }
  }
}
</style>
