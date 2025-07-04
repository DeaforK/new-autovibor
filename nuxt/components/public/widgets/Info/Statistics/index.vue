<template>
  <PublicSharedUiOrangeWrapper style="padding: 40px 0px">
    <div class="container__statistics">
      <div
        v-for="item in statistics"
        :key="item.name"
        class="container__statistics__wrapper"
      >
        <h3>
          <PublicSharedUiAnimateNumber
            :number="item.value"
            :ms="item.ms"
          />
          {{ item.prefix || '' }}
        </h3>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </PublicSharedUiOrangeWrapper>
</template>

<script lang="ts" setup>
interface Props {
  statistics: {
    name: string
    value: number
    prefix?: string | undefined
    ms: number
  }[]
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  margin: 0 auto;

  &__statistics {
    display: flex;
    font-family: "Montserrat";
    @include more-than-tablet {
      align-items: flex-start;
    }

    @include more-than-small-mobile {
      gap: 30px;
    }

    @include more-than-desktop {
      gap: 50px;
    }
    h3,
    span {
      text-align: center;
      color: white;
    }

    h3 {
      font-size: 40px;
      line-height: 35px;
      font-weight: bold;

      margin-bottom: 20px;
    }

    span {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
    }

    @include more-than-small-mobile {
      flex-direction: column;
    }
    @include more-than-tablet {
      flex-direction: row;
      justify-content: center;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin: 0 auto;
      max-width: 90%;
    }
  }
}
</style>
