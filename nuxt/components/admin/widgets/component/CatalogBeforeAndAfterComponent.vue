<template>
  <legend class="block-subtitle">
    вкладка до и после
  </legend>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-select
        v-model="data.components[j].props.key"
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
        v-model="(data.components[j].props as CatalogBeforeAndAfter).title"
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
  </div>
  <div class="row mb-22">
    <div class="col-12 col-sm-6 col-md-4 pa-10">
      <legend class="block-subtitle">
        Фото до
      </legend>
      <QUploader
        ref="firstImage"
        no-thumbnails
        square
        flat
        bordered
        field-name="files"
        color="white"
        :text-color="!!errors.components[j]?.props.images[0] ? 'negative' : 'panel-primary'"
        :label="
          !!errors.components[j]?.props.images[0]
            ? errors.components[j]?.props.images[0]
            : 'Загрузите до картинку'
        "
        url="/api/admin/files/upload?destination=system"
        accept=".webp, .png, .jpg, .jpeg, .gif"
        style="width: 100%; height: 100%"
        max-files="1"
        @uploaded="uploadedFile($event, data.components[j], errors, j, 'images', 0)"
        @failed="failedFile($event, errors, j, 'images', componentLoading!, 0)"
        @removed="removedFile(data.components[j], errors, j, 'images', 0)"
        @uploading="componentLoading = true"
        @finish="componentLoading = false"
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <legend class="block-subtitle">
        Фото после
      </legend>
      <QUploader
        ref="secondImage"
        no-thumbnails
        square
        flat
        bordered
        field-name="files"
        color="white"
        :text-color="!!errors.components[j]?.props.images[1] ? 'negative' : 'panel-primary'"
        :label="
          !!errors.components[j]?.props.images[1]
            ? errors.components[j]?.props.images[1]
            : 'Загрузите после картинку'
        "
        url="/api/admin/files/upload?destination=system"
        accept=".webp, .png, .jpg, .jpeg, .gif"
        style="width: 100%; height: 100%"
        max-files="1"
        @uploaded="uploadedFile($event, data.components[j], errors, j, 'images', 1)"
        @failed="failedFile($event, errors, j, 'images', componentLoading!, 1)"
        @removed="removedFile(data.components[j], errors, j, 'images', 1)"
        @uploading="componentLoading = true"
        @finish="componentLoading = false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogBeforeAndAfter } from '~/components/admin/widgets/component/AddPageComponent/types'
import useUploader from '~/components/admin/shared/libs/uploader'
import { QUploader } from 'quasar'

const firstImage: Ref<QUploader | null> = ref(null)
const secondImage: Ref<QUploader | null> = ref(null)

defineExpose({
  firstImage,
  secondImage
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

onMounted(() => {
  if ((data.components[j.value].props as CatalogBeforeAndAfter).images[0]) {
    const file = createFile(
      (data.components[j.value].props as CatalogBeforeAndAfter).images[0],
      true
    )
    const link = firstImage.value as any
    link.files = [file]
    link.updateFileStatus(file, 'uploaded', 1)
    link.uploadedFiles = [file]
  }
  if ((data.components[j.value].props as CatalogBeforeAndAfter).images[1]) {
    const file = createFile(
      (data.components[j.value].props as CatalogBeforeAndAfter).images[1]!,
      true
    )
    const link = secondImage.value as any
    link.files = [file]
    link.updateFileStatus(file, 'uploaded', 1)
    link.uploadedFiles = [file]
  }
})

const parents = [
  { label: 'Описание модели', value: 'description' },
  { label: 'Обзор модели', value: 'review' },
  { label: 'Комплектации и опции', value: 'options' },
  { label: 'Достоинства и недостатки', value: 'advantages' },
  { label: 'Типичные неисправности', value: 'faults' },
  { label: 'Конфигурации', value: 'configurations' }
]
</script>
