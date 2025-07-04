<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 pa-22">
      <legend class="block-subtitle">
        Плюсы авто
      </legend>
      <div
        v-for="(_item, index) in (data.components[j].props as CaseDetailsComponent).benefits"
        :key="index"
      >
        <q-input
          v-model="(data.components[j].props as CaseDetailsComponent).benefits[index]"
          type="text"
          label="Напишите пункт"
          color="panel-primary"
          :error-message="getErrorByPath(errors, 'components', j, 'props', 'benefits', index)"
          :error="!!getErrorByPath(errors, 'components', j, 'props', 'benefits', index)"
          @update:model-value="
            () => {
              if (getErrorByPath(errors, 'components', j, 'props', 'benefits', index)) {
                errors.components[j].props.benefits[index] = ''
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
            @click="removeBenefits(index)"
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
          @click="addBenefits"
        />
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-22">
      <legend class="block-subtitle">
        Минусы авто
      </legend>
      <div
        v-for="(_item, index) in (data.components[j].props as CaseDetailsComponent).negative"
        :key="index"
      >
        <q-input
          v-model="(data.components[j].props as CaseDetailsComponent).negative[index]"
          type="text"
          label="Напишите пункт"
          color="panel-primary"
          :error-message="getErrorByPath(errors, 'components', j, 'props', 'negative', index)"
          :error="!!getErrorByPath(errors, 'components', j, 'props', 'negative', index)"
          @update:model-value="
            () => {
              if (getErrorByPath(errors, 'components', j, 'props', 'negative', index)) {
                errors.components[j].props.negative = ''
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
            size="sm"
            dense
            @click="removeNegative(index)"
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
          @click="addNegative"
        />
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 pa-22">
      <legend class="block-subtitle">
        Рекомендации
      </legend>
      <div
        v-for="(_item, index) in (data.components[j].props as CaseDetailsComponent).recommended"
        :key="index"
      >
        <q-input
          v-model="(data.components[j].props as CaseDetailsComponent).recommended[index]"
          type="text"
          label="Напишите пункт"
          color="panel-primary"
          :error-message="getErrorByPath(errors, 'components', j, 'props', 'recommended', index)"
          :error="!!getErrorByPath(errors, 'components', j, 'props', 'recommended')"
          @update:model-value="
            () => {
              if (getErrorByPath(errors, 'components', j, 'props', 'recommended', index)) {
                errors.components[j].props.recommended[index] = ''
              }
            }
          "
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
            @click="removeRecommended(index)"
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
          @click="addRecommended"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CaseDetailsComponent } from '~/components/admin/widgets/component/AddPageComponent/types'
import { getErrorByPath } from '~/components/admin/shared/libs/helpers'

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

const addBenefits = () => {
  ;(data.components[j.value].props as CaseDetailsComponent).benefits.push('')
}

const removeBenefits = (index: number) => {
  ;(data.components[j.value].props as CaseDetailsComponent).benefits.splice(index, 1)
}
const addNegative = () => {
  ;(data.components[j.value].props as CaseDetailsComponent).negative.push('')
}

const removeNegative = (index: number) => {
  ;(data.components[j.value].props as CaseDetailsComponent).negative.splice(index, 1)
}
const addRecommended = () => {
  ;(data.components[j.value].props as CaseDetailsComponent).recommended.push('')
}

const removeRecommended = (index: number) => {
  ;(data.components[j.value].props as CaseDetailsComponent).recommended.splice(index, 1)
}

const data = inject<any>('data')
</script>
