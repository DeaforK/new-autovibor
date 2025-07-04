<template>
  <div>
    <q-expansion-item
      v-for="(item, index) in content"
      :key="index"
      class="shadow-1 overflow-hidden"
      group="data"
      style="border-radius: 30px; margin-bottom: 20px"
      expand-icon-class="text-primary"
      :header-style="{ fontWeight: 'bold', fontSize: '18px', padding: '20px' }"
      :label="item.title"
    >
      <q-card>
        <q-card-section style="padding: 20px">
          <div v-html="item.description" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
interface Props {
  content: {
    title: string
    description: string
  }[]
}

const { content } = defineProps<Props>()
</script>

<style lang="scss" scoped></style>
