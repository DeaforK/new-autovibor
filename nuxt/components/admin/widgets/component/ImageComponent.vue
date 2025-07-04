<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <QUploader
        ref="image"
        no-thumbnails
        square
        flat
        bordered
        field-name="files"
        color="white"
        :text-color="errors.components[j]?.props.image ? 'negative' : 'panel-primary'"
        :label="
          errors.components[j]?.props.image
            ? errors.components[j]?.props.image
            : 'Загрузите картинку'
        "
        url="/api/admin/files/upload?destination=system"
        accept=".webp, .png, .jpg, .jpeg, .gif"
        style="width: 100%; height: 100%"
        max-files="1"
        @uploaded="uploadedFile($event, data.components[j], errors, j, 'image')"
        @failed="failedFile($event, errors, j, 'image', componentLoading!)"
        @removed="removedFile(data.components[j], errors, j, 'image')"
        @uploading="componentLoading = true"
        @finish="componentLoading = false"
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="data.components[j].props.hint"
        label="Описание к картинке"
        hint="Может быть пустым"
        :error-message="errors.components[j]?.props.hint"
        :error="!!errors.components[j]?.props.hint"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.hint) {
              errors.components[j].props.hint = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="data.components[j].props.alt"
        label="ALT"
        hint="Для SEO"
        :error-message="errors.components[j]?.props.alt"
        :error="!!errors.components[j]?.props.alt"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.alt) {
              errors.components[j].props.alt = ''
            }
          }
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ImageComponent } from '~/components/admin/widgets/component/AddPageComponent/types'
import useUploader from '~/components/admin/shared/libs/uploader'
import { QUploader } from 'quasar'

const image: Ref<QUploader | null> = ref(null)

defineExpose({
  image
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
  if ((data.components[j.value].props as ImageComponent).image) {
    const file = createFile((data.components[j.value].props as ImageComponent).image!, true)
    const link = image.value as any
    link.files = [file]
    link.updateFileStatus(file, 'uploaded', 1)
    link.uploadedFiles = [file]
  }
})
</script>
