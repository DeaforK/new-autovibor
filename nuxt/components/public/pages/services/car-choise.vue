<template>
  <PublicWidgetsTopHeroSection :video="true">
    <template #title>
      Подбор лучшего автомобиля под ключ для Вас.
    </template>
    <template #body>
      Подберем идеальный автомобиль по вашим критериям в
      пределах вашего бюджета с гарантией юридической чистоты, технической исправности и безопасности
    </template>
  </PublicWidgetsTopHeroSection>
  <PublicWidgetsInfoStatistics :statistics="statistics" />
  <PublicSharedUiInfoSection>
    <template #title>
      В 90% случаев стоимость услуги отбивается во время торга с продавцом
    </template>
    <template #body>
      <ul style="display: flex; flex-direction: column; gap: 10px">
        <li>
          В большинстве секторов рынка существует конкуренция между поставщиками услуг. Продавцы готовы
          снизить цену или добавить дополнительные услуги, чтобы привлечь клиентов и обойти конкурентов.
        </li>
        <li>
          Многие продавцы услуг могут быть гибкими в ценах, особенно если речь идет о крупных заказах.
        </li>
      </ul>
      <p style="margin-top: 20px; text-align: left;">
        Однако важно помнить, что торг не всегда приводит к снижению стоимости.
      </p>
    </template>
  </PublicSharedUiInfoSection>
  <PublicWidgetsCarousel
    :props="Carouseldata"
    title="Шаги поиска и выбора автомобиля"
  />
  <PublicWidgetsInfoPricesBlock />
  <div class="page_container__report">
    <PublicWidgetsInsuranceBenefits
      title="Предварите­льная проверка перед выездом на осмотр"
      :data="content.kaskoData"
      img="/images/sprite12.png"
    />
    <PublicSharedUiPrimaryButton
      href="https://disk.yandex.ru/d/L2VBueYWG7PDhQ"
      target="_blank"
    >
      Получить пример отчёта
    </PublicSharedUiPrimaryButton>
  </div>
  <PublicWidgetsCarBlock />
  <PublicWidgetsInfoGuarantee />
  <PublicSharedUiOrangeWrapper
    title="Поможем найти лучший автомобиль на рынке в рамках вашего бюджета!"
  >
    <PublicWidgetsCommonOrangeForm />
  </PublicSharedUiOrangeWrapper>
  <PublicSharedUiFlampContiner />
  <PublicWidgetsAboutRating />
  <PublicWidgetsAboutMap />
  <PublicWidgetsCommonFormModal
    v-show="showModal"
    @close-modal="showModal = false"
  />
</template>

<script setup lang="ts">

import { useInitStore } from '~/components/public/entities/initStore/model'
useHead({
  title: 'Подбор под ключ'
})

const showModal = ref(false)
const content = {
  kaskoData: [
    'Проверка количества владельцев', 'Проверка на залог/арест',
    'Проверка на ДТП',
    'Проверка реальности пробега (по информации со станций техосмотра)',
    'Проверка по страховым компаниям (фотографии с ДТП)'
  ]
}

const { statistics } = useInitStore()

const Carouseldata = [
  {
    description:
      'Вы оставляете заявку. Мы вам перезваниваем и согласовываем все необходимые параметры автомобиля: марка авто, цвет, год, вид кпп, ваш бюджет'
  },
  {
    description:
      'Мы сразу приступаем к автоподбору: наши автоэксперты самостоятельно отбирают подходящие объявления со всех сайтов в Екатеринбурге и области, заносят их в Excel файл и открывают доступ к нему клиенту. В зависимости от потребности клиента нам удается собрать не менее 10 подходящих вариантов.'
  },
  {
    description:
      'Проводим общение с продавцами. Общаясь по телефону с продавцами и задавая правильные вопросы, можно понять многое об автомобиле. После прозвона всех вариантов эксперты оставят свои комментарии для вас к каждому варианту.'
  },
  {
    description:
      'Для проведения диагностики наши эксперты выезжают на осмотр всех автомобилей. Диагностика проводится по нашему фирменному чек-листу, который включает в себя 150 пунктов для проверки.'
  },
  {
    description:
      'Повторный осмотр лучшего варианта. На основе всех осмотренных вариантов эксперт выбирает один — самый лучший, который соответствует поставленной задаче. На повторный осмотр автомобиля мы приглашаем клиента и все рассказываем про автомобиль.'
  },
  {
    description:
      'Торг и оформление документов. В среднем, за счет обоснованного торга с владельцем, нам удается снизить стоимость автомобиля на 5-10%. При принятии клиентом положительного решения о покупке автомобиля мы полностью сопровождаем сделку до оформления автомобиля в ГИБДД. Предоставляем все необходимые документы.'
  }
]
</script>

<style lang="scss" scoped>


.page_container {
  h2 {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    margin: 30px 0;
    text-align: center;
    overflow-wrap: break-word;
    hyphens: manual;
  }

  p {
    font-size: 16px;
    line-height: 170%;
    text-align: center;
    margin-bottom: 20px;
  }

  &__report {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px auto;
    width: 90%;
    @include more-than-mobile {
      margin: 50px auto;
      margin-bottom: 70px;
    }

    &__container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      img {
        width: 60%;
        height: auto;
      }

      ul {
        list-style: none;

        li {
          background: url('/images/pointer.svg') left center no-repeat;
          font-size: 16px;
          font-weight: 300;
          line-height: 30px;
          padding: 20px;
          margin-bottom: 10px;
          padding-left: 70px;
          align-self: flex-start;
          justify-self: flex-start;
          margin-left: 10px;
        }
      }

      @include more-than-mobile {
        flex-direction: row;
      }
    }
  }
  .youtube {
    aspect-ratio: 16 / 9;
    width: 100%;
  }
}
</style>
