<template>
  <q-page class="w100">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 pa-8">
        <CacheWidget />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import isLogin from '~/components/admin/middleware/isLogin'
import CacheWidget from '~/components/admin/widgets/CacheWidget.vue'

definePageMeta({
  layout: 'panel',
  middleware: [isLogin]
})

useSeoMeta({
  title: 'Панель'
})
</script>