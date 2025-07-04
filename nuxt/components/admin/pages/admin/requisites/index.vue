
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
            Реквизиты
          </div>
        </q-card-section>

        <q-card-section class="pa-0">
          <div class="row">
            <div
              v-for="(field, j) in requisites"
              :key="j"
              class="col-12 col-sm-6 pa-16"
            >
              <q-input
                v-if="field.type === 'string'"
                v-model="field.content"
                :label="field.label"
                :hint="field.hint ? field.hint : undefined"
                :hide-hint="!field.hint"
                color="panel-primary"
                :error-message="errors[j]?.content ? errors[j].content : undefined"
                :error="errors[j]?.content ? true : undefined"
                @update:model-value="errors[j]?.content ? errors[j].content = '' : () => {}"
              />
              <QUploader
                v-else-if="field.type === 'file'"
                ref="fileUploader"
                no-thumbnails
                square
                flat
                bordered
                field-name="files"
                color="white"
                style="width: 100%; height: 100%;"
                :text-color="errors[j]?.content ? 'negative' : 'panel-primary'"
                :label="errors[j]?.content ? errors[j]?.content : 'Загрузите файл'"
                url="/api/admin/files/upload?destination=system"
                accept="image/png, image/jpeg"
                max-files="1"
                @uploaded="uploaded($event, j)"
                @failed="failed($event, j)"
                @removed="removed(j)"
                @uploading="componentLoading = true"
                @finish="componentLoading = false"
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
import { QUploader } from 'quasar'

const { notify } = useQuasar()

definePageMeta({
  layout: 'panel',
  middleware: [isLogin]
})

useSeoMeta({
  title: 'Реквизиты'
})

const requisites: Ref<Record<string, any>> = ref([])

const componentLoading = ref(false)
const errors: UnwrapNestedRefs<Record<string, any>> = reactive({})

const fileUploader: Ref<QUploader[] | null> = ref(null)

defineExpose({
  fileUploader
})

watch(fileUploader, () => {
  if (process.client) {
    for (const i in requisites.value) {
      let index = 0
      if (requisites.value[i].type === 'file' && requisites.value[i].content) {
        const split = requisites.value[i].content.split('/')
        const filename = split[split.length - 1]
        const file = new File([], filename, {
          type: 'image/pdf'
        })
        if (fileUploader.value) {
          const link = fileUploader.value[index] as any
          link.files = [file]
          link.updateFileStatus(file, 'uploaded', 1)
          link.uploadedFiles = [file]
          index++
        }
      }
    }
  }
})

const init = async () => {
  const data = await apiFetch('/api/admin/fields?module=requisites') as any
  requisites.value = data.fields
}

const uploaded = (info: any, j: string) => {
  const response = JSON.parse(info.xhr.response)
  requisites.value[j].content = response.files[0].path
  if (errors[j]?.content) {
    errors[j].content = ''
  }
}

const failed = (info: any, j: string) => {
  const response = JSON.parse(info.xhr.response)
  notify({
    color: 'negative',
    textColor: 'white',
    icon: 'warning',
    message: response.error || 'Упс, произошла ошибка'
  })

  if (errors[j]) {
    errors[j].content = response.error
  } else {
    errors[j] = {
      content: response.error
    }
  }

  componentLoading.value = false
}

const removed = (j: string) => {
  requisites.value[j].content = ''
  if (errors[j]) {
    errors[j].content = ''
  }
}

const onSubmit = async () => {
  componentLoading.value = true
  await apiFetch('/api/admin/fields', {
    method: 'put',
    body: requisites.value.map((item: any) => {
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