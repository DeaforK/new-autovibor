<template>
  <div class="col-12 pa-8">
    <legend class="block-subtitle">
      вкладка аккордеон
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
        v-model="(data.components[j].props as CatalogAccordion).title"
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
    <div class="col-12">
      <div
        v-for="(_item, key) in data.components[j].props.items"
        :key="key"
      >
        <div class="col-12 pa-8">
          <legend class="block-subtitle">
            Содержимое вкладки «Аккордеон»
          </legend>
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="(data.components[j].props as CatalogAccordion).items[key].title"
            label="Заголовок"
            color="panel-primary"
            :error-message="getErrorByPath(errors, 'components', j, 'props', 'items', key, 'title')"
            :error="!!getErrorByPath(errors, 'components', j, 'props', 'items', key, 'title')"
            @update:model-value="
              () => {
                if (getErrorByPath(errors, 'components', j, 'props', 'items', key, 'title')) {
                  errors.components[j].props.items[key].title = ''
                }
              }
            "
          />
        </div>
        <div class="col-12 pa-8">
          <q-editor
            v-model="(data.components[j].props as CatalogAccordion).items[key].description"
            toolbar-toggle-color="panel-primary"
            :toolbar="contentEdittor"
            paragraph-tag="p"
          />
        </div>
        <div class="flex items-center">
          <q-btn
            class="justify-center"
            round
            color="panel-primary"
            icon="remove"
            size="sm"
            title="Убрать пункт"
            dense
            @click="removeItem(key)"
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
          @click="addItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogAccordion } from '~/components/admin/widgets/component/AddPageComponent/types'
import { getErrorByPath } from '~/components/admin/shared/libs/helpers'

const { iconSet } = useQuasar()

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
const errors = toRef(props, 'errors')

const data = inject<any>('data')

const addItem = () => {
  ;(data.components[j.value].props as CatalogAccordion).items.push({ title: '', description: '' })
}

const removeItem = (index: number) => {
  ;(data.components[j.value].props as CatalogAccordion).items.splice(index, 1)
}

const parents = [
  { label: 'Описание модели', value: 'description' },
  { label: 'Обзор модели', value: 'review' },
  { label: 'Комплектации и опции', value: 'options' },
  { label: 'Достоинства и недостатки', value: 'advantages' },
  { label: 'Типичные неисправности', value: 'faults' },
  { label: 'Конфигурации', value: 'configurations' }
]

const heading = {
  label: 'Форматирование',
  icon: iconSet.editor.formatting,
  fixedLabel: true,
  list: 'no-icons',
  options: ['h2', 'h3', 'h4', 'h5', 'h6', 'code']
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
