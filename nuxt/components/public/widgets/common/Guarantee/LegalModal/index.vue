<template>
  <q-dialog
    v-model="showModal"
    class="modal_overlay"
    outline
    maximized
  >
    <q-card
      class="modal_overlay__modal"
      style="max-width: 700px; min-width: 80vw;"
      @click.stop
    >
      <q-scroll-area style="height: 100%; width: 100%; padding-left: 20px">
        <h6 class="modal_overlay__title">
          Гарантия юридической чистоты автомобиля
        </h6>
        <p style="font-size: 24px; margin-top: 15px;">
          <b>Криминалистическая проверка:</b>
        </p>
        <ul class="modal_overlay__modal__list">
          <li>На предмет внесения изменений в оригинальный VIN-код автомобиля.</li>
          <li>На присутствие и состояние номерных обозначений, всех табличек и маркировок кузова, а также номерных обозначений агрегатов.</li>
          <li>На предмет оригинальности документов (паспорта транспортного средства и свидетельства о регистрации ТС).</li>
          <li>На наличие действующего ЭПТС, соответствии в нем номерных обозначений и историю передачи прав собственности.</li>
          <li>На соответствие документов автомобилю.</li>
          <li>На соответствие контрольных номеров автомобиля и документов.</li>
          <li>На соответствие комплектации по VIN-коду.</li>
        </ul>

        <p style="font-size: 24px; margin-top: 15px;">
          <b>Проверка по базам на отсутствие:</b>
        </p>
        <ul class="modal_overlay__modal__list">
          <li>Залоговых обязательств на автомобиль.</li>
          <li>Ограничений на регистрационные действия в органах ГИБДД.</li>
          <li>Участия владельца в процедуре банкротства и наличие активных исполнительных производств.</li>
        </ul>

        <p style="font-size: 24px; margin-top: 15px;">
          <b>Проверка на соответствие данных в ЭБУ документам:</b>
        </p>
        <p style="font-size: 18px;">
          Снимаются показания из допустимых электронных блоков управления (ЭБУ),
          по которым делается заключение о принадлежности их к данному автомобилю,
          сверяется информация с документами и с нанесенной информацией на автомобиль.
        </p>
        <br>
        <br>
        <i style="font-size: 18px;">Вы приобретаете автомобиль без юридических ограничений или мы выкупаем его обратно.</i>
      </q-scroll-area>
      <div
        class="modal_overlay__close"
        flat
        @click="showModal = false"
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
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
const showModal = defineModel<boolean>('showModal')
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
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;

  &__title {
    font-size: 36px;
  }

  &__modal {
    text-align: left;
    color: white;
    background: url('/images/modal_bg.jpg') center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    overflow-y: auto;
    @include reset-scrollbar;

    @include more-than-small-mobile {
      padding: 40px 20px;
    }

    @include more-than-mobile {
      width: 960px;
      height: 90%;
      padding: 40px 45px;
    }

    @include more-than-desktop-big {
      height: 800px;
    }


    &__list {
      display: flex;
      flex-direction: column;
      gap: 7px;
      margin-top: 15px;

      @include more-than-small-mobile {
        font-size: 16px;
      }

      @include more-than-small-mobile {
        font-size: 18px;
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

</style>
