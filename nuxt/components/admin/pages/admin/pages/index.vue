<template>
  <q-page class="w100">
    <q-table
      v-model:selected="selected"
      flat
      bordered
      title="Страницы"
      row-key="pageId"
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
        <q-select
          v-model="filterData.selectedPageType"
          class="mr-6 gt-sm filter-input"
          label="Тип"
          emit-value
          map-options
          dense
          outlined
          clearable
          :options="data.pageTypes"
          option-value="value"
          option-label="label"
          color="panel-primary"
          :loading="componentLoading"
        />

        <q-select
          v-model="filterData.selectedActivity"
          class="mr-6 gt-sm filter-input"
          label="Активность"
          emit-value
          map-options
          dense
          outlined
          clearable
          :options="activity"
          option-value="value"
          option-label="label"
          color="panel-primary"
          :loading="componentLoading"
        />

        <q-input
          v-model.trim="filterData.search"
          class="mr-6 gt-sm filter-input"
          dense
          outlined
          label="Поиск"
          color="panel-primary"
          debounce="500"
        />

        <q-btn
          class="mr-4"
          round
          flat
          icon="add"
          @click="router.push('/admin/page/create')"
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
                @click="router.push('/admin/page/create')"
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
  title: 'Страницы'
})

const router = useRouter()
const { notify } = useQuasar()

const activity = [
  {
    label: 'Да',
    value: true
  },
  {
    label: 'Нет',
    value: false
  }
]

const columns: any = [
  {
    name: 'ID',
    align: 'center',
    label: 'ID',
    field: 'pageId',
    sortable: true
  },
  {
    name: 'Название',
    align: 'center',
    label: 'Название',
    field: 'name',
    sortable: false
  },
  {
    name: 'Тип',
    align: 'center',
    label: 'Тип',
    field: (row: any) => {
      if (row.type === 'statment') {
        return 'Статья'
      } else if (row.type === 'catalogCar') {
        return 'Каталог'
      } else if (row.type === 'caseCar') {
        return 'Уже подобрали'
      } else if (row.type === 'video') {
        return 'Блог видео'
      } else if (row.type === 'shorts') {
        return 'Shorts'
      } else if (row.type === 'videoReviews') {
        return 'Видео отзывы'
      } else if (row.type === 'importedCars') {
        return 'Машины из за рубежа'
      }
    },
    sortable: false
  },
  {
    name: 'Активность',
    align: 'center',
    label: 'Активность',
    field: (row: any) => {
      return row.active ? 'Да' : 'Нет'
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
  count: 0,
  pageTypes: []
})
const componentLoading = ref(false)
const deleteDialog = ref(false)

const pagination = ref({
  page: 1,
  max: 0
})

const selected = ref([])

const filterData = reactive({
  search: '',
  selectedActivity: null,
  selectedPageType: null
})

watch(filterData, () => {
  loadData()
})

const rowClick = (_evt: any, row: any) => {
  router.push(`/admin/page/${row.pageId}`)
}

const updatePagination = () => {
  loadData()
}

const loadData = async () => {
  componentLoading.value = true

  let url = `/api/admin/pages/${pagination.value.page}`
  const body = {
    ...filterData
  }

  if (body.search && body.search.length > 25) {
    body.search = body.search.slice(0, 25)
  }

  await apiFetch(url, {
    method: 'post',
    body
  })
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

  const pageIds = selected.value.map((row: any) => row.pageId)

  await apiFetch('/api/admin/pages/destroy', {
    method: 'post',
    body: {
      pageIds
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

<style lang="scss" scoped>
.filter-input {
  min-width: 170px;
  @media (max-width: 1400px) {
    min-width: 140px;
    max-width: 140px;
  }
}
</style>

<style lang="scss">
.filter-input {
  & .q-field__control-container {
    & .q-field__native {
      & span {
        text-wrap: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
