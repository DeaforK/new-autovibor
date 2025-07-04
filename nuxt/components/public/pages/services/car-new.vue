<template>
  <PublicWidgetsTopHeroSection :video="true">
    <template #title>
      Подбор нового автомобиля
    </template>
    <template #body>
      Подбор автомобиля до полного одобрения клиентом.
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
      title="Как это работает?"
      :props="Carouseldata"
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
  title: 'Подбор нового автомобиля'
})

const Carouseldata = [
  {
    title: 'Решили купить авто?',
    description: '- Обращение к нам <br>- Консультация и заключение договора'
  },
  {
    title: 'Занимаемся подбором автомобиля',
    description: 'Поиск авто с фотоотчетами вам в личный кабинет'
  },
  {
    title: 'Получили лучший автомобиль в своем бюджете',
    description:
      'Выезд с вами на просмотр пройденного авто, контрольная проверка и покупка автомобиля'
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
