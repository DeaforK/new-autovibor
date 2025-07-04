<template>
  <div class="col-12 pa-8">
    <legend class="block-subtitle">
      Вкладка «Карусель»
    </legend>
  </div>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-select
        v-model="(data.components[j].props as CatalogCarousel).key"
        label="Родительская вкладка"
        emit-value
        map-options
        :options="parents"
        option-value="value"
        option-label="label"
        color="panel-primary"
        :error-message="errors.components[j]?.props.key"
        :error="!!errors.components[j]?.props.key"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.key) {
              errors.components[j].props.key = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CatalogCarousel).title"
        label="Заголовок"
        color="panel-primary"
        hint="Может быть пустым"
        :error-message="errors.components[j]?.props.title"
        :error="!!errors.components[j]?.props.title"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.title) {
              errors.components[j].props.title = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 pa-8">
      <div
        v-for="(_image, key) in data.components[j].props.images"
        :key="key"
        class="col-12 col-sm-6 col-md-4 pa-8"
      >
        <QUploader
          ref="imageUploader"
          no-thumbnails
          square
          flat
          bordered
          field-name="files"
          color="white"
          :text-color="
            !!getErrorByPath(errors, 'components', j, 'props', 'images', key)
              ? 'negative'
              : 'panel-primary'
          "
          :label="
            !!errors.components[j]?.props.images[key]
              ? errors.components[j]?.props.images[key]
              : 'Загрузите картинку'
          "
          url="/api/admin/files/upload?destination=system"
          accept=".webp, .png, .jpg, .jpeg, .gif"
          style="width: 100%; height: 100%"
          max-files="1"
          @uploaded="uploadedFile($event, data.components[j], errors, j, 'images', key)"
          @failed="failedFile($event, errors, j, 'images', componentLoading!, key)"
          @removed="removedFile(data.components[j], errors, j, 'images', key)"
          @uploading="componentLoading = true"
          @finish="componentLoading = false"
        />
        <div class="flex items-center">
          <q-btn
            class="justify-center"
            round
            color="panel-primary"
            icon="remove"
            size="sm"
            title="Убрать пункт"
            dense
            @click="removeImage(key)"
          />
        </div>
      </div>
      <div class="pa-8">
        <q-btn
          round
          color="panel-primary"
          size="sm"
          icon="add"
          title="Добавить новый пункт"
          @click="addImage"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogCarousel } from '~/components/admin/widgets/component/AddPageComponent/types'
import useUploader from '~/components/admin/shared/libs/uploader'
import { QUploader } from 'quasar'
import { getErrorByPath } from '~/components/admin/shared/libs/helpers'

const imageUploader: Ref<QUploader[]> = ref([])

defineExpose({
  imageUploader
})

const props = defineProps({
  keyAttr: {
    type: Number,
    require: true,
    default: 0
  },
  errors: {
    type: Object,
    require: true,
    default: () => {
      return {}
    }
  }
})

const { uploadedFile, failedFile, removedFile, createFile } = useUploader()

const j = toRef(props, 'keyAttr')
const errors = toRef(props, 'errors')

const data = inject<any>('data')
const componentLoading = inject<Ref<boolean>>('componentLoading')

const addImage = () => {
  ;(data.components[j.value].props as CatalogCarousel).images.push('')
}

const removeImage = (index: number) => {
  ;(data.components[j.value].props as CatalogCarousel).images.splice(index, 1)
}
const parents = [
  { label: 'Описание модели', value: 'description' },
  { label: 'Обзор модели', value: 'review' },
  { label: 'Комплектации и опции', value: 'options' },
  { label: 'Достоинства и недостатки', value: 'advantages' },
  { label: 'Типичные неисправности', value: 'faults' },
  { label: 'Конфигурации', value: 'configurations' }
]

onMounted(() => {
  const images = (data.components[j.value].props as CatalogCarousel).images
  if (Array.isArray(images)) {
    let index = 0
    for (const image of images) {
      if (image) {
        const link = imageUploader.value[index] as any
        const file = createFile(image, true)
        link.files = [file]
        link.updateFileStatus(file, 'uploaded', 1)
        link.uploadedFiles = [file]
      }
      index++
    }
  }
})
</script>
