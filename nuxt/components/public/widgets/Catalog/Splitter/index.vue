<template>
  <div
    class="overflow-hidden"
    style="width: 100%"
  >
    <q-resize-observer
      :debounce="0"
      @resize="onResize"
    />

    <q-splitter
      id="photos"
      v-model="splitterModel"
      :limits="[0, 100]"
      :style="splitterStyle"
      before-class="overflow-hidden"
      after-class="overflow-hidden"
    >
      <template #before>
        <img
          :src="`/${images[0]}`"
          :width="width"
          class="absolute-top-left"
        >
      </template>

      <template #separator>
        <q-avatar
          color="primary"
          text-color="white"
          size="40px"
          icon="drag_indicator"
        />
      </template>

      <template #after>
        <img
          :src="`/${images[1]}`"
          :width="width"
          class="absolute-top-right"
        >
      </template>
    </q-splitter>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  images: string[]
}

const { images } = defineProps<Props>()

const width = ref('100%')
const splitterModel = ref(50)
const splitterStyle = computed(() => ({
  height: Math.min(800, 0.66 * parseFloat(width.value)) + 'px',
  width: width.value
}))
const onResize = function (info: { width: string; height: number }) {
  width.value = info.width
}
</script>
