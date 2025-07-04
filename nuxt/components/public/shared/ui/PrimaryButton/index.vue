<template>
  <q-btn
    :to="to"
    :href="href"
    :target="target"
    class="pulsing-button"
  >
    <slot />
  </q-btn>
</template>

<script lang="ts" setup>
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
  height: 45px;
  white-space: nowrap;
  text-wrap: wrap;
  border: none;
  width:fit-content;
  padding: 0px 20px;
  box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  border-radius: 70px;
  background-color: #da582d;
  animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  font-size: 11px;
  text-decoration: none !important;
  color: #ffffff;
  transition: all 300ms ease-in-out;
  font-weight: bold;
  line-height: 129%;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }
}
</style>
