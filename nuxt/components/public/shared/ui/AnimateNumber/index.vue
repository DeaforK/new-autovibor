<template>
  <q-scroll-observer />
  {{ displayNumber.toLocaleString() }}
</template>

<script lang="ts" setup>
type Props = {
  number: number
  ms: number
}

const props = withDefaults(defineProps<Props>(), {
  number: 0,
  ms: 50
})

const { number: rawNumber, ms } = toRefs(props)

const displayNumber = ref(0)
const interval = ref<ReturnType<typeof setTimeout> | number>()

onMounted(() => {
  animate()
})

const animate = () => {
  clearInterval(interval.value)

  if(props.number == displayNumber.value) {
    return false
  }

  interval.value = window.setInterval(() => {
    if(displayNumber.value != rawNumber.value) {
      var change = (rawNumber.value - displayNumber.value) / 10
      change = change >= 0 ? Math.ceil(change) : Math.floor(change)
      displayNumber.value = displayNumber.value + change
    }
  }, ms.value)
}
</script>