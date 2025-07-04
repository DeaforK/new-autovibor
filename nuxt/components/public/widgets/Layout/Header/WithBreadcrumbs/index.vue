<template>
  <div class="top_header">
    <PublicWidgetsLayoutHeaderDefault />
    <h1 class="top_header__title">
      {{ name }}
    </h1>
    <PublicSharedUiBreadcrumbs :breadcrumbs="breadcrumbs" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  breadcrumbs: {
    to: string,
    label: string
  }[],
  name?: string
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.top_header {
  background: url('/images/modal_bg.jpg') no-repeat center center;
  background-size: cover;
  padding: 0px 30px 50px 30px;

  &__title {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 600;
    line-height: 1.1;
    color: white;
    font-size: 36px;
    text-align: left;
    width: 100%;
    margin: 0 auto;
    padding-top: 60px;
    margin-top: 20px;
    text-wrap: wrap;
    text-align: center;

    @include more-than-mobile {
      width: 50%;
      margin-left: 60px;

      text-align: left;
    }
  }
  &__breadcrumbs {
    text-align: center;
    @include more-than-tablet {
      text-align: left;
      padding-left: 40px;
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
</style>
