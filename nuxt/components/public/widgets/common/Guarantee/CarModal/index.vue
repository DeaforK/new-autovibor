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
          Гарантия подбора авто
        </h6>

        <div style="margin-top: 20px;">
          <p style="font-size: 24px;">
            Автомобиль проходит этапы проверки:
          </p>
          <p style="font-size: 24px; margin-top: 15px;">
            <b>Проверка кузовных элементов:</b>
          </p>
          <ul class="modal_overlay__modal__list">
            <li>На предмет сохранности лакокрасочного покрытия и ее соответствие заводским стандартам.</li>
            <li>На предмет замены заводских кузовных элементов оригинальных или неоригинальных.</li>
            <li>На наличие вмешательств в силовую конструкцию автомобиля.</li>
            <li>На состояние номерных обозначений кузовных элементов.</li>
            <li>На наличие пассивной безопасности автомобиля.</li>
          </ul>

          <p style="font-size: 24px; margin-top: 15px;">
            <b>Проверка технической части:</b>
          </p>

          <ul class="modal_overlay__modal__list">
            <li>Состояние и работоспособность основных узлов и агрегатов.</li>
            <li>Состояние уровня и технических жидкостей.</li>
            <li>Состояние ходовой части.</li>
            <li>Имеющихся всесторонних систем.</li>
            <li>Компьютерная диагностика, проверка параметров и соответствие их номинальным значениям.</li>
            <li>Проверка пробега автомобиля в электронных блоках управления (ЭБУ).</li>
            <li>История эксплуатации и проведение технического обслуживания автомобиля.</li>
          </ul>

          <p style="font-size: 24px; margin-top: 15px;">
            <b>Проверка эстетического состояния:</b>
          </p>
          <ul class="modal_overlay__modal__list">
            <li>На работоспособность всех элементов и органов управления.</li>
            <li>На состояние элементов салона.</li>
            <li>На наличие и состояние дополнительного оборудования.</li>
          </ul>
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

.button__container {
  @include reset-button;
  border-radius: 20px;
  opacity: 0;
  padding: 10px 20px;
  transition: all .5s;
  width: min-content;

  @include more-than-small-mobile {
    opacity: 1;
    margin-top: 20px;
    margin-bottom: 30px;
    border: 1px solid white;
  }

  @include more-than-mobile {
    opacity: 0;
    margin-top: 0px;
    margin-bottom: 0px;
    border: 1px solid transparent;
  }
}
</style>
