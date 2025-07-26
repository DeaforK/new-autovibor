<template>
  <PublicWidgetsTopHeroSection :video="true">
    <template #title>
      Подбор нового автомобиля по вашим параметрам и бюджету в Екатеринбурге
    </template>
    <template #body>
      Расскажите о какой машине мечтаете, и мы поможем подобрать новый автомобиль с учетом вашего бюджета, запросов и ожиданий.
      Предоставляем услуги юридического сопровождения сделок купли-продажи.
    </template>
  </PublicWidgetsTopHeroSection>
  <PublicWidgetsInfoNewCar />
  <div
    style="
      background: url('/images/report2.png');
      background-position: center bottom;
      background-size: cover;
    "
  >
    <PublicWidgetsCarousel
      title="Как мы подбираем новый автомобиль для вас? "
      subtitle="Подбор нового автомобиля – непростая задача “со звездочкой”, решение которой стоит доверить опытным специалистам
      нашей компании. Воспользуйтесь услугой, если:"
      :props="Carouseldata"
      after-text="Подбор нового автомобиля по параметрам и ценам командой «Автовыбор»  - это гарантия юридической чистоты сделки,
      отсутствие навязанных услуг и выгодные кредитные ставки.  "
    />
  </div>
  <PublicSharedUiOrangeWrapper>
    <PublicWidgetsCommonOrangeForm />
  </PublicSharedUiOrangeWrapper>
  <PublicWidgetsInsuranceBenefitsList
    title="Когда стоит воспользоваться услугой?"
    :benefits-data="benefitsData"
    iconwidth="60px"
    background-color="transparent"
    class="car-new__benefits"
    style="margin-top: 30px;"
  />
  <PublicWidgetsInfoGuarantee />
  <PublicSharedUiOrangeWrapper>
    <PublicWidgetsCommonOrangeForm />
  </PublicSharedUiOrangeWrapper>
  <PublicWidgetsInfoPricesBlock />
</template>

<script setup lang="ts">
useHead({
  title: 'Подбор нового автомобиля в Екатеринбурге  — Автовыбор',
  meta: [
    { name: 'description', content: 'Подбор нового авто — найдём лучший вариант у дилеров, согласуем скидки и доставим новый автомобиль без хлопот.' }
  ]
})

const Carouseldata = [
  {
    description: 'Нет опыта сотрудничества с автосалонами. Выполняем поиск и подбор новых авто под конкретные запросы покупателей. Уточняем важные моменты у дилеров, стоим на страже интересов наших клиентов. '
  },
  {
    description: 'Нет времени на самостоятельные поездки по магазинам. В рамках подбора нового автомобиля по параметрам будущего владельца организуем выездные проверки для осмотра и изучения технического состояния ТС, в том числе без присутствия покупателя. '
  },
  {
    description:
      'Нет достаточно знаний для самостоятельного поиска подходящей машины. Мы отлично ориентируемся в особенностях, преимуществах и недостатках ТС разных марок и моделей, используем продвинутые алгоритмы автоподбора новых авто на официальных ресурсах разных дилеров. '
  },
  {
    description: 'Нужно найти лучший вариант среди огромного числа предложений в самые короткие сроки. Оставьте заявку на нашем сайте для подбора нового автомобиля и мы представим полный перечень актуальных и выгодных вариантов от салонов Екатеринбурга, Челябинска, Перми и многих других городов. '
  }
]

const benefitsData = [
  {
    description: 'Нет опыта общения с автосалонами',
    img: '/images/newcar6.svg'
  },
  {
    description: 'Не отпускает работа/учеба/бизнес',
    img: '/images/newcar7.svg'
  },
  {
    description: 'Не имеете достаточно знаний в области автомобилей для самостоятельной проверки',
    img: '/images/newcar8.svg'
  },
  {
    description: 'Вы находитесь далеко от города в котором автомобиль',
    img: '/images/newcar9.svg'
  },
  {
    description:
      'Желаете выбрать проверенный вариант среди различных предложений в кратчайшие сроки (2 дня)',
    img: '/images/newcar10.svg'
  },
  {
    description: 'Просто не хотите терять время',
    img: '/images/newcar11.svg'
  }
]
</script>

<style lang="scss">

.car-new__benefits {
  font-weight: 500;
  @include more-than-tablet {
    max-width: 70% !important;
    margin: 0 auto;
  }
}
</style>
