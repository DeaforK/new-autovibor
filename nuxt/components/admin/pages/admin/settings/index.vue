<template>
  <q-page class="w100">
    <q-card
      flat
      bordered
    >
      <q-form
        @submit="onSubmit"
      >
        <q-card-section>
          <div class="panel-title">
            Настройки
          </div>
        </q-card-section>

        <q-card-section class="pa-0">
          <div class="row">
            <div
              v-for="(field, j) in fields"
              :key="j"
              class="col-12 col-sm-6 pa-16"
            >
              <q-input
                v-model="field.content"
                :label="field.label"
                color="panel-primary"
                :error-message="errors[j]?.content ? errors[j].content : undefined"
                :error="errors[j]?.content ? true : undefined"
                @update:model-value="errors[j]?.content ? errors[j].content = '' : () => {}"
              />
            </div>
          </div>
        </q-card-section>

        <q-separator class="mt-16" />

        <q-card-actions>
          <q-btn
            flat
            color="panel-primary"
            type="submit"
            :loading="componentLoading"
          >
            Сохранить
          </q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { apiFetch } from '~/extensions/fetch'
import isLogin from '~/components/admin/middleware/isLogin'
import { type UnwrapNestedRefs } from 'vue'

const { notify } = useQuasar()

definePageMeta({
  layout: 'panel',
  middleware: [isLogin]
})

useSeoMeta({
  title: 'Настройки'
})

const settings = ref([])
const componentLoading = ref(false)
const errors: UnwrapNestedRefs<Record<string, any>> = reactive({})

const fields = computed(() => {
  return settings.value.filter((setting: any) => setting.type === 'string') as Array<any>
})

const init = async () => {
  const data = await apiFetch('/api/admin/fields?module=settings') as any
  settings.value = data.fields
}

const onSubmit = async () => {
  componentLoading.value = true
  await apiFetch('/api/admin/fields', {
    method: 'put',
    body: settings.value.map((item: any) => {
      delete item.createdAt
      delete item.updatedAt
      return item
    })
  })
    .then((result: any) => {
      notify({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: result.message || 'Успех'
      })
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
</script>