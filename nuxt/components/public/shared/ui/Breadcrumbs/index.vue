<template>
  <nav>
    <ul>
      <li
        v-for="(item, idx) in breadcrumbs"
        :key="item.label"
      >
        <NuxtLink
          v-if="idx + 1 !== breadcrumbs.length"
          :to="item.to"
        >
          {{ item.label }}
        </NuxtLink>
        <a v-else>
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
type Props = {
  breadcrumbs: Array<{
    label: string,
    to: string
  }>
}

defineProps<Props>()

</script>

<style lang="scss" scoped>
nav {
  @include more-than-small-mobile {
    text-align: center;
  }

  @include more-than-mobile {
    text-align: left;
    margin-left: 40px;
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
    padding-bottom: 50px;
    margin: 0 auto;
    width: 100%;

    li {
      display: inline;
    }

    li+li:before {
      padding: 8px;
      color: white;
      content: '/\00a0';
    }
  }
}
</style>