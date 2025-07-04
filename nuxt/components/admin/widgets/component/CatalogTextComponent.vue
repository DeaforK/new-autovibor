<template>
  <div class="col-12 pa-8">
    <legend class="block-subtitle">
      Текст вкладки
    </legend>
  </div>
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
        v-model="(data.components[j].props as CatalogText).title"
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
      <q-editor
        v-model="(data.components[j].props as CatalogText).text"
        toolbar-toggle-color="panel-primary"
        :toolbar="contentEdittor"
        paragraph-tag="p"
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-toggle
        v-model="(data.components[j].props as CatalogText).bordered"
        size="md"
        color="panel-primary"
        :true-value="true"
        :false-value="false"
        val="lg"
        label="Добавить оранжевую рамку"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CatalogText } from '~/components/admin/widgets/component/AddPageComponent/types'

const { iconSet } = useQuasar()

const parents = [
  { label: 'Описание модели', value: 'description' },
  { label: 'Обзор модели', value: 'review' },
  { label: 'Комплектации и опции', value: 'options' },
  { label: 'Достоинства и недостатки', value: 'advantages' },
  { label: 'Типичные неисправности', value: 'faults' },
  { label: 'Конфигурации', value: 'configurations' }
]

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

const j = toRef(props, 'keyAttr')

const data = inject<any>('data')

const errors = toRef(props, 'errors')

const heading = {
  label: 'Форматирование',
  icon: iconSet.editor.formatting,
  fixedLabel: true,
  list: 'no-icons',
  options: ['h2', 'h3', 'h4', 'h5', 'h6']
}

const contentEdittor = [
  ['bold', 'italic', 'strike', 'underline', 'hr', heading],
  ['link'],
  ['unordered', 'ordered'],
  ['removeFormat'],
  ['undo', 'redo'],
  ['viewsource']
]
</script>
