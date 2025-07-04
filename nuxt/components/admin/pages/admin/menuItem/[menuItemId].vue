<template>
  <q-page class="w100">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.title"
            label="Заголовок"
            color="panel-primary"
            :error-message="errors['title']"
            :error="!!errors['title']"
            @update:model-value="errors['title'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.url"
            label="Ссылка"
            color="panel-primary"
            :error-message="errors['url']"
            :error="!!errors['url']"
            @update:model-value="errors['url'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.orderBy"
            label="Порядок"
            type="number"
            color="panel-primary"
            :error-message="errors['orderBy']"
            :error="!!errors['orderBy']"
            @update:model-value="errors['orderBy'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <QSelect
            v-model="data.parentId"
            label="Родительская страница"
            clearable
            emit-value
            map-options
            :options="parents"
            option-value="menuItemId"
            option-label="title"
            color="panel-primary"
            :error-message="errors['parentId']"
            :error="!!errors['parentId']"
            @update:model-value="errors['parentId'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8 flex">
          <q-toggle
            v-model="data.isActive"
            size="md"
            color="panel-primary"
            :true-value="true"
            :false-value="false"
            val="lg"
            label="Активен"
          />
        </div>
      </div>

      <div class="mt-16 pa-8">
        <q-btn
          label="Сохранить"
          type="submit"
          color="panel-primary"
          :loading="componentLoading"
        />
        <q-btn
          label="Назад"
          color="panel-primary"
          flat
          class="q-ml-sm"
          :loading="componentLoading"
          @click="router.push('/admin/menuItems')"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { apiFetch } from '~/extensions/fetch'
import isLogin from '~/components/admin/middleware/isLogin'
import isEntityExists from '~/components/admin/middleware/isEntityExists'
import { type UnwrapNestedRefs } from 'vue'

definePageMeta({
  layout: 'panel',
  middleware: [isLogin, isEntityExists('menuItem', 'menuItemId')]
})

useSeoMeta({
  title: 'Меню'
})

const router = useRouter()
const route = useRoute()
const { notify } = useQuasar()

const data = reactive({
  menuItemId: null,
  title: '',
  url: '',
  parentId: null,
  orderBy: '',
  isActive: true
})

const errors = reactive({
  title: '',
  url: '',
  parentId: null
}) as UnwrapNestedRefs<Record<string, any>>

const parents = ref([])

const init = async () => {
  const { menuItem, parentPages } = (await apiFetch(
    `/api/admin/menuItem/${route.params.menuItemId}`
  )) as any
  if (menuItem) {
    data.menuItemId = menuItem.menuItemId
    data.title = menuItem.title
    data.url = menuItem.url
    data.parentId = menuItem.parentId
    data.orderBy = menuItem.orderBy
    data.isActive = menuItem.isActive
  }
  parents.value = parentPages.filter(
    (parent: any) => parent.menuItemId !== menuItem?.menuItemId && parent.parentId === null
  )
}

const componentLoading = ref(false)

const onSubmit = async () => {
  const body = { ...data }

  componentLoading.value = true

  await apiFetch('/api/admin/menuItem', {
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
      router.push('/admin/menuItems')
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

onMounted(() => {
  init()
})

onUnmounted(() => {})
</script>
