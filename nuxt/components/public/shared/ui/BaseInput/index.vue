<template>
  <q-input
    rounded
    outlined
    label-color="white"
    :input-style="{ color: 'white' }"
    border-color="primary"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>

    <template
      v-if="has_Label"
      #label
    >
      <slot name="label" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
const slots = useSlots()
const has_Label = computed(() => !!slots.label)
const hasHint = computed(() => !!slots.hint)
</script>
