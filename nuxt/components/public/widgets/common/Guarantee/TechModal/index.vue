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
          Техническая гарантия
        </h6>
        <div>
          <p style="font-size: 24px; margin-top: 15px;">
            <b>Предоставляется на:</b>
          </p>
          <ul class="modal_overlay__modal__list">
            <li>Двигатель внутреннего сгорания (ДВС).</li>
            <li>Трансмиссию (коробку переключения передач).</li>
            <li>Раздаточную коробку.</li>
            <li>Механические узлы и детали автомобиля.</li>
          </ul>

          <p style="font-size: 18px; margin-top: 15px;">
            В случае возникновения неисправностей в течение гарантийного периода мы устраним их за свой счет.
          </p>
          <p style="font-size: 18px; margin-top: 15px;">
            Гарантия распространяется на срок в течение 14 дней, после даты заключения договора купли-продажи автомобиля.
          </p>
          <p style="font-size: 18px; margin-top: 15px;">
            <b>
              После покупки автомобиля вы получаете полную и достоверную информацию о
              состоянии автомобиля, которая соответствует действительности на 100%.
            </b>
          </p>
        </div>
      </q-scroll-area>
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
