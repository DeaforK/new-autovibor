<template>
  <div class="main_container">
    <PublicWidgetsTopHeroSection :video="true">
      <template #title>
        Автострахование в Екатеринбурге
      </template>
    </PublicWidgetsTopHeroSection>

    <div class="main_container__navigation">
      <NuxtLink to="/insurance/osago">
        ОСАГО
      </NuxtLink>
      <NuxtLink to="/insurance/kasko">
        КАСКО
      </NuxtLink>
      <NuxtLink to="/insurance/help-on-road">
        Помощь на дороге
      </NuxtLink>
    </div>

    <div class="main_container__orange_container">
      <div class="main_container__orange_container__wrapper">
        <PublicWidgetsCarCard :props="content.insurance" />
      </div>
    </div>

    <PublicWidgetsCarousel
      :props="content.carouselData"
      title="С нами комфотно!"
    />

    <div class="main_container__info_section">
      <h1>{{ content.serviceSteps.title }}</h1>
      <div class="main_container__info_section__container">
        <div
          v-for="item in content.serviceSteps.content"
          :key="item.title"
          class="main_container__info_section__container__wrapper"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </div>

    <PublicSharedUiCompanyLogos style="max-width: 65%;" />

    <PublicWidgetsInsuranceContent :content="content.index" />
  </div>
</template>

<script setup lang="ts">
import { content } from './data'

useHead({
  title: 'Страхование'
})
</script>

<style lang="scss">


.main_container {
  &__navigation {
    a {
      @include reset-link;
      padding: 15px;
    }

    background-color: $accent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;

    @include more-than-small-mobile {
      flex-direction: column;
    }

    @include more-than-mobile {
      flex-direction: row;
    }
    @include more-than-tablet {
      padding-left: 100px;
    }
  }

  &__orange_container {
    background-color: $primary;
    padding: 20px 0;

    &__wrapper {
      @include more-than-small-mobile {
        width: 100%;
        margin: 0 auto;
      }
    }
  }

  &__info_section {
    background: url('/images/modal_bg.jpg') center center no-repeat;
    background-size: cover;
    color: white;

    @include more-than-small-mobile {
      padding: 30px 0;
    }

    @include more-than-laptop {
      padding: 150px 0;
    }

    h1 {
      font-weight: bold;
      font-size: 28px;
      line-height: 39px;
      margin-bottom: 40px;
      text-align: center;
      width: 100% !important;
      @include more-than-tablet {
        font-size: 36px;
      }
    }

    &__container {
      max-width: 90%;
      margin: 0 5%;
      display: flex;
      flex-direction: row;
      text-align: center;

      @include more-than-small-mobile {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        gap: 20px;
      }

      @include more-than-mobile {
        justify-content: space-between;
        flex-direction: row;
      }

      &__wrapper {
        display: flex;
        flex-direction: column;
        width: 33.3%;

        @include more-than-small-mobile {
          width: 100%;
        }

        @include more-than-mobile {
          width: 33.3%;
        }

        h2 {
          font-weight: 600;
          font-size: 20px;
          line-height: 140%;
          text-align: center;
          margin-bottom: 18px;
        }

        p {
          font-size: 16px;
          line-height: 170%;
          text-align: center;
          text-wrap: wrap;
        }
      }
    }
  }
}
</style>
