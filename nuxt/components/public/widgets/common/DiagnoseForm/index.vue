<template>
  <div class="diagnose_form">
    <h2>
      Бесплатная проверка авто по<br>
      нашей базе
    </h2>

    <p>
      Ежемесячно наша команда проверяет не менее 100 автомобилей, и мы сохраняем все отчеты.
      Возможно, ваше авто уже проверено. Тогда вы получите готовый отчет бесплатно.
    </p>

    <q-form @submit="onSubmit">
      <div class="diagnose_form__grid">
        <div class="diagnose_form__grid__input_small">
          <PublicSharedUiBaseInput
            v-model="data.VIN"
            :error-message="errors['VIN']"
            :error="!!errors['VIN']"
            label="VIN"
            mask="XXXXXXXXXXXXXXX"
            bg-color="grey-9"
            :input-style="{ color: '#818181' }"
            @update:model-value="errors['VIN'] = ''"
          >
            <template #label>
              <span class="text-grey-6">VIN*</span>
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

        <div class="diagnose_form__grid__input_small">
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
              <span class="text-grey-6">ФИО*</span>
            </template>
          </PublicSharedUiBaseInput>

          <PublicSharedUiBaseInput
            v-model="data.email"
            :error-message="errors['email']"
            :error="!!errors['email']"
            label="Ваша почта"
            bg-color="grey-9"
            :input-style="{ color: '#818181' }"
            @update:model-value="errors['email'] = ''"
          >
            <template #label>
              <span class="text-grey-6">Ваша почта*</span>
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

      <p>Менеджер приступит к анализу вашего запроса и свяжется с Вами в ближайшее время</p>

      <PublicSharedUiPrimaryButton
        :disabled="agreement !== true"
        type="submit"
        :loading="componentLoading"
        style="align-self: center"
      >
        Сэкономить деньги
      </PublicSharedUiPrimaryButton>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { type UnwrapNestedRefs } from 'vue'
import { apiFetch } from '~/extensions/fetch'
import { useRoute } from 'vue-router'

const agreement = ref(true)

const { notify } = useQuasar()

const route = useRoute()

const componentLoading = ref(false)

const data = reactive({
  name: '',
  phone: '',
  email: '',
  VIN: '',
  fromPage: route.fullPath
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  VIN: ''
}) as UnwrapNestedRefs<Record<string, any>>

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/requestForm/specialRequest/checkVIN', {
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
      ;(data.name = ''), (data.phone = ''), (data.VIN = ''), (data.email = '')
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
.diagnose_form {
  background: url('/images/modal_bg.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;

  @include more-than-small-mobile {
    padding: 10px;
  }

  @include more-than-mobile {
    padding: 30px;
  }

  h2 {
    color: white;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    padding: 40px 0;
    text-align: center;
  }
  p {
    font-size: 16px;
    line-height: 170%;
    color: white;
    text-align: center;
    padding-bottom: 40px;
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
      max-width: 80%;
      margin: 0 10%;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @include more-than-tablet {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    &__input_small {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
