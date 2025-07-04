<template>
  <q-page class="w100">
    <q-form
      @submit="onSubmit"
    >
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.login"
            label="Логин"
            hint="Введите Email"
            color="panel-primary"
            :error-message="errors['login']"
            :error="!!errors['login']"
            @update:model-value="errors['login'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.password"
            label="Пароль"
            hint="Придумайте пароль"
            color="panel-primary"
            :error-message="errors['password']"
            :error="!!errors['password']"
            @update:model-value="errors['password'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8 flex">
          <q-toggle
            v-model="data.active"
            size="md"
            color="panel-primary"
            :true-value="true"
            :false-value="false"
            val="lg"
            label="Активен"
          />
        </div>
      </div>

      <div class="mt-16 pa-8">
        <q-btn
          label="Сохранить"
          type="submit"
          color="panel-primary"
          :loading="componentLoading"
        />
        <q-btn
          label="Назад"
          color="panel-primary"
          flat
          class="q-ml-sm"
          :loading="componentLoading"
          @click="router.push('/admin/users')"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { apiFetch } from '~/extensions/fetch'
import isLogin from '~/components/admin/middleware/isLogin'
import isEntityExists from '~/components/admin/middleware/isEntityExists'
import { type UnwrapNestedRefs } from 'vue'

definePageMeta({
  layout: 'panel',
  middleware: [isLogin, isEntityExists('user', 'userId')]
})

useSeoMeta({
  title: 'Пользователи'
})

const router = useRouter()
const route = useRoute()
const { notify } = useQuasar()

const data = reactive({
  userId: null,
  login: '',
  password: '',
  active: true
})

const errors = reactive({
  login: '',
  password: ''
}) as UnwrapNestedRefs<Record<string, any>>

const init = async () => {
  if (route.params.userId !== 'create') {
    const { user } = await apiFetch(`/api/admin/user/${route.params.userId}`) as any
    data.userId = user.userId
    data.login = user.login
    data.password = user.password
    data.active = user.active
  }
}

const componentLoading = ref(false)

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/admin/user', {
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
      router.push('/admin/users')
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

onMounted(() => {
  init()
})

onUnmounted(() => {
})
</script>