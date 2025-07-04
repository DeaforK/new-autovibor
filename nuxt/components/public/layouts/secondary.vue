<template>
  <q-layout
    view="hHh lpR fFf"
    style="min-height: 100vh"
  >
    <PublicWidgetsLayoutHeaderMobile />
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
  background: url('/images/modal_bg.jpg') no-repeat center center;
  background-size: cover;
  @include more-than-small-mobile {
    padding: 0px 30px 20px 30px;
  }

  @include more-than-mobile {
    padding: 0 30px 20px 30px;
  }

  &__title {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 600;
    line-height: 1.1;
    color: white;
    font-size: 36px;
    text-align: left;
    width: 100%;
    margin: 0 auto;
    padding-top: 40px;
    margin-top: 20px;
    text-wrap: wrap;
    text-align: center;

    @include more-than-small-mobile {
      padding-top: 80px;
    }

    @include more-than-mobile {
      width: 50%;
      margin-left: 60px;

      text-align: left;
    }

    @include more-than-desktop {
      padding-top: 35px;
    }
  }

  &__breadcrumbs {
    text-align: center;
    @include more-than-mobile {
      text-align: left;
    }

    a {
      @include reset-link;
      color: white;
      font-weight: 500;
      line-height: 170%;
      margin-top: 1em;
      font-size: 14px;
      &:hover {
        color: $primary;
        text-decoration: underline;
      }
    }

    ul {
      @include reset-list;
      padding: 10px 16px;
      margin: 0 auto;
      width: 100%;

      li {
        display: inline;
      }

      li + li:before {
        padding: 8px;
        color: white;
        content: '/\00a0';
      }
    }
  }
}

.whatsapp-button {
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  width: 60px;
}

.mobile {
  @include more-than-desktop {
    display: none;
  }
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
