<template>
  <div class="row">
    <div class="col-12 pa-8">
      <legend class="block-subtitle">
        Данные автомобиля
      </legend>
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as ImportedCarsMainComponent).title"
        label="Название (H1)"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'title')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'title')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.title) {
              errors.components[j].props.title = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as ImportedCarsMainComponent).mileage"
        label="Пробег"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'mileage')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'mileage')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.mileage) {
              errors.components[j].props.mileage = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as ImportedCarsMainComponent).engineVolume"
        label="Объём двигателя"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'engineVolume')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'engineVolume')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.engineVolume) {
              errors.components[j].props.engineVolume = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as ImportedCarsMainComponent).gear"
        label="Привод"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'gear')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'gear')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.gear) {
              errors.components[j].props.gear = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as ImportedCarsMainComponent).price"
        label="Стоимость"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'price')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'price')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.price) {
              errors.components[j].props.price = ''
            }
          }
        "
      />
    </div>
    <div
      v-for="(_image, key) in data.components[j].props.images"
      :key="key"
      class="col-12 col-sm-6 col-md-12 pa-18"
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
          !!errors.components[j]?.props?.images?.[key]
            ? errors.components[j]?.props?.images?.[key]
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
  <div style="margin-top: 70px;" />
</template>

<script setup lang="ts">
import { type ImportedCarsMainComponent } from '~/components/admin/widgets/component/AddPageComponent/types'
import useUploader from '~/components/admin/shared/libs/uploader'
import { QUploader } from 'quasar'
import { getErrorByPath } from '~/components/admin/shared/libs/helpers'

const imageUploader: Ref<QUploader[]> = ref([])
defineExpose({
  imageUploader
})
const componentLoading = inject<Ref<boolean>>('componentLoading')

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
const addImage = () => {
  ;(data.components[j.value].props as ImportedCarsMainComponent).images.push('')
}

const removeImage = (index: number) => {
  ;(data.components[j.value].props as ImportedCarsMainComponent).images.splice(index, 1)
}

const j = toRef(props, 'keyAttr')
const errors = toRef(props, 'errors')

const data = inject<any>('data')
const options = Array.from({ length: 11 }, (_, i) => i)

onMounted(() => {
  const images = (data.components[j.value].props as ImportedCarsMainComponent).images
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

<style lang="scss" scoped></style>
