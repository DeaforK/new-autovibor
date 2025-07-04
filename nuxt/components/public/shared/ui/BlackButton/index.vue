<template>
  <q-btn
    class="pulsing-button"
    :to="to"
    :href="href"
    :target="target"
  >
    <slot />
  </q-btn>
</template>

<script setup lang="ts">
type Props = {
  to?: string
  href?: string
  target?: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>


.pulsing-button {
  a:visited,
  a:link {
    @include reset-link;
  }

  cursor: pointer;
  width: max-content;
  text-align: center;
  white-space: nowrap;
  border: none;
  min-height: 45px;
  padding: 0px 30px;
  border-radius: 20px;
  background-color: $accent;
  transition: all 300ms ease-in-out;
  font-size: 11px;
  font-weight: bold;
  text-decoration: none !important;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
