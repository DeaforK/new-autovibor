<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = 'https://vk.com/js/api/openapi.js?169'
  script.onload = () => {
    // @ts-ignore
    VK.Retargeting.Init('VK-RTRG-123456-abcde')
    // @ts-ignore
    VK.Retargeting.Hit()
  }
  document.head.appendChild(script)

  const noscript = document.createElement('noscript')
  noscript.innerHTML =
    '<img src="https://vk.com/rtrg?p=VK-RTRG-123456-abcde" style="position:fixed; left:-999px;" alt=""/>'
  document.body.appendChild(noscript)
})
</script>
