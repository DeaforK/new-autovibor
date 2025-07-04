<template>
  <div class="container">
    <PublicWidgetsTopHeroSection
      :list="data.listTopHero"
      :video="true"
    >
      <template #title>
        Найдем лучший автомобиль в рамках вашего бюджета
      </template>
    </PublicWidgetsTopHeroSection>

    <PublicWidgetsInfoStatistics :statistics="statistics" />

    <PublicSharedUiInfoSection class="info">
      <template #title>
        Работа с клиентами
      </template>
      <template #body>
        <div v-html="data.infoSection" />
        <div class="info_section__container__info_btn-wrapper">
          <a
            href="https://www.youtube.com/channel/UCmrb3M_KF-1WLvzdgXbohbQ/videos"
            target="_blank"
          >
            <PublicSharedUiPrimaryButton>
              Как мы проверяем
            </PublicSharedUiPrimaryButton>
          </a>

          <PublicSharedUiPrimaryButton @click="navigateTo('/blog/articles')">
            Прочитай и ЗНАЙ!
          </PublicSharedUiPrimaryButton>
        </div>
      </template>
    </PublicSharedUiInfoSection>

    <PublicWidgetsCarousel
      :props="data.carouselData"
      title="Процесс автоподбора"
    />
    <PublicSharedUiOrangeWrapper title="Оставьте заявку на бесплатную консультацию">
      <PublicWidgetsCommonOrangeForm />
    </PublicSharedUiOrangeWrapper>
    <PublicWidgetsCarBlock />

    <PublicSharedUiInfoSection
      class="info"
      style="
        background: url('/images/bg-info2.png');
        background-position: center;
        background-size: cover;
      "
    >
      <template #title>
        Почему работать с нами максимально выгодно?
      </template>
      <template #body>
        <div v-html="data.workWithUs" />
        <PublicSharedUiPrimaryButton
          style="align-self: center"
          @click="navigateTo('/services/car-choise')"
        >
          Как подобрать лучший вариант?
        </PublicSharedUiPrimaryButton>
      </template>
    </PublicSharedUiInfoSection>

    <PublicSharedUiOrangeWrapper class="container__orange_wrapper_flex">
      <div class="container__orange_wrapper_flex__container">
        <img
          :src="'/images/laptop.png'"
          alt="Laptop"
          class="icon-phone"
        >
        <div>
          <h2>{{ data.diagnoseHeader }}</h2>
          <p>{{ data.diagnoseBody }}</p>
          <div class="container__orange_wrapper_flex__container__button_wrapper">
            <PublicSharedUiWhiteButton @click="navigateTo('/reports')">
              ПОПРОСИТЬ ПРИМЕР
            </PublicSharedUiWhiteButton>
            <PublicSharedUiWhiteButton @click="navigateTo('/services/car-diagnose')">
              КАК МЫ проверяем
            </PublicSharedUiWhiteButton>
          </div>
        </div>
      </div>
    </PublicSharedUiOrangeWrapper>

    <PublicSharedUiWhiteWrapper title="Почему стоит обратиться именно к нам">
      <div class="container__white_content">
        <PublicWidgetsAboutWhyUs :props="data.whyUs" />
      </div>
    </PublicSharedUiWhiteWrapper>

    <PublicWidgetsInfoPricesBlock />

    <PublicSharedUiWhiteWrapper
      title="Как обманывают в автосалонах"
      subtitle="с авто для перепродажи"
    >
      <PublicWidgetsCarDeceits :props="data.deceits" />
    </PublicSharedUiWhiteWrapper>

    <PublicWidgetsCommonConsault />

    <PublicWidgetsReportRegularReports />

    <PublicWidgetsInfoGuarantee />

    <PublicWidgetsAboutYoutubeChannel />

    <PublicSharedUiFlampContiner />

    <PublicWidgetsAboutRating />

    <PublicWidgetsAboutMap />
  </div>
</template>

<script lang="ts" setup>
import { data } from './data'
import { useInitStore } from '~/components/public/entities/initStore/model'
useHead({
  title:
    'Автоподбор в Екатеринбурге - найдем лучшее авто в ЕКБ! Подбор автомобиля, помощь в покупке. '
})

const { statistics } = useInitStore()
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
