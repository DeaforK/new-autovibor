<template>
  <div>
    <h3>
      {{ title }}
    </h3>

    <div class="insurance_Benifits_container">
      <div class="img-cont">
        <img :src="img">
      </div>

      <div>
        <ul>
          <li
            v-for="(item, index) in data"
            :key="index"
          >
            <img
              :src="'/images/pointer.svg'"
              style="width: 35px; height: 35px;"
            >
            <span>
              {{ item }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  data: string[]
  img: string
}
const { title, data, img } = defineProps<Props>()
</script>

<style lang="scss" scoped>


h3 {
  text-align: center;
  font-weight: bold;
  font-size: 27px;
  line-height: 39px;
  overflow-wrap: break-word;
  hyphens: manual;
}

.insurance_Benifits_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px 40px;
  @include more-than-tablet {
    max-width: 75%;
    margin: 0 auto;
  }

  @include more-than-tablet {
    flex-direction: row;
  }

  .img-cont {
    width: 100%;
    @include more-than-tablet {
      width: 90%;
      margin: 0 auto;
    }
    img {
      width: 100%;
      vertical-align: middle;
      height: auto;
      border-radius: 20px;
    }
  }

  ul {
    margin-left: 15px;
    text-align: left;
    list-style-position: inside;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    li {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 20px;
      align-items: center;
      width: 100%;
      padding: 10px;
      font-weight: 300;
      line-height: 30px;
    }
  }
}
</style>
