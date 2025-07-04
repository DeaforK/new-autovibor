<template>
  <q-btn class="pulsing-button">
    <slot />
  </q-btn>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>

.pulsing-button {
  a:visited,
  a:link {
    @include reset-link;
  }

  cursor: pointer;
  min-height: 45px;
  white-space: nowrap;
  border: none;
  width: max-content;
  padding: 0px 30px;
  border-radius: 70px;
  background-color: white;
  font-size: 11px;
  text-decoration: none !important;
  color: #e15a2b;
  font-weight: bold;
  line-height: 129%;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>
