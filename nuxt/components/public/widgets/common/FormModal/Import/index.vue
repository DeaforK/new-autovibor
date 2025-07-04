<template>
  <q-dialog
    v-model="showModal"
    class="modal_overlay"
    outline
    maximized
  >
    <div
      class="modal_overlay__modal"
      style="max-width: 700px; min-width: 30vw;"
    >
      <h6>Работаем напрямую, без посредников.</h6>

      <div class="modal_overlay__modal__text">
        <p class="modal_overlay__modal__text__paragraph">
          У нас открыт офис в Южной Корее – Di AUTOTRADING
        </p>
        <p class="modal_overlay__modal__text__paragraph">
          Адрес главного офиса: 49-34 Hang-dong 7(chil)-ga, Jung-gu, Incheon, Republic of Korea
        </p>

        <p class="modal_overlay__modal__text__paragraph">
          Машины проверяет грамотные  специалистоы по автоподбору Предоставляя качественные
          и достоверные осмотры, а так же дальнейшее сопровождение на каждом этапе
        </p>

        <p class="modal_overlay__modal__text__paragraph">
          Гарантируем качественный подбор автомобиля, оформление документов и доставку до Вашего города с технической
          и юридической гарантией.
        </p>

        <div class="modal_overlay__modal__text__label">
          *Заказывая автомобиль , вы получаете ПОЛНЫЙ СЕРВИС ЗАКАЗА АВТО ИЗ-ЗА РУБЕЖА
        </div>

        <ul class="modal_overlay__modal__text__list">
          <li
            v-for="(item, idx) in dataList"
            :key="idx"
            v-text="item"
          />
        </ul>
      </div>

      <div
        class="modal_overlay__close"
        flat
      >
        <q-btn
          v-close-popup
          icon="close"
          flat
          round
          dense
          size="25px"
        />
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
const showModal = defineModel<Boolean>('showModal')
const dataList = [
  'Гарантию юридической чистоты', 'Гарантию на достоверность результатов диагностики', 'Техническую гарантию на основные узлы и агрегаты',
  'Гарантию прозрачности сделки', 'Фото и видео материалы проверки автомобиля', 'Полное сопровождение на всех этапах сделки',
  'Полный комплект документов на автомобиль', 'Страхование автомобиля во время его доставки', 'Рекомендации специалиста по обслуживанию автомобиля'
]
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
  align-items: center;
  background-color: #000000da;
  z-index: 10000;

  &__modal {
    text-align: center;
    color: white;
    background: url('/images/modal_bg.jpg') center center;
    background-size: cover;
    height: 530px;
    width: 500px;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 30px;
    position: relative;
    overflow: auto;

    @include more-than-small-mobile {
      width: 100%;
      height: 100%;
      padding: 30px 18px;
      border-radius: 0px;
    }

    @include more-than-mobile {
      height: auto;
      width: 650px;
      padding: 30px;
      border-radius: 20px;
    }

    @include more-than-tablet {
      width: 960px;
    }

    &__text {
      gap: 13px;
      text-align: left;
      padding: 20px;
      padding-top: 0;
      margin-bottom: 20px;


      &__title {
        font-size: 22px;
        line-height: 26px;
        margin-top: 30px;
      }

      &__list {
        // @include reset-list;
        list-style-type: disc !important;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 30px;
        list-style-type: none;
      }

      &__paragraph {
        font-size: 16px;
        line-height: 20px;
        margin-top: 10px;
      }

      &__label {
        font-size: 12px;
        line-height: 16px;
        margin-top: 10px;
      }
    }
  }

  &__close {
    position: fixed;
    z-index: 9999;
    height: 43px;
    width: 43px;
    @include more-than-small-mobile {
      right: 20px;
      top: 5px;
    }

    @include more-than-mobile {
      right: 25px;
      top: 5px;
    }
  }
}

.button__container {
  @include reset-button;
  font-weight: 700;
  font-size: 16px;
  border-radius: 20px;
  background-color: #DA582D;

  @include more-than-small-mobile {
    padding: 10px;
  }

  @include more-than-mobile {
    padding: 20px 30px;
  }

  @include more-than-tablet {
    padding: 20px 50px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
