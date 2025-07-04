<template>
  <div class="catalog-side-list">
    <div
      v-for="(group, index) in groupedRatings"
      :key="`group-${index}`"
    >
      <ul>
        <li
          v-for="rate in group"
          :key="rate.id"
        >
          <span>{{ rate.label }} :</span><strong>{{ rate.value }}/10</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  rating: {
    id: number
    value: number | null
    label: string
  }[]
}
const { rating } = defineProps<Props>()
const groupedRatings = computed(() => {
  const groups = []
  if (rating) {
    for (let i = 0; i < rating?.length; i += 4) {
      groups.push(rating?.slice(i, i + 4))
    }
    return groups
  }
})
</script>

<style lang="scss">
.catalog-side-list {
  width: 100%;
  padding-top: 30px;
  ul {
    @include reset-list;
    display: grid;
    grid-template-columns: 1fr;
    @include more-than-laptop {
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      border-left: 3px solid $primary;
      padding: 0 5px;
    }
  }
}
</style>
