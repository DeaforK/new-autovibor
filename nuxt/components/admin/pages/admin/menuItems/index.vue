<template>
  <q-page class="w100">
    <q-table
      v-model:selected="selected"
      flat
      bordered
      title="Страницы"
      row-key="menuItemId"
      hide-pagination
      no-data-label="Данные отсутствуют"
      loading-label="Загрузка..."
      selection="multiple"
      :selected-rows-label="(numberOfRows: number) => `Выбрано ${numberOfRows} шт.`"
      :rows="data.rows"
      :columns="columns"
      :rows-per-page-options="[10]"
      :loading="componentLoading"
      @row-click="rowClick"
    >
      <template #top-right>
        <q-btn
          class="mr-4"
          round
          flat
          icon="add"
          @click="router.push('/admin/menuItem/create')"
        />

        <q-btn
          round
          flat
          icon="more_vert"
          :loading="componentLoading"
        >
          <q-menu>
            <q-list style="min-width: 135px">
              <q-item
                v-close-popup
                clickable
                @click="router.push('/admin/menuItem/create')"
              >
                <q-item-section>Добавить</q-item-section>
              </q-item>
              <q-separator />
              <q-item
                v-close-popup
                clickable
                @click="deleteDialog = true"
              >
                <q-item-section>Удалить</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </template>
    </q-table>

    <div class="row justify-center mt-16">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        size="sm"
        boundary-numbers
        :max="pagination.max"
        :max-pages="6"
        @update:model-value="updatePagination"
      />
    </div>

    <q-dialog v-model="deleteDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">
            Вы уверены?
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Выбранные элементы будут удалены без возможности восстановления.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            flat
            label="Отмена"
            color="panel-primary"
          />
          <q-btn
            v-close-popup
            flat
            label="Удалить"
            color="negative"
            @click="doDelete"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { apiFetch } from '~/extensions/fetch'
import isLogin from '~/components/admin/middleware/isLogin'
import { viewDate } from '~/components/admin/shared/libs/helpers'

definePageMeta({
  layout: 'panel',
  middleware: [isLogin]
})

useSeoMeta({
  title: 'Меню'
})

const router = useRouter()
const { notify } = useQuasar()

const columns: any = [
  {
    name: 'ID',
    align: 'center',
    label: 'ID',
    field: 'menuItemId',
    sortable: true
  },
  {
    name: 'Заголовок',
    align: 'center',
    label: 'Заголовок',
    field: 'title',
    sortable: false
  },
  {
    name: 'Ссылка',
    align: 'center',
    label: 'Ссылка',
    field: 'url',
    sortable: false
  },
  {
    name: 'Родитель',
    align: 'center',
    label: 'Родитель',
    field: (row: any) => row.parentInfo?.title,
    sortable: false
  },
  {
    name: 'Порядок',
    align: 'center',
    label: 'Порядок',
    field: 'orderBy',
    sortable: false
  },
  {
    name: 'Активность',
    align: 'center',
    label: 'Активность',
    field: (row: any) => {
      return row.isActive ? 'Да' : 'Нет'
    },
    sortable: false
  },
  {
    name: 'Дата создания',
    align: 'center',
    label: 'Дата создания',
    field: (row: any) => viewDate(row.createdAt),
    sortable: false
  },
  {
    name: 'Дата редактирования',
    align: 'center',
    label: 'Дата редактирования',
    field: (row: any) => viewDate(row.updatedAt),
    sortable: false
  }
]

const data = ref({
  rows: [],
  count: 0
})

const componentLoading = ref(false)
const deleteDialog = ref(false)

const pagination = ref({
  page: 1,
  max: 0
})

const selected = ref([])

const rowClick = (_evt: any, row: any) => {
  router.push(`/admin/menuItem/${row.menuItemId}`)
}

const updatePagination = () => {
  loadData()
}

const loadData = async () => {
  componentLoading.value = true

  await apiFetch(`/api/admin/menuItems/${pagination.value.page}`)
    .then((result: any) => {
      pagination.value.max = Math.ceil(result.count / 10)
      data.value = result
    })
    .catch(err => {
      notify({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        message: err.message || 'Упс, произошла ошибка'
      })
    })

  componentLoading.value = false
}

const doDelete = async () => {
  componentLoading.value = true

  const menuItemsIds = selected.value.map((row: any) => row.menuItemId)

  await apiFetch('/api/admin/menuItems/destroy', {
    method: 'post',
    body: {
      menuItemsIds
    }
  })
    .then((result: any) => {
      notify({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: result.message || 'Успех'
      })

      loadData()
      selected.value = []
    })
    .catch(err => {
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
  loadData()
})
</script>
