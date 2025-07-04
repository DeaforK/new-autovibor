<template>
  <div class="row">
    <div class="col-12 pa-8">
      <legend class="block-subtitle">
        Данные автомобиля
      </legend>
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CatalogMainComponent).title"
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
        v-model="(data.components[j].props as CatalogMainComponent).transmission"
        label="Кузов"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'transmission')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'transmission')"
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
        v-model="(data.components[j].props as CatalogMainComponent).gear"
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
        v-model="(data.components[j].props as CatalogMainComponent).power"
        label="Мощность"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'power')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'power')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.power) {
              errors.components[j].props.power = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CatalogMainComponent).fuel"
        label="Топливо"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'fuel')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'fuel')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.fuel) {
              errors.components[j].props.fuel = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CatalogMainComponent).taxes"
        label="Налог"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'taxes')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'taxes')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.taxes) {
              errors.components[j].props.taxes = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CatalogMainComponent).price"
        label="Рекомендуемая цена"
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
      v-for="(rate, index) in (data.components[j].props as CatalogMainComponent).rating.slice(0, -1)"
      :key="index"
      class="col-12 col-sm-6 col-md-4 pa-8"
    >
      <q-select
        v-model="rate.value"
        :label="rate.label"
        :options="options"
        color="panel-primary"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'rating', index, 'value')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'rating', index, 'value')"
        @update:model-value="
          () => {
            if (getErrorByPath(errors, 'components', j, 'props', 'rating', index, 'value')) {
              errors.components[j].props.rating[index].value = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="
          (data.components[j].props as CatalogMainComponent).rating[data.components[j].props.rating.length - 1].value"
        label="Общая оценка"
        color="panel-primary"
        type="number"
        step="0.1"
        :error-message="getErrorByPath(errors, 'components', j, 'props', 'rating', data.components[j].props.rating.length - 1, 'value')"
        :error="!!getErrorByPath(errors, 'components', j, 'props', 'rating', data.components[j].props.rating.length - 1, 'value')"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.rating[data.components[j].props.rating.length - 1]) {
              errors.components[j].props.rating[data.components[j].props.rating.length - 1] = ''
            }
          }
        "
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as CatalogMainComponent).price"
        label="Рекомендуемая цена"
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

  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <legend class="block-subtitle">
        Лучшие конфигурации
      </legend>
      <div
        v-for="(_item, index) in (data.components[j].props as CatalogMainComponent).plusesAndMinuses
          .pluses"
        :key="index"
      >
        <q-input
          v-model="
            (data.components[j].props as CatalogMainComponent).plusesAndMinuses.pluses[index]
          "
          type="text"
          label="Напишите пункт"
          color="panel-primary"
          :error-message="
            getErrorByPath(errors, 'components', j, 'props', 'plusesAndMinuses', 'pluses', index)
          "
          :error="
            !!getErrorByPath(errors, 'components', j, 'props', 'plusesAndMinuses', 'pluses', index)
          "
          @update:model-value="
            () => {
              if (
                getErrorByPath(
                  errors,
                  'components',
                  j,
                  'props',
                  'plusesAndMinuses',
                  'pluses',
                  index
                )
              ) {
                errors.components[j].props.plusesAndMinuses.pluses[index] = ''
              }
            }
          "
        />
        <div class="flex items-center">
          <q-btn
            round
            color="panel-primary"
            icon="remove"
            title="Убрать пункт"
            dense
            size="sm"
            @click="removePluses(index)"
          />
        </div>
      </div>
      <div class="pa-8">
        <q-btn
          round
          color="panel-primary"
          icon="add"
          size="sm"
          title="Добавить новый пункт"
          @click="addPluses"
        />
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <legend class="block-subtitle">
        Не рекомендуем
      </legend>
      <div
        v-for="(_item, index) in (data.components[j].props as CatalogMainComponent).plusesAndMinuses
          .minuses"
        :key="index"
      >
        <q-input
          v-model="
            (data.components[j].props as CatalogMainComponent).plusesAndMinuses.minuses[index]
          "
          type="text"
          label="Напишите пункт"
          color="panel-primary"
          :error-message="
            getErrorByPath(errors, 'components', j, 'props', 'plusesAndMinuses', 'minuses', index)
          "
          :error="
            !!getErrorByPath(errors, 'components', j, 'props', 'plusesAndMinuses', 'minuses', index)
          "
          @update:model-value="
            () => {
              if (
                getErrorByPath(
                  errors,
                  'components',
                  j,
                  'props',
                  'plusesAndMinuses',
                  'minuses',
                  index
                )
              ) {
                errors.components[j].props.plusesAndMinuses.minuses[index] = ''
              }
            }
          "
        />
        <div class="flex items-center">
          <q-btn
            round
            color="panel-primary"
            icon="remove"
            title="Убрать пункт"
            dense
            size="sm"
            @click="removeMinuses(index)"
          />
        </div>
      </div>
      <div class="pa-8">
        <q-btn
          round
          color="panel-primary"
          icon="add"
          size="sm"
          title="Добавить новый пункт"
          @click="addMinuses"
        />
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <legend class="block-subtitle">
        Преимущества
      </legend>
      <div
        v-for="(_item, index) in (data.components[j].props as CatalogMainComponent).recommendation"
        :key="index"
      >
        <q-input
          v-model="(data.components[j].props as CatalogMainComponent).recommendation[index]"
          type="text"
          label="Напишите пункт"
          color="panel-primary"
          :error-message="getErrorByPath(errors, 'components', j, 'props', 'recommendation', index)"
          :error="!!getErrorByPath(errors, 'components', j, 'props', 'recommendation', index)"
          @update:model-value="
            () => {
              if (getErrorByPath(errors, 'components', j, 'props', 'recommendation', index)) {
                errors.components[j].props.recommendation[index] = ''
              }
            }
          "
        />
        <div class="flex items-center">
          <q-btn
            round
            color="panel-primary"
            icon="remove"
            title="Убрать пункт"
            dense
            size="sm"
            @click="removeRecommendation(index)"
          />
        </div>
      </div>
      <div class="pa-8">
        <q-btn
          round
          color="panel-primary"
          icon="add"
          size="sm"
          title="Добавить новый пункт"
          @click="addRecommendation"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CatalogMainComponent } from '~/components/admin/widgets/component/AddPageComponent/types'
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
  ;(data.components[j.value].props as CatalogMainComponent).images.push('')
}

const removeImage = (index: number) => {
  ;(data.components[j.value].props as CatalogMainComponent).images.splice(index, 1)
}

const j = toRef(props, 'keyAttr')
const errors = toRef(props, 'errors')

const data = inject<any>('data')
const options = Array.from({ length: 11 }, (_, i) => i)

const removeRecommendation = (index: number) => {
  ;(data.components[j.value].props as CatalogMainComponent).recommendation.splice(index, 1)
}
const addRecommendation = () => {
  ;(data.components[j.value].props as CatalogMainComponent).recommendation.push('')
}

const removePluses = (index: number) => {
  ;(data.components[j.value].props as CatalogMainComponent).plusesAndMinuses.pluses.splice(index, 1)
}
const addPluses = () => {
  ;(data.components[j.value].props as CatalogMainComponent).plusesAndMinuses.pluses.push('')
}

const removeMinuses = (index: number) => {
  ;(data.components[j.value].props as CatalogMainComponent).plusesAndMinuses.minuses.splice(
    index,
    1
  )
}
const addMinuses = () => {
  ;(data.components[j.value].props as CatalogMainComponent).plusesAndMinuses.minuses.push('')
}

onMounted(() => {
  const images = (data.components[j.value].props as CatalogMainComponent).images
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
