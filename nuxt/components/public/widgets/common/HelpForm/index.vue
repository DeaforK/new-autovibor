<template>
  <div class="help_form">
    <h1>Автопомощь на дороге</h1>
    <q-form
      class=""
      @submit="onSubmit"
    >
      <div class="help_form__grid">
        <div class="help_form__grid__input_small">
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
        </div>

        <div class="help_form__grid__input_small">
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

      <div style="margin-bottom: 20px; align-self: center">
        <span style="margin-bottom: 30px">
          <q-toggle
            v-model="agreement"
            color="primary"
            keep-color
            style="align-self: center"
          />

          <span style="color: white; text-align: center">Я согласен с условиями обработки моих персональных данных</span>
        </span>
      </div>

      <p class="helpForm__description">
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

const agreement = ref(true)

const route = useRoute()

const { notify } = useQuasar()

const componentLoading = ref(false)

const data = reactive({
  name: '',
  phone: '',
  fromPage: route.fullPath
})
const errors = reactive({
  name: '',
  phone: ''
}) as UnwrapNestedRefs<Record<string, any>>

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/requestForm/specialRequest/help', {
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
      ;(data.name = ''), (data.phone = '')
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
.helpForm__description {
  color: #fff;
  font-size: 14px;
  text-align: center;
}

.help_form {
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
    overflow-wrap: break-word;
    hyphens: manual;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include more-than-tablet {
      max-width: 70%;
      margin: 0 20%;
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
