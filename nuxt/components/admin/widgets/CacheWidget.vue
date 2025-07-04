<template>
  <q-card class="bg-panel-primary text-white">
    <q-card-section>
      <div class="text-h6">
        Менеджер кеша
      </div>
      <div class="text-subtitle2">
        Очистите кеш, если требуется
      </div>
    </q-card-section>

    <q-card-section>
      Кеш создается автоматически, кеш удаляется автоматически при изменении/создании/удалении сущностей. Кешируемые сущности: страницы.
    </q-card-section>

    <q-separator dark />

    <q-card-actions>
      <q-btn
        color="white"
        flat
        :loading="componentLoading"
        @click="action"
      >
        Очистить
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { apiFetch } from '~/extensions/fetch'

const { notify } = useQuasar()

const componentLoading = ref(false)

const action = async () => {
  componentLoading.value = true

  await apiFetch('/api/admin/cache', {
    method: 'delete'
  })
    .then((result: any) => {
      notify({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: result.message || 'Успех'
      })
    })
    .catch((err) => {
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