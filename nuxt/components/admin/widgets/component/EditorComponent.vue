<template>
  <div class="row">
    <div class="col-12 pa-8">
      <q-editor
        v-model="(data.components[j].props as TextComponent).text"
        toolbar-toggle-color="panel-primary"
        :toolbar="contentEdittor"
        paragraph-tag="p"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type TextComponent } from '~/components/admin/widgets/component/AddPageComponent/types'

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

const data = inject<any>('data')

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
