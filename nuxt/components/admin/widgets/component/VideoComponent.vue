<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 pa-8">
      <q-input
        v-model="(data.components[j].props as VideoComponent).url"
        label="Ссылка на видео"
        color="panel-primary"
        hint="Выберите видео на YouTube, нажмите встроить и скопируйте ссылку из тега src"
        :error-message="errors.components[j]?.props.url"
        :error="!!errors.components[j]?.props.url"
        @update:model-value="
          () => {
            if (errors.components[j]?.props.url) {
              errors.components[j].props.url = ''
            }
          }
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type VideoComponent } from '~/components/admin/widgets/component/AddPageComponent/types'

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
</script>
