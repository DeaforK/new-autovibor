<template>
  <PublicWidgetsTopHeroSection :video="true">
    <template #title>
      Авто под ключ в Екатеринбурге – подбор, покупка и оформление с гарантией
    </template>
    <template #body>
      Подбор авто под ключ экспертами «Автовыбора». Найдем для вас самые “вкусные” предложения от продавцов из
      Екатеринбурга и Свердловской области.
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
      <!-- Новый подзаголовок и текст -->
      <h3 style="font-size: 24px; font-weight: 600; margin-top: 40px; text-align: left;">
        Оформление автомобиля под ключ – без вашего участия
      </h3>
      <div style="margin-top: 20px;">
        <p>
          С 2016 года занимаемся оформлением автомобилей под ключ: выезжаем на осмотр ТС к клиенту, проверяем
          юридическую чистоту документов и техническое состояние транспорта любых марок и моделей.
        </p>
        <p>
          Для подбора авто под ключ в Екатеринбурге и области используем собственные базы данных, мониторим объявления
          на открытых и закрытых ресурсах.
        </p>
        <p>
          После предварительных переговоров встречаемся с продавцом для изучения машины на месте. Для диагностики и
          выявления скрытых дефектов задействуем специализированное дилерское оборудование, новейшие электронные
          устройства и датчики.
        </p>
      </div>
    </template>
  </PublicSharedUiInfoSection>
  <PublicWidgetsCarousel
    :props="Carouseldata"
    title="Как мы подбираем автомобиль под ключ"
    subtitle="С профессиональной поддержкой от компании «Автовыбор» купить машину под ключ сможет даже человек с минимальным опытом вождения.
    От вас – подробное описание параметров и бюджета будущей покупки, с нас – подбор автомобиля под ключ с гарантией положительного результата!
    Проверяем предложения продавцов более чем по 150 параметров. Готовы нести финансовую ответственность по выполнению заказов на авто под ключ!"
    after-text="Услуги в любом регионе.
Даже, если вы находитесь в другом городе, мы готовы помочь!
Наши специалисты подберут, подберут и доставят выбранный вами автомобиль прямо к вашему дому!"
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
  <PublicSharedUiOrangeWrapper title="Поможем найти лучший автомобиль на рынке в рамках вашего бюджета!">
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
  title: 'Подбор автомобиля под ключ в Екатеринбурге — Автовыбор',
  meta: [
    { name: 'description', content: 'Подбор авто под ключ по вашему бюджету и требованиям. Проверим, оформим документы и доставим до вашего двора.' }
  ]
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
      'Консультируем вас по моделям в ваш бюджет и даем рекомендации относительно реалий рынка и ваших потребностей. Обсуждаем пробег, год выпуска, цены и другие параметры.'
  },
  {
    description:
      'Проводим детальный анализ рынка РФ и За границей, чтобы выбрать достойный и выгодный вариант для вас.'
  },
  {
    description:
      'Обсуждаем понравившиеся автомобили.'
  },
  {
    description:
      'Проверяем детально автомобиль по технической и юридической части (как в РФ, как за границей) (Осмотр кузова, двигателя, ходовой части, электрики и других систем автомобиля)'
  },
  {
    description:
      'Осуществляем отдельный этап юридической проверки. Имеем доступ к закрытым базам (УГОН, АРЕСТ, ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ И ЗАЛОГОВЫЕ ОБЯЗАТЕЛЬСТВА).'
  },
  {
    description:
      'Полное сопровождение сделки от "А" до "Я" <br>* Оформляем юридически грамотный ДКП. <br>* Полностью контролируем передачу денег и оформление документов. <br>* Делаем страховку и консультируем по регистрации в ГИБДД.'
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
