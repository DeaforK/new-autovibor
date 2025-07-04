<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Отзывы"
  />
  <div class="feedback_container">
    <h1>Отзывы об автоподборе у наших экспертов от клиентов</h1>
    <p>
      Отзывы могут сыграть решающую роль при выборе автоэксперта или организации автоподбора. Отзывы
      могут быть разными,но стоит рассматривать именно объективные отзывы. На данной странице
      собраны оснвные отзывы об автоподборе в Екатеринбурге в нашей компании "Автовыбор", .
      <br>
      <br>
      Основное внимание стоит обращать на отзывы, где решается именно ваша проблема, в вашем бюджете
      и примерно с вашей ситуацией.
      <br>
      <br>
      Если вы обращались к нам и также хотите оставить свой отзыв по нашей работе автоподбора в
      Екатеринбурге, то можете присылать нам или оставить на флампе по кнопке ниже.
    </p>
    <div class="feedback_container__videos">
      <div class="feedback_container__video">
        <div class="spinner">
          <q-spinner
            color="primary"
            size="3em"
          />
        </div>
        <iframe
          width="300"
          height="515"
          loading="lazy"
          src="https://vk.com/video_ext.php?oid=-129549043&id=456239677&hd=2&autoplay=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      <div class="feedback_container__video">
        <div class="spinner">
          <q-spinner
            color="primary"
            size="3em"
          />
        </div>
        <iframe
          width="300"
          height="515"
          loading="lazy"
          src="https://vk.com/video_ext.php?oid=-129549043&id=456239694&hd=2&autoplay=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>


      <div class="feedback_container__video">
        <div class="spinner">
          <q-spinner
            color="primary"
            size="3em"
          />
        </div>
        <iframe
          width="300"
          height="515"
          loading="lazy"
          src="https://vk.com/video_ext.php?oid=-129549043&id=456239708&hd=2&autoplay=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>


      <div class="feedback_container__video">
        <div class="spinner">
          <q-spinner
            color="primary"
            size="3em"
          />
        </div>
        <iframe
          width="300"
          loading="lazy"
          height="515"
          src="https://vk.com/video_ext.php?oid=-129549043&id=456239713&hd=2&autoplay=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>


      <div class="feedback_container__video">
        <div class="spinner">
          <q-spinner
            color="primary"
            size="3em"
          />
        </div>
        <iframe
          width="300"
          height="515"
          loading="lazy"
          src="https://vk.com/video_ext.php?oid=-129549043&id=456239715&hd=2&autoplay=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      <div class="feedback_container__video">
        <div class="spinner">
          <q-spinner
            color="primary"
            size="3em"
          />
        </div>
        <iframe
          width="300"
          height="515"
          loading="lazy"
          src="https://vk.com/video_ext.php?oid=-129549043&id=456239726&hd=2&autoplay=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin: 50px 40px; margin-bottom: 0">
      <PublicSharedUiPrimaryButton style="padding: 10px">
        <a href="https://ekaterinburg.flamp.ru/firm/avtovybor_centr_podbora_avtomobilejj_i_vyezdnojj_diagnostiki-70000001029217201#reviews">БОЛЬШЕ ОТЗЫВОВ</a>
      </PublicSharedUiPrimaryButton>
    </div>

    <PublicSharedUiFlampContiner />

    <PublicWidgetsAboutRating />
  </div>
</template>

<script setup lang="ts">
const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'О нас',
    to: '/about'
  },
  {
    label: 'Отзывы',
    to: '/about/reviews'
  }
])

definePageMeta({
  layout: 'secondary',
  header: 'Отзывы о Подборе автомобиля в Екатеринбурге',
  title: 'Отзывы'
})

useHead({
  title: 'Отзывы'
})
</script>

<style lang="scss" scoped>
.feedback_container {
  font-size: 14px;
  color: #000;
  margin-top: 30px;

  h1 {
    text-align: center;
    padding-bottom: 15px;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.1;
    margin-top: 30px;
    @include more-than-tablet {
      max-width: 50%;
      margin: 0 auto;
    }
  }

  p {
    padding: 20px 0;
    @include more-than-tablet {
      max-width: 70%;
      margin: 0 auto;
    }
  }

  &__video {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .spinner {
      position: absolute;
      z-index: 3;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    iframe {
      z-index: 4;
    }
  }

  &__videos {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
    max-width: 70%;
    margin: 0 auto;
    margin-top: 30px;
  }

  a:link,
  a:visited {
    @include reset-link;
    cursor: pointer;
  }

  .feedback_container__flamp_container {
    margin-top: 70px;
    h1 {
      text-align: center;
      padding-bottom: 2em;
      font-size: 30px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 600;
      line-height: 1.1;
      color: inherit;
    }
  }
}
</style>
