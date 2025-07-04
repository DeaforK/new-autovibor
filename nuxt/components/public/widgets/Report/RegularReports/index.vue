<template>
  <PublicSharedUiOrangeWrapper class="orange_wrapper_flex">
    <div class="orange_wrapper_flex__container">
      <q-img
        :src="'/images/iphone.png'"
        class="icon-phone"
        style="max-width: 20%"
      />

      <div>
        <h2 v-text="props.title" />
        <p v-text="props.description" />

        <PublicSharedUiSocialLinks />

        <div class="orange_wrapper_flex__container__button_wrapper">
          <PublicSharedUiWhiteButton @click="showModal = true">
            Оставить заявку
          </PublicSharedUiWhiteButton>
        </div>
      </div>
    </div>
  </PublicSharedUiOrangeWrapper>

  <PublicWidgetsCommonFormModal v-model:showModal="showModal" />
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Регулярные отчеты удобным для вас способом!',
  description:
    'Вы будете получать регулярные, детальные отчеты с указанием всех плюсов и минусов по авто. Помимо этого, каждый отчет сопровождается фотографиями, видеозаписью и текстовым описанием проведенной проверки. Все это для того, чтобы Вы могли наглядно видеть работу по вашему новому автомобилю.'
})

const showModal = ref(false)
</script>

<style lang="scss" scoped>


.orange_wrapper_flex {
  &__container {
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    @include more-than-tablet {
      flex-wrap: nowrap;
      max-width: 80%;
    }

    .icon-phone {
      display: none;
      @include more-than-laptop {
        display: block;
      }
    }

    img {
      max-width: 80%;
    }

    h2 {
      font-weight: bold;
      line-height: 39px;
      margin-bottom: 20px;
      text-align: center;
      max-width: 100%;
      margin: 0 auto;

      @include more-than-small-mobile {
        font-size: 28px;
        max-width: 100%;
        margin: 0 auto;
      }

      @include more-than-tablet {
        font-size: 32px;
        text-align: left;
      }
    }

    p {
      font-size: 18px;
      line-height: 170%;
      margin-bottom: 20px;
      text-align: center;
      @include more-than-tablet {
        text-align: left;
        max-width: 70%;
      }
    }

    &__button_wrapper {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;

      @include more-than-tablet {
        flex-wrap: nowrap;
        justify-content: flex-start;
      }
    }
  }
}
</style>
