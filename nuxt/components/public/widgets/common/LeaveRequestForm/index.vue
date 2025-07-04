<template>
  <p class="leaveRequestForm__description">
    Менеджер приступит к анализу вашего запроса и свяжется с Вами в ближайшее время
  </p>

  <q-form
    class="application-form"
    @submit="onSubmit"
  >
    <q-input
      v-model:model-value="data.name"
      type="text"
      rounded
      outlined
      bg-color="grey-2"
      placeholder="Ваше имя и фамилия*"
      class="input-field"
      :error-message="errors['name']"
      :error="!!errors['name']"
      @update:model-value="errors['name'] = ''"
    >
      <template #prepend>
        <q-icon name="person" />
      </template>
    </q-input>

    <q-input
      v-model:model-value="data.phone"
      type="text"
      class="input-field"
      rounded
      bg-color="grey-2"
      outlined
      placeholder="Номер телефона*"
      mask="+7 (###) ### ## ##"
      :error-message="errors['phone']"
      :error="!!errors['phone']"
      @update:model-value="errors['phone'] = ''"
    >
      <template #prepend>
        <q-icon name="phone" />
      </template>
    </q-input>

    <q-input
      v-model:model-value="data.message"
      type="text"
      class="input-field"
      rounded
      outlined
      bg-color="grey-2"
      placeholder="Опишите задачу*"
      :error-message="errors['message']"
      :error="!!errors['message']"
      @update:model-value="errors['message'] = ''"
    >
      <template #prepend>
        <q-icon name="create" />
      </template>
    </q-input>

    <div class="btn">
      <PublicSharedUiPrimaryButton
        type="submit"
        :loading="componentLoading"
      >
        Отправить заявку
      </PublicSharedUiPrimaryButton>
    </div>

    <p class="terms">
      Отправляя данную форму, вы соглашаетесь с политикой обработки персональных данных
    </p>
  </q-form>
</template>

<script lang="ts" setup>
import { type UnwrapNestedRefs } from 'vue'
import { apiFetch } from '~/extensions/fetch'
import { useRoute } from 'vue-router'
import { useReCaptcha } from 'vue-recaptcha-v3'

const formType = ref('Подбор Авто')

const route = useRoute()

const { notify } = useQuasar()

const componentLoading = ref(false)

const data = reactive({
  name: '',
  phone: '',
  message: '',
  task: formType,
  fromPage: route.fullPath
})

const errors = reactive({
  name: '',
  phone: '',
  message: ''
}) as UnwrapNestedRefs<Record<string, any>>

const reCaptcha = useReCaptcha()

const onSubmit = async () => {
  if (!reCaptcha?.recaptchaLoaded || !reCaptcha?.executeRecaptcha) {
    notify({
      color: 'negative',
      icon: 'warning',
      message: 'reCAPTCHA ещё не готова. Попробуйте позже.'
    })
    return
  }

  await reCaptcha.recaptchaLoaded()

  const token = await reCaptcha.executeRecaptcha('request_form')
  if (!token) {
    notify({
      color: 'negative',
      textColor: 'white',
      icon: 'warning',
      message: 'Не удалось пройти проверку reCAPTCHA. Попробуйте позже.'
    })
    return
  }

  const body = {
    ...data,
    recaptchaToken: token
  }

  componentLoading.value = true

  try {
    const result: any = await apiFetch('/api/requestForm/', {
      method: 'post',
      body
    })

    notify({
      color: 'positive',
      textColor: 'white',
      icon: 'done',
      message: result.message || 'Успех'
    })

    data.name = ''
    data.phone = ''
    data.message = ''
  } catch (err: any) {
    if (err.details) {
      for (const key in err.details) {
        errors[key] = err.details[key]
      }
    }

    notify({
      color: 'negative',
      textColor: 'white',
      icon: 'warning',
      message: err.message || 'Упс, произошла ошибка'
    })
  } finally {
    componentLoading.value = false
  }
}

</script>

<style lang="scss" scoped>
.leaveRequestForm__description {
  font-size: 14px;
  line-height: 21px;

  color: #000000;
  opacity: 0.5;
  text-align: center;
}

.application-form {
  .input-field {
    margin-bottom: 10px;
    width: 100%;
  }

  .switch {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;

    span {
      font-weight: 600;
      font-size: 11px;
      text-align: center;
      text-transform: uppercase;
      color: $primary;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .terms {
    width: 100%;
    font-size: 10px;
    line-height: 150%;
    margin-top: 14px;
    text-align: center;
    color: #000000;
    opacity: 0.5;
  }
}
</style>
