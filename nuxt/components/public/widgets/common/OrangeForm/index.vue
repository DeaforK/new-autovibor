<template>
  <form @submit.prevent.stop="onSubmit">
    <div class="input red-error">
      <PublicSharedUiBaseInput
        v-model="data.name"
        :error-message="errors['name']"
        :error="!!errors['name']"
        bootom-slots
        label-slot
        standout
        color="primary"
        bg-color="white"
        :input-style="{ color: 'grey-6' }"
        @update:model-value="errors['name'] = ''"
      >
        <template #label>
          <span class="text-grey-6">Ваше имя*</span>
        </template>
        <template #prepend>
          <q-icon
            name="person"
            color="grey-6"
          />
        </template>
      </PublicSharedUiBaseInput>

      <PublicSharedUiBaseInput
        v-model="data.phone"
        :error-message="errors['phone']"
        :error="!!errors['phone']"
        type="tel"
        mask="+7 (###) ### ## ##"
        placeholder="+7 (___) ___ __ __"
        label="Ваш телефон"
        label-slot
        standout
        color="primary"
        bg-color="white"
        :input-style="{ color: 'grey-6' }"
        @update:model-value="errors['phone'] = ''"
      >
        <template #label>
          <span class="text-grey-6">Ваш телефон*</span>
        </template>
        <template #prepend>
          <q-icon
            name="phone"
            color="grey-6"
          />
        </template>
      </PublicSharedUiBaseInput>

      <PublicSharedUiBaseInput
        v-model="data.message"
        label-slot
        standout
        type="textarea"
        color="primary"
        bg-color="white"
        :input-style="{ color: 'grey-6' }"
        :error-message="errors['message']"
        :error="!!errors['message']"
        @update:model-value="errors['message'] = ''"
      >
        <template #label>
          <span class="text-grey-6">{{ label || 'Описание задачи' + "*" }}</span>
        </template>
        <template #prepend>
          <q-icon
            name="email"
            color="grey-6"
          />
        </template>
      </PublicSharedUiBaseInput>
    </div>

    <div class="submit">
      <span style="margin-bottom: 20px">
        <q-toggle
          v-model="agreement"
          color="white"
          keep-color
          style="align-self: center"
        />
        <span style="color: white; text-align: center">Я согласен с условиями обработки моих персональных данных</span>
      </span>

      <p class="orangeForm__description">
        Менеджер приступит к анализу вашего запроса и свяжется с Вами в ближайшее время
      </p>

      <div class="btn-wrapper">
        <PublicSharedUiWhiteButton
          :disabled="agreement !== true"
          type="submit"
          :loading="componentLoading"
        >
          Отправить заявку
        </PublicSharedUiWhiteButton>

        <PublicSharedUiWhiteButton
          :disabled="agreement !== true"
          @click="whatsapp"
        >
          Написать в  WhatsApp
        </PublicSharedUiWhiteButton>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { type UnwrapNestedRefs } from 'vue'
import { apiFetch } from '~/extensions/fetch'
import { useRoute } from 'vue-router'

interface Props {
  label?: string
}
const { label } = defineProps<Props>()

const route = useRoute()

const { notify } = useQuasar()

const agreement = ref(true)

const componentLoading = ref(false)

const data = reactive({
  name: '',
  phone: '',
  message: '',
  task: 'консультацию',
  fromPage: route.fullPath
})

const errors = reactive({
  name: '',
  phone: '',
  message: ''
}) as UnwrapNestedRefs<Record<string, any>>

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/requestForm/', {
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
      ;(data.name = ''), (data.phone = ''), (data.message = '')
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

function whatsapp() {
  window.open('https://wa.me/79676303003', '_blank')
}
</script>

<style lang="scss" scoped>
.orangeForm__description {
  font-size: 14px;
  margin-bottom: 20px;
  color: #fff;
}

form {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;

  .input {
    display: flex;
    gap: 10px;
    @include more-than-small-mobile {
      flex-direction: column;
    }
  }
  .submit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btn-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
}
</style>

<style lang="scss">
.red-error {
  .q-field--error .q-field__bottom {
    color: #000000;
  }
  .text-negative {
    color: #000000 !important;
}
}
</style>
