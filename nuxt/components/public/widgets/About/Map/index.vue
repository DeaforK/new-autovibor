<template>
  <div>
    <iframe
      :src="map"
      referrerpolicy="no-referrer-when-downgrade"
      class="map-frame"
      loading="lazy"
      width="100%"
      height="400px"
      style="border: 0px;"
    />
  </div>
</template>

<script setup lang="ts">
import { useInitStore } from '~/components/public/entities/initStore/model'

const { settingsMap } = useInitStore()
const map = settingsMap.get('mapLink')?.content ?? ''
</script>
