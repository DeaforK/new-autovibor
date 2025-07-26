<template>
  <section class="estimate-banner">
    <div class="estimate-banner__inner">
      <div class="estimate-banner__left">
        <h2>Бесплатный расчет стоимости</h2>
        <p>Менеджер приступит к анализу вашего запроса и свяжется с Вами в ближайшее время</p>
      </div>

      <div class="estimate-banner__right">
        <q-form
          class="estimate-banner__form"
          @submit="onSubmit"
        >
          <q-input
            v-model="data.name"
            :error-message="errors.name"
            :error="!!errors.name"
            placeholder="Ваше имя и фамилия*"
            filled
            @update:model-value="errors.name = ''"
          >
            <template #prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            v-model="data.phone"
            :error-message="errors.phone"
            :error="!!errors.phone"
            placeholder="Номер телефона*"
            mask="+7 (###) ### ## ##"
            type="tel"
            filled
            @update:model-value="errors.phone = ''"
          >
            <template #prepend>
              <q-icon name="phone" />
            </template>
          </q-input>

          <PublicSharedUiPrimaryButton
            type="submit"
            :disabled="componentLoading"
            :loading="componentLoading"
            class="estimate-banner__button"
          >
            Рассчитать стоимость автомобиля
          </PublicSharedUiPrimaryButton>
        </q-form>

        <p class="estimate-banner__note">
          Отправляя данную форму, вы соглашаетесь с политикой обработки персональных данных
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { apiFetch } from '~/extensions/fetch'
import { useRoute } from 'vue-router'

const route = useRoute()
const { notify } = useQuasar()

const data = reactive({
  name: '',
  phone: '',
  fromPage: route.fullPath
})

const errors = reactive({
  name: '',
  phone: ''
})

const componentLoading = ref(false)

const onSubmit = async () => {
  componentLoading.value = true

  const res = await apiFetch('/api/requestForm', {
    method: 'POST',
    body: data
  })

    .then((result: any) => {
      notify({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: result.message || 'Успех'
      })
      data.name = '',
      data.phone = ''
    }).catch(err => {
      if (err?.details) {
        Object.assign(errors, err.details)
      }

      notify({
        color: 'negative',
        message: err?.message || 'Ошибка при отправке формы',
        icon: 'warning'
      })
    })
  componentLoading.value = false
}

</script>

<style scoped lang="scss">
.estimate-banner {
  background-color: #de5b2a;
  color: white;
  padding: 48px;
  border-radius: 24px;
  margin: 30px 40px;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__left {
    flex: 1 0 40%;

    h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 12px;
      line-height: 1.2;
    }

    p {
      font-size: 16px;
      opacity: 0.95;
      line-height: 1.4;
    }
  }

  &__right {
    flex: 1 0 60%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  &__form {
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
    width: 100%;
    max-width: 100%;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }

    .q-field {
      background-color: #f5f5f5;
      border-radius: 999px;
      padding: 0 8px;
      flex: 1 1 auto;
      min-height: 52px;
    }

    .q-field__control {
      border-radius: 999px !important;
      background: #f5f5f5 !important;
      overflow: hidden;

      // Убираем псевдоэффекты
      &::before,
      &::after {
        display: none !important;
      }

      // Убираем эффект фокуса
      &:hover,
      &:focus,
      &:focus-within {
        box-shadow: none !important;
        outline: none !important;
        background: #f5f5f5 !important;
      }
    }

    input {
      padding-left: 8px;
    }

    .q-icon {
      color: #777;
    }

    button {
      border-radius: 999px;
      background: white !important;
      color: #de5b2a !important;
      font-weight: 600;
      padding: 0 20px;
      height: 52px;
      width: 100%;
      max-width: 100%;

      @media (min-width: 768px) {
        width: auto;
      }
    }


    .q-field--focused .q-field__control,
    .q-field__control:hover,
    .q-field__control:focus,
    .q-field__control:focus-within {
      box-shadow: none !important;
      outline: none !important;
      background: #f5f5f5 !important;
      border: none !important;
      transform: none !important;
    }

    .q-field__native,
    .q-input input {
      background: transparent !important;
      outline: none !important;
      box-shadow: none !important;
    }

  }

  &__note {
    font-size: 13px;
    opacity: 0.9;
    margin-top: 4px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    margin: 30px 20px;
  }
}
</style>
