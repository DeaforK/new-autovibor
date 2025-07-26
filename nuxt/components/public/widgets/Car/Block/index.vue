<template>
  <div class="car-container">
    <h2>Что входит в полную проверку автомобиля</h2>

    <p>Комплексная диагностика каждого транспорта</p>
    <div class="car-check-text">
      <p>
        Независимо от того, хотите вы купить авто, заказать подбор авто, получить консультацию или юридическое
        сопровождение,
        мы обеспечиваем комплексное ведение сделки — от первого обращения до регистрации в ГИБДД.
      </p>
      <p>
        Подбор авто с пробегом или нового автомобиля проводится по заданным клиентом критериям:
      </p>
      <ul>
        <li>техническое состояние</li>
        <li>стоимость</li>
        <li>условия эксплуатации</li>
        <li>марка, модель и комплектация</li>
      </ul>
      <p>
        После согласования покупки мы оформляем документы и сопровождаем клиента на следующих этапах:
        страхование, постановка на учёт и др.
      </p>
    </div>
    <div class="car-container__btn-wrapper">
      <div class="car-frame">
        <div class="top">
          <PublicSharedUiCarButton
            title="рулевое управление"
            num="01"
            tooltip="Наличие люфтов, течей, стуков в рулевом управлении.
             Уровень рабочей жидкости, состояние рулевой рейки и работоспособность усилителя руля"
          />

          <PublicSharedUiCarButton
            title="кузов"
            num="02"
            tooltip="Проверка кузова на предмет перекраса, ремонта, снятия-установки элементов"
          />

          <PublicSharedUiCarButton
            title="КПП"
            num="03"
            tooltip="Собственный алгоритм проверки АКПП. Проверка уровня жидкости и компьютерная диагностика"
          />

          <PublicSharedUiCarButton
            title="салон"
            num="04"
            tooltip="Особая технология проверки внутренней части салона на предмет изъянов и некачественной обивки"
          />
        </div>

        <div class="middle-block">
          <div class="left">
            <PublicSharedUiCarButton
              title="впуск"
              num="12"
              tooltip="Проверям работу всех электронных систем и механических узлов, контролируемых этими системами"
            />

            <PublicSharedUiCarButton
              title="выпуск"
              num="13"
              tooltip="Современные автомобили с нормами токсичности Евро 3 и выше,
               имеют дорогостоящие элементы в системе выхлопа, такие как нейтрализатор выхлопных газов, стоимость которого достигает 80 тыс руб"
            />

            <PublicSharedUiCarButton
              title="АКБ"
              num="14"
              tooltip="Проверка даты выпуска, напряжения, срока службы и работоспособности"
            />
          </div>

          <div class="right">
            <PublicSharedUiCarButton
              title="приборы"
              num="05"
              tooltip="Проверка правильной работы бортового компьютера и его показаний"
            />

            <PublicSharedUiCarButton
              title="турбина"
              num="06"
              tooltip="Проверяем состояние турбины: наличие люфта, посторонних шумов и утечек масла, а также её общую работоспособность"
            />

            <PublicSharedUiCarButton
              title="колеса"
              num="07"
              tooltip="Равномерность износа, дата производства, состояние и марка шин — важный момент при покупке автомобиля"
            />
          </div>
        </div>

        <div class="bottom">
          <PublicSharedUiCarButton
            title="тормозные системы "
            num="08"
            tooltip="Проверяем состояние тормозных механизмов, дисков, колодок, антиблокировочной, антипробуксовочной систем и антизаноса"
          />

          <PublicSharedUiCarButton
            title="амортизаторы"
            num="09"
            tooltip="Это один из самых важных элементов подвески.
             Они напрямую влияют на управляемость автомобиля, его устойчивость и плавность хода"
          />

          <PublicSharedUiCarButton
            title="двигатель"
            num="10"
            tooltip="Проверка состояния двигателя, замер компрессии"
          />

          <PublicSharedUiCarButton
            title="юридическая проверка"
            num="11"
            tooltip="Криминалистическая экспертиза автомобиля. Проверка в ГИБДД и Бюро Кредитных Историй"
          />
        </div>
      </div>
      <div class="car-btns">
        <PublicSharedUiCarButton
          title="рулевое управление"
          num="01"
          tooltip="Наличие люфтов, течей, стуков в рулевом управлении.
             Уровень рабочей жидкости, состояние рулевой рейки и работоспособность усилителя руля"
        />

        <PublicSharedUiCarButton
          title="кузов"
          num="02"
          tooltip="Проверка кузова на предмет перекраса, ремонта, снятия-установки элементов"
        />

        <PublicSharedUiCarButton
          title="КПП"
          num="03"
          tooltip="Собственный алгоритм проверки АКПП. Проверка уровня жидкости и компьютерная диагностика"
        />

        <PublicSharedUiCarButton
          title="салон"
          num="04"
          tooltip="Особая технология проверки внутренней части салона на предмет изъянов и некачественной обивки"
        />

        <PublicSharedUiCarButton
          title="приборы"
          num="05"
          tooltip="Проверка правильной работы бортового компьютера и его показаний"
        />

        <PublicSharedUiCarButton
          title="турбина"
          num="06"
          tooltip="Проверяем состояние турбины: наличие люфта, посторонних шумов и утечек масла, а также её общую работоспособность"
        />

        <PublicSharedUiCarButton
          title="колеса"
          num="07"
          tooltip="Равномерность износа, дата производства, состояние и марка шин — важный момент при покупке автомобиля"
        />

        <PublicSharedUiCarButton
          title="тормозные системы "
          num="08"
          tooltip="Проверяем состояние тормозных механизмов, дисков, колодок, антиблокировочной, антипробуксовочной систем и антизаноса"
        />

        <PublicSharedUiCarButton
          title="амортизаторы"
          num="09"
          tooltip="Это один из самых важных элементов подвески.
             Они напрямую влияют на управляемость автомобиля, его устойчивость и плавность хода"
        />

        <PublicSharedUiCarButton
          title="двигатель"
          num="10"
          tooltip="Проверка состояния двигателя, замер компрессии"
        />

        <PublicSharedUiCarButton
          title="юридическая проверка"
          num="11"
          tooltip="Криминалистическая экспертиза автомобиля. Проверка в ГИБДД и Бюро Кредитных Историй"
        />

        <PublicSharedUiCarButton
          title="впуск"
          num="12"
          tooltip="Проверям работу всех электронных систем и механических узлов, контролируемых этими системами"
        />

        <PublicSharedUiCarButton
          title="выпуск"
          num="13"
          tooltip="Современные автомобили с нормами токсичности Евро 3 и выше,
               имеют дорогостоящие элементы в системе выхлопа, такие как нейтрализатор выхлопных газов, стоимость которого достигает 80 тыс руб"
        />

        <PublicSharedUiCarButton
          title="АКБ"
          num="14"
          tooltip="Проверка даты выпуска, напряжения, срока службы и работоспособности"
        />
      </div>
      <div class="car-bottom-btns">
        <a>
          <PublicSharedUiPrimaryButton @click="navigateTo('/services/car-diagnose')">
            Нашли авто самостоятельно?
          </PublicSharedUiPrimaryButton>
        </a>

        <a
          href="https://www.youtube.com/channel/UCmrb3M_KF-1WLvzdgXbohbQ"
          target="_blank"
        >
          <PublicSharedUiPrimaryButton> Как мы работаем? </PublicSharedUiPrimaryButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.car-container {
  display: flex;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 50px;
  text-align: left;
  justify-content: center;
  gap: 16px;
  flex-direction: column;
  padding: 0 30px;
  padding-left: 41px;

  @include more-than-laptop {
    width: 100%;
  }

  @include more-than-desktop-big {
    width: 95%;
  }

  h2 {
    font-weight: bold;
    text-align: center;
    color: black;

    @include more-than-small-mobile {
      font-size: 28px;
      line-height: 120%;
      padding: 0 !important;
      margin: 0 !important;

    }

    @include more-than-laptop {
      font-size: 36px;
      line-height: 44px;
    }
  }

  p {
    color: black;
    font-size: 20px;
    line-height: 170%;
    text-align: center;
  }

  &__btn-wrapper {
    .car-frame {
      width: auto;
      margin: 0 auto;

      @include more-than-small-mobile {
        display: none;
      }

      @include more-than-laptop {
        display: block;
      }

      @include more-than-desktop {
        max-width: 100%;
      }

      @include more-than-desktop-big {
        max-width: 97%;
      }

      .top {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: wrap;

        @include more-than-tablet {
          flex-wrap: nowrap;
        }

        div:nth-child(2),
        div:nth-child(3) {
          margin-bottom: 35px;
        }
      }

      .left {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        width: fit-content;
        justify-content: center;
        flex-wrap: wrap;

        @include more-than-tablet {
          flex-wrap: nowrap;
          padding-top: 20px;
          padding-bottom: 20px;
          gap: 25px;
        }

        @include more-than-desktop {
          padding: 0px;
          gap: 35px;
        }

        div:nth-child(2) {
          margin-right: 35px;
        }
      }

      .bottom {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;

        @include more-than-tablet {
          flex-wrap: nowrap;
        }

        div:nth-child(2),
        div:nth-child(3) {
          margin-top: 35px;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: fit-content;
        flex-wrap: wrap;

        @include more-than-tablet {
          flex-wrap: nowrap;
          padding-top: 20px;
          padding-bottom: 20px;
          gap: 25px;
        }

        @include more-than-desktop {
          padding: 0px;
          gap: 35px;
        }

        div:nth-child(2) {
          margin-left: 35px;
        }
      }

    }

    .middle-block {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;

      @include more-than-tablet {
        background: url('/images/car.jpeg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 40%;
        min-height: 250px;
        flex-wrap: nowrap;
        justify-content: space-between;
      }

      @include more-than-desktop {
        min-height: 300px;
      }

      @include more-than-desktop-big {
        min-height: 320px;
      }
    }
  }

  .car-check-text {
    max-width: 850px;
    margin: 0 auto;
    padding: 0 15px;
    font-size: 16px;
    line-height: 160%;
    color: #111;
    text-align: left;

    @include more-than-tablet {
      font-size: 17px;
      line-height: 165%;
    }

    @include more-than-laptop {
      font-size: 18px;
      line-height: 170%;
    }

    ul {
      padding-left: 20px;
      margin: 10px 0;
      list-style-type: disc;

      li {
        margin-bottom: 6px;
      }
    }

    p {
      margin-bottom: 14px;
    }
  }

}

.car-btns {
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @include more-than-small-mobile {
    grid-template-columns: repeat(1, 1fr);
  }

  @include more-than-mobile {
    grid-template-columns: repeat(2, 1fr);
  }

  @include more-than-tablet {
    grid-template-columns: repeat(3, 1fr);
  }

  @include more-than-laptop {
    display: none;
  }
}

.car-bottom-btns {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;

  @include more-than-tablet {
    flex-wrap: nowrap;
    justify-content: space-around;
  }
}
</style>
