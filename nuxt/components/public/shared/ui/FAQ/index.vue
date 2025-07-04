<template>
  <div class="faq-container">
    <h2>Часто задаваемые вопросы</h2>
    <div class="faq-container-questions">
      <q-expansion-item
        v-for="(item, index) in questions"
        :key="index"
        class="shadow-1 overflow-hidden"
        group="faq"
        style="border-radius: 30px; margin-bottom: 10px"
        expand-icon-class="text-primary"
        :header-style="{ fontWeight: 'bold' }"
        :label="item.question"
      >
        <q-card>
          <q-card-section>
            <p v-html="item.answer" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data } from './data'

const questions = data.map((question) => {
  return { ...question, isOpen: false }
})
</script>

<style lang="scss">

.faq-container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto !important;
  @include more-than-tablet {
    max-width: 60%;
  }
  h2 {
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    overflow-wrap: break-word;
    @include more-than-tablet {
      font-size: 36px;
      line-height: 44px;
    }
  }

  &-questions {
    margin-top: 40px;
  }
}
</style>
