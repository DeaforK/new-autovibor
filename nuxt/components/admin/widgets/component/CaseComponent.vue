<template>
  <div class="row">
    <div class="col-12 pa-8">
      <legend class="block-subtitle">
        Данные автомобиля
      </legend>
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CaseComponent).title"
        label="Заголовок"
        color="panel-primary"
        :error-message="errors.components[j]?.props.title"
        :error="!!errors.components[j]?.props.title"
        @update:model-value="errors.components[j].props.title = ''"
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CaseComponent).engine"
        label="Двигатель"
        color="panel-primary"
        :error-message="errors.components[j]?.props.engine"
        :error="!!errors.components[j]?.props.engine"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.engine) {
              errors.components[j].props.engine = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CaseComponent).transmission"
        label="Привод"
        color="panel-primary"
        :error-message="errors.components[j]?.props.transmission"
        :error="!!errors.components[j]?.props.transmission"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.transmission) {
              errors.components[j].props.transmission = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CaseComponent).gear"
        label="Коробка передач"
        color="panel-primary"
        :error-message="errors.components[j]?.props.gear"
        :error="!!errors.components[j]?.props.gear"
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
        v-model="(data.components[j].props as CaseComponent).owners"
        label="Владельцы"
        type="number"
        color="panel-primary"
        :error-message="errors.components[j]?.props.owners"
        :error="!!errors.components[j]?.props.owners"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.owners) {
              errors.components[j].props.owners = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CaseComponent).mileage"
        label="Пробег"
        type="number"
        color="panel-primary"
        :error-message="errors.components[j]?.props.mileage"
        :error="!!errors.components[j]?.props.mileage"
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
        v-model="(data.components[j].props as CaseComponent).specialict"
        label="Специалист"
        color="panel-primary"
        :error-message="errors.components[j]?.props.specialict"
        :error="!!errors.components[j]?.props.specialict"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.specialict) {
              errors.components[j].props.specialict = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-select
        v-model="(data.components[j].props as CaseComponent).service"
        label="Услуга"
        map-options
        emit-value
        :options="services"
        option-value="id"
        option-label="label"
        color="panel-primary"
        :error-message="errors.components[j]?.props.service"
        :error="!!errors.components[j]?.props.service"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.service) {
              errors.components[j].props.service = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CaseComponent).yearOfService"
        type="number"
        mask="####"
        label="Год исполнения"
        color="panel-primary"
        :error-message="errors.components[j]?.props.yearOfService"
        :error="!!errors.components[j]?.props.yearOfService"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.yearOfService) {
              errors.components[j].props.yearOfService = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CaseComponent).price"
        label="Стоимость автомобиля"
        color="panel-primary"
        :error-message="errors.components[j]?.props.price"
        :error="!!errors.components[j]?.props.price"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.price) {
              errors.components[j].props.price = ''
            }
          }
        "
      />
    </div>
  </div>
  <div class="col-12 pa-8">
    <legend class="block-subtitle">
      Добавить изображение
    </legend>
  </div>
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
        !!errors.components[j]?.props.images?.[key]
          ? errors.components[j]?.props.images?.[key]
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
</template>

<script setup lang="ts">
import { type CaseComponent } from '~/components/admin/widgets/component/AddPageComponent/types'
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
  },
  services: {
    type: Array,
    required: true,
    default: () => {
      return []
    }
  }
})
const { uploadedFile, failedFile, removedFile, createFile } = useUploader()
const addImage = () => {
  ;(data.components[j.value].props as CaseComponent).images.push('')
}

const removeImage = (index: number) => {
  ;(data.components[j.value].props as CaseComponent).images.splice(index, 1)
}

const j = toRef(props, 'keyAttr')
const errors = toRef(props, 'errors')

const data = inject<any>('data')

onMounted(() => {
  const images = (data.components[j.value].props as CaseComponent).images
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

<style lang="scss" scoped>
.error-message {
  color: var(--q-negative);
}
</style>
