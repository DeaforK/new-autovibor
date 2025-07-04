<template>
  <div class="container">
    <h2>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ ПО ОБЪЯВЛЕНИЮ</h2>

    <p>
      <br>
      Выбираете автомомбиль самостоятельно? Сомневаетесь, стоит ли смотреть авто? Направьте ссылку
      на объявение экспетрам компании «АвтоВыбор». Наша команда абсолютно бесплатно проанализирует
      объявление, ведь мы знаем, на что именно нужно обращать внимание.
    </p>

    <p>
      Это первоначальный и не менее важный этап, на котором уже можно сделать вывод, стоит ли
      рассматривать такой автомомбль к приобретению.
    </p>

    <br>

    <q-form @submit="onSubmit">
      <div class="input">
        <PublicSharedUiBaseInput
          v-model="data.name"
          :error-message="errors['name']"
          :error="!!errors['name']"
          label="Ваше имя*"
          label-color="white"
          standout
          color="primary"
          bg-color="grey-6"
          :input-style="{ color: 'white' }"
          @update:model-value="errors['name'] = ''"
        >
          <template #prepend>
            <q-icon
              name="person"
              color="white"
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
          label="Ваш телефон*"
          label-color="white"
          standout
          color="primary"
          bg-color="grey-6"
          :input-style="{ color: 'white' }"
          @update:model-value="errors['phone'] = ''"
        >
          <template #prepend>
            <q-icon
              name="phone"
              color="white"
            />
          </template>
        </PublicSharedUiBaseInput>

        <PublicSharedUiBaseInput
          v-model="data.carUrl"
          :error-message="errors['carUrl']"
          :error="!!errors['carUrl']"
          label="Ссылка на авто*"
          label-color="white"
          standout
          color="primary"
          bg-color="grey-6"
          :input-style="{ color: 'white' }"
          @update:model-value="errors['carUrl'] = ''"
        >
          <template #prepend>
            <q-icon
              name="link"
              color="white"
            />
          </template>
        </PublicSharedUiBaseInput>
      </div>

      <div class="submit">
        <q-toggle
          v-model="agreement"
          color="white  "
          label-color="white"
          label="Я согласен с условиями обработки моих персональных данных"
        />

        <p>Менеджер приступит к анализу вашего запроса и свяжется с Вами в ближайшее время</p>

        <div class="btn-wrapper">
          <PublicSharedUiWhiteButton
            :disabled="agreement !== true"
            type="submit"
            :loading="componentLoading"
          >
            Отправить заявку
          </PublicSharedUiWhiteButton>
        </div>
      </div>
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
  carUrl: '',
  fromPage: route.fullPath
})

const errors = reactive({
  name: '',
  phone: '',
  carUrl: ''
}) as UnwrapNestedRefs<Record<string, any>>

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/requestForm/specialRequest/checkUrl', {
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
      ;(data.name = ''), (data.phone = ''), (data.carUrl = '')
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
.container {
  background: url('/images/modal_bg.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  color: white;
  gap: 20px;

  h2 {
    font-weight: bold;
    font-size: 33px;
    line-height: 44px;
    margin-bottom: 0px;
    text-align: center;

    @include more-than-small-mobile {
      font-size: 1.6rem;
    }

    @include more-than-mobile {
      font-size: 33px;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    @include more-than-tablet {
      max-width: 50%;
      margin: 0 auto;
    }
  }

  form {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;

    .input {
      display: flex;
      gap: 30px;
      @include more-than-small-mobile {
        flex-direction: column;
      }

      @include more-than-tablet {
        flex-direction: row;
      }
    }

    .submit {
      display: flex;
      flex-direction: column;
      gap: 20px;
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
}
</style>
