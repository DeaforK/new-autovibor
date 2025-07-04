<template>
  <div
    v-for="item in props"
    :key="item.id"
    class="reasons"
  >
    <b>0{{ item.id }}</b>

    <div class="reasons__round">
      <q-img
        :src="item.image"
        style="max-width: 60px; max-height: 60px"
        :alt="item.header"
      />
    </div>

    <h3>{{ item.header }}</h3>

    <p>
      {{ item.body }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  props: { id: number; image: string; header: string; body: string }[]
}

const { props } = defineProps<Props>()
</script>

<style scoped lang="scss">
.reasons {
  margin: 0 auto;
  max-width: 90%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include more-than-tablet{
  max-width: 100%;
  }

  b {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #e15a2b;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    line-height: 170%;
    text-align: center;
    margin-top: 20px;
  }

  &__round {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 20px auto;
    background: #242424;
    box-shadow: 0px 7px 34px rgba(0, 0, 0, 0.09);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
}
</style>
