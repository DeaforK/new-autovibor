<template>
  <q-page class="flex flex-center">
    <q-form
      class="q-gutter-md login-form"
      @submit="onSubmit"
      @reset="onReset"
    >
      <q-input
        v-model="login"
        label="Логин"
        hint="Введите Email"
        color="panel-primary"
        type="email"
        filled
        :error-message="errors['login']"
        :error="!!errors['login']"
        @update:model-value="errors['login'] = ''"
      />

      <q-input
        v-model="password"
        label="Пароль"
        hint="Введите пароль"
        color="panel-primary"
        type="password"
        filled
        :error-message="errors['password']"
        :error="!!errors['password']"
        @update:model-value="errors['password'] = ''"
      />

      <div>
        <q-btn
          label="Продолжить"
          type="submit"
          color="panel-primary"
          :loading="componentLoading"
        />
        <q-btn
          label="Сбросить"
          type="reset"
          color="panel-primary"
          flat
          class="q-ml-sm"
          :loading="componentLoading"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { apiFetch } from '~/extensions/fetch'
import { type UnwrapNestedRefs } from 'vue'

definePageMeta({
  layout: 'empty'
})

useSeoMeta({
  title: 'Вход',
  description: ''
})

const { notify } = useQuasar()
const router = useRouter()

const login = ref('')
const password = ref('')
const errors = reactive({
  login: '',
  password: ''
}) as UnwrapNestedRefs<Record<string, any>>
const componentLoading = ref(false)

const onReset = () => {
  login.value = ''
  password.value = ''
}

const onSubmit = async () => {
  const body = {
    login: login.value,
    password: password.value
  }

  componentLoading.value = true

  await apiFetch('/api/user/login', {
    method: 'post',
    body
  })
    .then((result: any) => {
      onReset()
      notify({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: result.message || 'Успешный вход'
      })
      router.push('/admin')
    })
    .catch((err) => {
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