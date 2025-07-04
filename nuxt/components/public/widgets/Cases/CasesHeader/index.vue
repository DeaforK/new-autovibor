<template>
  <div class="top_header">
    <div class="top_header__head">
      <h1 class="top_header__head__title">
        Примеры наших работ
      </h1>
      <div class="top_header__head__breadcrumbs">
        <PublicSharedUiBreadcrumbs :breadcrumbs="crumbs" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Уже подобрали',
    to: '/cases'
  }
])
</script>

<style lang="scss" scoped>

.top_header {
  background: url('/images/modal_bg.jpg') no-repeat center center;
  background-size: cover;
  background-color: $primary;

  @include more-than-small-mobile {
    padding-top: 0px;
  }

  @include more-than-desktop {
    padding-top: 140px;
  }

  &__head {
    margin-top: 50px;
    padding-bottom: 30px;

    &__title {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 600;
      line-height: 1.1;
      color: white;
      font-size: 36px;
      text-align: left;
      width: 100%;
      padding-top: 60px;
      padding-bottom: 0;

      padding-left: 25px;
      text-wrap: wrap;
      text-align: center;

      @include more-than-mobile {
        width: 50%;
        margin-left: 60px;

        text-align: left;
      }
    }

    &__breadcrumbs {
      padding-left: 25px;
    }
  }
}
</style>
