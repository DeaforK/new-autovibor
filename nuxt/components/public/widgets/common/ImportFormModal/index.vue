<template>
  <q-dialog
    v-model="showModal"
    class="modal_overlay"
    outline
    maximized
  >
    <q-card
      class="modal_overlay__modal"
      style="max-width: 700px; min-width: 30vw;"
    >
      <q-scroll-area style="height: 100%; width: 100%; padding-left: 20px;">
        <div class="modal-container">
          <q-card-section class="row items-center q-pb-none">
            <h6 class="modal_overlay__modal__title">
              Заполни форму, мы рассчитаем стоимость импорта авто для вас и свяжемся в ближайшее время:
            </h6>
            <q-space />
          </q-card-section>
          <p class="modal_overlay__modal__description">
            Для подбора хорошего автомобиля в Ю. Корее и Китае,
            необходим бюджет от 1,8 млн рублей (за исключением бюджетных КИА Picanto и подобных)
          </p>

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

            <div class="budget">
              <PublicSharedUiBaseInput
                v-model="data.budget"
                type="number"
                :error-message="errors['budget']"
                :error="!!errors['budget']"
                label="Бюджет (в рублях)*"
                @update:model-value="errors['budget'] = ''"
              >
                <template #prepend>
                  <q-icon
                    name="sell"
                    color="white"
                  />
                </template>
              </PublicSharedUiBaseInput>
            </div>

            <div class="carModel">
              <PublicSharedUiBaseInput
                v-model="data.carModel"
                :error-message="errors['carModel']"
                :error="!!errors['carModel']"
                label="Марка и модель*"
                @update:model-value="errors['carModel'] = ''"
              >
                <template #prepend>
                  <q-icon
                    name="shop"
                    color="white"
                  />
                </template>
              </PublicSharedUiBaseInput>
            </div>

            <div class="yearFrom">
              <PublicSharedUiBaseInput
                v-model="data.yearFrom"
                :error-message="errors['yearFrom']"
                :error="!!errors['yearFrom']"
                label="Год выпуска (от)*"
                type="number"
                @update:model-value="errors['yearFrom'] = ''"
              >
                <template #prepend>
                  <q-icon
                    name="business"
                    color="white"
                  />
                </template>
              </PublicSharedUiBaseInput>
            </div>

            <div class="comment">
              <PublicSharedUiBaseInput
                v-model="data.comment"
                :error-message="errors['comment']"
                :error="!!errors['comment']"
                label="Комментарий*"
                @update:model-value="errors['comment'] = ''"
              >
                <template #prepend>
                  <q-icon
                    name="comment"
                    color="white"
                  />
                </template>
              </PublicSharedUiBaseInput>
            </div>


            <q-toggle
              v-model="agreement"
              label="Я согласен с условиями обработки моих персональных данных"
            />

            <p>
              Менеджер приступит к анализу вашего запроса и свяжется с Вами в ближайшее время
            </p>

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
        v-close-popup
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
import { useRoute } from 'vue-router'

const showModal = defineModel<Boolean>('showModal')

const agreement = ref(true)

const route = useRoute()

const { notify } = useQuasar()

const componentLoading = ref(false)

const data = reactive({
  name: '',
  phone: '',
  budget: '',
  carModel: '',
  yearFrom: '',
  comment: '',
  fromPage: route.fullPath
})

const errors = reactive({
  name: '',
  phone: '',
  budget: '',
  carModel: '',
  yearFrom: '',
  comment: ''
}) as UnwrapNestedRefs<Record<string, any>>

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/requestForm/specialRequest/import', {
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
      ;(data.name = ''), (data.phone = ''), (data.budget = ''), (data.carModel = ''),  (data.yearFrom = ''),  (data.comment = '')
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
  align-items: center;
  background-color: #000000da;
  z-index: 10000;

  &__modal {
    @include reset-scrollbar;
    text-align: center;
    color: white;
    background: url('/images/modal_bg.jpg') center center;
    background-size: cover;
    overflow-y: auto;

    @include more-than-small-mobile {
      height: 100%;
      width: 100%;
      gap: 0px;
      border-radius: 0;
    }

    @include more-than-mobile {
      height: 90%;
      width: 660px;
      gap: 10px;
      border-radius: 20px;
    }

    @include more-than-desktop-big {
      height: 860px;
    }

    padding: 60px 0;
    display: flex;
    flex-direction: column;
    padding: 30px;
    position: relative;

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
    }

    &__title {
      padding: 20px;
      padding-bottom: 0;
      font-size: 18px;
      line-height: 24px;
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

.modal-container {
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.button__container {
  @include reset-button;

  font-weight: 700;
  font-size: 16px;
  border-radius: 20px;
  // background-color: transparent;

  &:hover {
    cursor: pointer;
  }
}
</style>
