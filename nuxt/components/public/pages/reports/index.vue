<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    name="Отчёты"
  />
  <div class="reports-container">
    <h1>Отчеты</h1>
    <div
      style="margin: 0 -10px;"
      class="row"
    >
      <div
        v-for="report, i in reports"
        :key="i"
        :class="i === 0 && 'col-md-12 col-lg-4'"
        class="col-12 col-md-6 col-lg-4"
        style="padding: 10px;"
        :href="report.to"
      >
        <q-card class="report-card">
          <q-img
            :src="report.image"
            style="height: 280px; object-fit: cover;"
            :loading-show-delay="200"
          />

          <q-card-section
            style="padding: 30px 10px"
            class="text-center"
          >
            <nuxt-link
              :to="report.to"
              class="text-h6 text-black"
            >
              {{ report.title }} {{ report.recommended ? '(Рекомендована)' : '(Не рекомендована)' }}
            </nuxt-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Отчеты'
})

const reports = [
  {
    reportId: 1,
    title: 'Mazda 6 2.5 АТ',
    recommended: true,
    image: '/images/reports/1.jpg',
    to: '/reports/mazda-6'
  },
  {
    reportId: 1,
    recommended: false,
    title: 'Hyundai i30',
    image: '/images/reports/2.jpg',
    to: '/reports/hyundai-i30'
  },
  {
    reportId: 1,
    title: 'Volkswagen Tiguan',
    recommended: true,
    image: '/images/reports/3.jpg',
    to: '/reports/volkswagen-tiguan'
  },
  {
    reportId: 1,
    title: 'Porshe Cayenne 2012',
    recommended: true,
    image: '/images/reports/4.jpg',
    to: '/reports/porshe-cayenne'
  },
  {
    reportId: 1,
    title: 'Infiniti QX55',
    recommended: true,
    image: '/images/reports/5.jpg',
    to: '/reports/infiniti-qx55'
  },
  {
    reportId: 1,
    title: 'Skoda Roomster',
    recommended: false,
    image: '/images/reports/6.jpeg',
    to: '/reports/skoda-roomster'
  }
]

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Отчеты',
    to: '/reports'
  }
])
</script>

<style lang="scss" scoped>
.reports-container {
  margin: 0 auto;
  padding: 60px 20px;
  @include more-than-mobile {
    width: 80%;
  }
  h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    padding: 0 0 50px;
    text-align: center;
    @include more-than-mobile {
      font-size: 36px;
      line-height: 44px;
    }
  }
  .report-card {
    height: 100%;
  }
}
</style>