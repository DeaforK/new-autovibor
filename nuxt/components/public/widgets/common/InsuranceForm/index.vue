<template>
  <div class="insurance_form">
    <h1>{{ title }}</h1>
    <q-form @submit.prevent.stop="onSubmit">
      <PublicSharedUiBaseInput
        v-model="data.name"
        :error-message="errors['name']"
        :error="!!errors['name']"
        label="ФИО"
        bg-color="grey-9"
        :input-style="{ color: '#818181' }"
        @update:model-value="errors['name'] = ''"
      >
        <template #label>
          <span class="text-grey-6">Ваше имя*</span>
        </template>
      </PublicSharedUiBaseInput>

      <div class="insurance_form__grid">
        <div class="insurance_form__grid__input_small">
          <PublicSharedUiBaseInput
            v-model="data.brand"
            :error-message="errors['brand']"
            :error="!!errors['brand']"
            label="Марка а/м"
            bg-color="grey-9"
            :input-style="{ color: '#818181' }"
            @update:model-value="errors['brand'] = ''"
          >
            <template #label>
              <span class="text-grey-6">Марка а/м*</span>
            </template>
          </PublicSharedUiBaseInput>

          <PublicSharedUiBaseInput
            v-model="data.propiska"
            :error-message="errors['propiska']"
            :error="!!errors['propiska']"
            label=""
            bg-color="grey-9"
            :input-style="{ color: '#818181' }"
            @update:model-value="errors['propiska'] = ''"
          >
            <template #label>
              <span class="text-grey-6">{{ label || 'Прописка(область)' + '*' }}</span>
            </template>
          </PublicSharedUiBaseInput>
        </div>

        <div class="insurance_form__grid__input_small">
          <PublicSharedUiBaseInput
            v-model="data.yearOfManufacture"
            :error-message="errors['yearOfManufacture']"
            :error="!!errors['yearOfManufacture']"
            label="Год выпуска"
            mask="####"
            bg-color="grey-9"
            :input-style="{ color: '#818181' }"
            @update:model-value="errors['yearOfManufacture'] = ''"
          >
            <template #label>
              <span class="text-grey-6">Год выпуска*</span>
            </template>
          </PublicSharedUiBaseInput>

          <PublicSharedUiBaseInput
            v-model="data.phone"
            :error-message="errors['phone']"
            :error="!!errors['phone']"
            label="Ваш телефон"
            type="tel"
            mask="+7 (###) ### ## ##"
            placeholder="+7 (___) ___ __ __"
            bg-color="grey-9"
            :input-style="{ color: '#818181' }"
            @update:model-value="errors['phone'] = ''"
          >
            <template #label>
              <span class="text-grey-6">Ваш телефон*</span>
            </template>
          </PublicSharedUiBaseInput>
        </div>
      </div>

      <span style="margin-bottom: 20px; align-self: center">
        <q-toggle
          v-model="agreement"
          color="primary"
          keep-color
          style="align-self: center"
        />
        <span style="color: white; text-align: center">Я согласен с условиями обработки моих персональных данных</span>
      </span>

      <p class="insuranceForm__description">
        Менеджер приступит к анализу вашего запроса и свяжется с Вами в ближайшее время
      </p>

      <PublicSharedUiPrimaryButton
        :disabled="agreement !== true"
        type="submit"
        :loading="componentLoading"
        style="align-self: center"
      >
        отправить заявку
      </PublicSharedUiPrimaryButton>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { type UnwrapNestedRefs } from 'vue'
import { apiFetch } from '~/extensions/fetch'
import { useRoute } from 'vue-router'

interface Props {
  title: string
  label?: string
  type: string
}

const { title, label, type } = defineProps<Props>()

const route = useRoute()

const agreement = ref(true)

const { notify } = useQuasar()

const componentLoading = ref(false)

const data = reactive({
  name: '',
  brand: '',
  propiska: '',
  yearOfManufacture: '',
  phone: '',
  fromPage: route.fullPath,
  type
})

const errors = reactive({
  name: '',
  brand: '',
  propiska: '',
  yearOfManufacture: '',
  phone: ''
}) as UnwrapNestedRefs<Record<string, any>>

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/requestForm/specialRequest/insurance', {
    method: 'post',
    body
  })
    .then((result: any) => {
      notify({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: result.message || 'Успех'
      })
      ;(data.name = ''),
       (data.phone = ''),
       (data.brand = ''),
       (data.propiska = ''),
       (data.yearOfManufacture = '')
    })
    .catch(err => {
      for (const key in err.details) {
        errors[key] = err.details[key]
      }

      notify({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        message: err.message || 'Упс, произошла ошибка'
      })
    })
  componentLoading.value = false
}
</script>

<style lang="scss" scoped>
.insuranceForm__description {
  color: #fff;
  text-align: center;
  font-size: 14px;
}

.insurance_form {
  background-color: rgb(122, 122, 122);
  background: url('/images/modal_bg.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    padding: 40px;
    text-align: center;
    @include more-than-tablet {
      max-width: 50%;
      margin: 0 auto;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include more-than-tablet {
      margin: 0 20%;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    @include more-than-tablet {
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    &__input_small {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
