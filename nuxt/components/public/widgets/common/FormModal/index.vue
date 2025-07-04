<template>
  <q-dialog
    v-model="showModal"
    class="modal_overlay"
  >
    <div
      class="modal_overlay__modal"
      @click.stop
    >
      <h6>Свяжитесь с нами</h6>

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

        <p>Менеджер приступит к анализу вашего запроса и свяжется с Вами в ближайшее время</p>

        <PublicSharedUiPrimaryButton
          :disabled="agreement !== true"
          type="submit"
          :loading="componentLoading"
          style="align-self: center"
        >
          Отправить заявку
        </PublicSharedUiPrimaryButton>
      </q-form>

      <div
        v-close-popup
        class="modal_overlay__close"
      >
        <img
          class="modal_overlay__close__close_img"
          :src="'/images/close-icon.svg'"
        >
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { type UnwrapNestedRefs } from 'vue'
import { apiFetch } from '~/extensions/fetch'
import { useRoute } from 'vue-router'

const showModal = defineModel<Boolean>('showModal')

const agreement = ref(true)

const { notify } = useQuasar()

const route = useRoute()

const componentLoading = ref(false)

const data = reactive({
  name: '',
  phone: '',
  message: '',
  fromPage: route.fullPath
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

  &__modal {
    text-align: center;
    color: white;
    background: url('/images/modal_bg.jpg') center center;
    height: 590px;
    width: 500px;
    padding: 60px 0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    position: relative;

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
    }
  }

  &__close {
    cursor: pointer;
    @include more-than-small-mobile {
      position: absolute;
      top: 5%;
      right: 5%;
      z-index: 9999;
    }

    &__close_img {
      width: 25px;
    }
  }
}
</style>
