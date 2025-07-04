<template>
  <div
    class="modal_overlay"
    @click="emit('close-modal')"
  >
    <div
      class="modal_overlay__modal"
    >
      <div
        class="modal_overlay__modal_image"
        @click.stop
      >
        <img :src="'/images/bg-info2.png'">
      </div>

      <div
        class="modal_overlay__modal__text"
        @click.stop
      >
        <b class="modal_overlay__modal__text__title">
          Услуга: Выездная диагностика автомобиля
        </b>
        <p class="modal_overlay__modal__text__paragraph">
          Стоимость услуги: <b>от 4 500 ₽</b>
        </p>
        <b class="modal_overlay__modal__text__title">
          Все автомобили проходят детальную проверку.
        </b>
        <ul class="modal_overlay__modal__text__list">
          <li>
            Проверка ПТС, СТС, соответствие документам VIN номера, номера двигателя, номера шасси (рамы) при наличии,
            проверка права продажи собственником. Проверка юридической чистоты на наличие или отсутствие залога,
            запрета на регистрационные действия;
          </li>
          <li>
            Проверка кузова: выявление сколов, царапин, ДТП, крашеных элементов с частичным разбором салона (при согласии
            продавца). Также проверяются следы механического воздействия на болты крепления кузовных элементов. При
            возможности проверяется наличие подушек безопасности, дата производства оптики, остекления автомобиля;
          </li>
        </ul>

        <ul class="modal_overlay__modal__text__list">
          <li>
            Проверка салона, органов управления, помощников, ассистентов (к примеру: если есть подогрев сидений,
            проекция на лобовое стекло - все проверяется);
          </li>
          <li>
            Компьютерная диагностика: считывается информация со всех электронных блоков управления, при технической
            возможности подтверждается или опровергается заявленный пробег автомобиля (если не выполнена по причине
            блокировки (выполняется при физической возможности и разрешения продавца);
          </li>
          <li>
            С согласия продавца, а также при наличии условий выполняется тест-драйв, проверка подвески, рулевого
            управления, двигателя, коробки передач.
          </li>
          <li>
            После тест-драйва, при необходимости, повторно выполняется компьютерная диагностика с целью дополнительного
            контроля сброса ошибок продавцом;
          </li>
          <li>
            Проверка автомобиля на подъемнике (Оплачивается отдельно по тарифу сервиса). Диагностика на подъемнике
            проводится только с разрешения собственника (дилера), а также при его наличии и физической возможности.
            Частичный или полный разбор металлических и пластиковых защит днища для осмотра агрегатов и узлов подвески
            оплачивается клиентом отдельно по тарифу сервиса.
          </li>
        </ul>

        <p class="modal_overlay__modal__text__paragraph">
          В стоимость выездной диагностики не входит замер компрессии, эндоскопия цилиндропоршневой группы двигателя,
          замер давления масла в двигателе. Данные операции выполняются в условиях сервиса. По желанию клиента или
          рекомендации эксперта (необходимость доп. услуг обговаривается дополнительно).
        </p>
        <b class="modal_overlay__modal__text__title">По результатам проверки автомобиля клиент получает отчет:</b>

        <ul class="modal_overlay__modal__text__list">
          <li>фото и видео материалы</li>
          <li>детальный отчет с результатами диагностики автомобиля;</li>
          <li>
            комментарии специалиста по автомобилю, а также рекомендации по обслуживанию и вложению денежных средств
            на момент проверки автомобиля и на перспективу (к примеру: на данный момент необходимо поменять передние
            и задние тормозные колодки, на перспективу заменить комплект зимней (летней) резины), за счет данных
            рекомендаций можно аргументированно поторговаться клиенту или эксперту с продавцом (с торга комиссию не берем).
          </li>
        </ul>
      </div>

      <div
        class="modal_overlay__close"
        @click="$emit('close-modal')"
      >
        <img
          class="modal_overlay__close__close_img"
          :src="'/images/close-icon.svg'"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close-modal'])
</script>

<style lang="scss" scoped>

.modal_overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 10000;

  &__modal {
    text-align: center;
    color: white;
    background: url('/images/modal_bg.jpg') center center;
    background-size: cover;
    display: flex;
    gap: 40px;
    overflow-y: auto;
    // @include reset-scrollbar;
    border-radius: 0;

    position: relative;
    width: 100%;
    height: 100%;

    @include more-than-small-mobile {
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    @include more-than-mobile {
      flex-direction: row;
      align-items: start;
      padding: 80px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
    }

    h6 {
      font-size: 24px;
      margin-top: 30px;
    }

    &_image {
      display: flex;

      @include more-than-small-mobile {
        width: 100%;
        justify-content: center;
      }

      @include more-than-mobile {
        width: 40%;
        justify-content: end;
      }
      img {
        object-fit: cover;
        @include more-than-small-mobile {
          max-width: 100%;
          min-height: 200px;
        }

        @include more-than-mobile {
          max-width: 300px;
          min-height: 300px;
        }

        @include more-than-tablet {
          max-width: 400px;
          min-height: 400px;
        }

        @include more-than-laptop {
          max-width: 450px;
          min-height: 450px;
        }
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 13px;
      text-align: left;
      padding: 20px;
      padding-top: 0;
      margin-bottom: 20px;

      @include more-than-small-mobile {
        width: 100%;
        padding-right: 0px;
      }

      @include more-than-mobile {
        width: 60%;
      }

      @include more-than-tablet {
        padding-right: 50px;
      }
      @include more-than-laptop {
        padding-right: 70px;
      }

      @include more-than-desktop {
        padding-right: 100px;
      }

      @include more-than-desktop-big {
        padding-right: 150px;
      }


      &__title {
        font-size: 22px;
        line-height: 26px;
        // margin-top: 30px;
      }

      &__list {
        @include reset-list;
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style-type: disc;
      }

      &__paragraph {
        font-size: 16px;
        line-height: 20px;
        margin-top: 10px;
      }
    }
  }

  &__close {
    cursor: pointer;
    @include more-than-small-mobile {
      position: fixed;
      top: 25px;
      right: 10px;
      height: 43px;
      width: 43px;
      z-index: 9999;
    }

    &__close_img {
      width: 35px;
    }
  }
}
</style>
