<template>
  <div class="consult-link">
    <button @click="showModal = true">
      <slot />
    </button>
  </div>
  <PublicWidgetsCommonFormModal v-model:show-modal="showModal" />
</template>

<script setup lang="ts">
const showModal = ref(false)

</script>

<style lang="scss" scoped>
.consult-link {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #da582d;
  text-align: center;
  color: white;
  padding: 20px 40px;
  border: 1px solid #fff;
  border-radius: 20px;
  cursor: pointer;

  button {
    @include reset-button;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
}
</style>