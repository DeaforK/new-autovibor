<template>
  <div
    v-for="item in content"
    :key="item.title"
    class="insurance-content"
  >
    <h2>{{ item.title }}</h2>

    <h3 v-if="item.subTitle">
      {{ item.subTitle }}
    </h3>

    <div v-html="item.body" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  content: { title: string; subTitle?: string; body: string }[]
}

const { content } = defineProps<Props>()
</script>

<style lang="scss">

.insurance-content {
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    overflow-wrap: break-word;
    hyphens: manual;
    max-width: 90%;
    margin: 0 auto;
    @include more-than-tablet {
      max-width: 50%;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    overflow-wrap: break-word;
    hyphens: manual;
    max-width: 90%;
    margin: 0 auto;
    @include more-than-tablet {
      max-width: 50%;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    padding: 15px 0;
    text-align: left;
    @include more-than-tablet {
      max-width: 80%;
      margin: 0 auto;
    }
  }

  ul {
    padding-left: 50px;
    padding-bottom: 20px;
    li {
      margin-bottom: 10px;
      font-size: 16px;
    }
    @include more-than-tablet {
      text-align: left;
      max-width: 80%;
      margin: 0 auto;
      margin-top:15px;
    }
  }
}
</style>
