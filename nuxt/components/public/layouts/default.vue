<template>
  <q-layout
    view="hHh lpR fFf"
    style="min-height: 100vh"
  >
    <div class="top_header">
      <PublicWidgetsLayoutHeaderDefault />
      <PublicWidgetsLayoutHeaderMobile />
    </div>
    <slot />
    <a
      href="https://wa.me/79676303003"
      target="_blank"
    >
      <img
        :src="'/images/layout/wa.png'"
        alt="whatsapp"
        class="whatsapp-button"
      >
    </a>
  </q-layout>
  <PublicWidgetsLayoutFooterDefault />
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'public'
  }
})
</script>

<style lang="scss" scoped>
.top_header {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: 30px;
  margin-right: 30px;
}

.mobile {
  @include more-than-desktop {
    display: none;
  }
}

.whatsapp-button {
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  z-index: 3000;
  width: 60px;
}

.mobile-address {
  &__phone {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  &__phone:visited,
  &__phone:link {
    @include reset-link;
  }

  &__working_hours {
    font-size: 12px;
    line-height: 15px;
    font-style: normal;
  }
}

</style>
