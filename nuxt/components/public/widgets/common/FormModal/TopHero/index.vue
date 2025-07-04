<template>
  <q-dialog
    v-model="showModal"
    class="modal_overlay"
    outline
    maximized
  >
    <q-card
      class="modal_overlay__modal"
      @click.stop
    >
      <q-scroll-area style="height: 100%; width: 100%;">
        <div style="padding-right: 20px">
          <div class="modal_overlay__modal__text">
            <b class="modal_overlay__modal__text__title">
              Выбираете БУ автомобиль?
            </b>
            <p class="modal_overlay__modal__text__paragraph">
              Поможем найти лучший автомобиль на рынке в рамках вашего бюджета.
            </p>
            <p class="modal_overlay__modal__text__paragraph">
              Мы смогли построить идеальный сервис для клиентов, которые хотят найти себе надежный автомобиль.
            </p>
            <p class="modal_overlay__modal__text__paragraph">
              В 98% случаев услуга ОЧЕНЬ выгодна для покупателя или бесплатна.
            </p>
            <b class="modal_overlay__modal__text__title">
              Отберем объявления, пообщаемся с продавцами, осмотрим все варианты, Вам останется только приехать на просмотр лучшего автомобиля.
            </b>
            <ul class="modal_overlay__modal__text__list">
              <li>Свой офис в Екатеринбурге, всегда открыты к встречам и общению</li>
              <li>7 лет успешной работы</li>
            </ul>

            <b class="modal_overlay__modal__text__title">
              3 вида гарантии на каждый автомобиль:
            </b>
            <ul class="modal_overlay__modal__text__list">
              <li>
                Гарантия Юридической чистоты. Вы приобретаете автомобиль без кредитных, залоговых
                и других юридических ограничений, влияющих на законность вашего владения.
              </li>
              <li>
                Гарантия на достоверность Диагностики. Вы получаете полную и достоверную информацию
                о состоянии автомобиля, соответствующую действительности на 100%
              </li>
              <li>
                Гарантия на основные узлы и агрегаты. В случае возникновения неисправностей в
                течение гарантийного периода мы устраним их за свой счет.
              </li>
            </ul>
          </div>

          <h6 class="modal_overlay__modal__form-title">
            Свяжитесь с нами
          </h6>

          <q-form @submit="onSubmit">
            <PublicSharedUiBaseInput
              v-model="data.name"
              :autofocus="true"
              :error-message="errors['name']"
              :error="!!errors['name']"
              label="Ваше имя*"
              @update:model-value="errors['name'] = ''"
            >
              <template #prepend>
                <q-icon
                  name="person"
                  color="white"
                />
              </template>
            </PublicSharedUiBaseInput>

            <PublicSharedUiBaseInput
              v-model="data.phone"
              :error-message="errors['phone']"
              :error="!!errors['phone']"
              label="Ваш телефон*"
              placeholder="+7 (___) ___ __ __"
              type="tel"
              mask="+7 (###) ### ## ##"
              @update:model-value="errors['phone'] = ''"
            >
              <template #prepend>
                <q-icon
                  name="phone"
                  color="white"
                />
              </template>
            </PublicSharedUiBaseInput>

            <div class="message">
              <PublicSharedUiBaseInput
                v-model="data.message"
                :error-message="errors['message']"
                :error="!!errors['message']"
                label="Описание*"
                @update:model-value="errors['message'] = ''"
              >
                <template #prepend>
                  <q-icon
                    name="email"
                    color="white"
                  />
                </template>
              </PublicSharedUiBaseInput>
              <span>Укажите в описании марку, модель, год выпуска, бюджет</span>
            </div>


            <q-toggle
              v-model="agreement"
              label="Я согласен с условиями обработки моих персональных данных"
            />

            <PublicSharedUiPrimaryButton
              :disabled="agreement !== true"
              type="submit"
              :loading="componentLoading"
              style="align-self: center"
            >
              Отправить заявку
            </PublicSharedUiPrimaryButton>
          </q-form>
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
import { type UnwrapNestedRefs } from 'vue'
import { apiFetch } from '~/extensions/fetch'

const showModal = defineModel<boolean>('showModal')

const agreement = ref(true)

const { notify } = useQuasar()

const componentLoading = ref(false)

const data = reactive({
  name: '',
  phone: '',
  message: ''
})

const errors = reactive({
  name: '',
  phone: '',
  message: ''
}) as UnwrapNestedRefs<Record<string, any>>

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/requestForm', {
    method: 'post',
    body
  })
    .then((result: any) => {
      notify({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: result.message || 'Успех'
      })
      showModal.value = false
      ;(data.name = ''), (data.phone = ''), (data.message = '')
    })
    .catch(err => {
      for (const key in err.details) {
        errors[key] = err.details[key]
      }

      notify({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        message: err.message || 'Упс, произошла ошибка'
      })
    })
  componentLoading.value = false
}
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
  align-items: center;

  &__modal {
    text-align: center;
    color: white;
    background: url('/images/modal_bg.jpg') center center;
    background-size: cover;
    padding: 60px 0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    // margin-top: 10%;
    // @include reset-scrollbar;

    position: relative;

    @include more-than-small-mobile {
      width: 100%;
      height: 100%;
      padding: 30px 18px;
    }

    @include more-than-mobile {
      height: 90%;
      width: 650px;
      padding: 30px;
    }

    @include more-than-tablet {
      height: 90%;
      width: 960px;
    }

    @include more-than-desktop-big {
      height: 800px;
      width: 960px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      margin-top: 15px;
    }

    h6 {
      font-size: 24px;
      margin-top: 20px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 13px;
      text-align: left;

      &__title {
        font-size: 20px;
        line-height: 26px;
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
  @include reset-link;
  @include reset-button;

  font-weight: 700;
  font-size: 16px;


  @include more-than-small-mobile {
    padding: 10px;
  }

  @include more-than-mobile {
    padding: 20px 30px;
  }

  @include more-than-tablet {
    padding: 20px 50px;
  }
  border-radius: 20px;
  &:nth-child(1) {
    background-color: #DA582D;
  }

  &:nth-child(2) {
    background-color: transparent;
    border: 1px solid white;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
