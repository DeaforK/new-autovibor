<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="caseCar.breadcrumbs"
    :name="caseCar.name"
  />
  <div class="case-car-container">
    <div
      v-for="block in caseCar.components"
      :key="block.componentId"
      class="wrapper"
    >
      <iframe
        v-if="block.type === 'video'"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        frameborder="0"
        height="380"
        scrolling="no"
        :src="(block.props as VideoComponent).url"
        title="YouTube video player"
        width="560"
        class="video-editor"
      />
      <div
        v-if="block.type === 'caseDetails'"
        class="product-width-class"
      >
        <PublicWidgetsCasesProductDescription :data="(block.props as CaseDetailsComponent)" />
      </div>
      <div
        v-if="block.type === 'editor'"
        class="text-editor product-width-class"
        v-html="(block.props as TextComponent)?.text"
      />
      <div v-if="block.type === 'caseMain'">
        <PublicWidgetsCasesProductDetails
          :data="(block.props as CaseComponent)"
          :year="Number(caseCar.fields.yearOfManufacture)"
          :services-list="serviceList"
        >
          <PublicSharedUiPrimaryButton
            style="margin-top: 42px;"
            @click="showModal = true"
          >
            Хочу такой же
          </PublicSharedUiPrimaryButton>
          <PublicWidgetsCommonFormModal
            v-show="showModal"
            @close-modal="showModal = false"
          />
        </PublicWidgetsCasesProductDetails>
      </div>

      <figure
        v-if="block.type === 'image'"
        class="image-editor product-width-class"
      >
        <img
          :src="(block.props as ImageComponent).image"
          :alt="(block.props as ImageComponent).alt"
        >
        <figcaption
          v-if="(block.props as ImageComponent).hint"
          style="opacity: 0.4; margin-top: 10px"
        >
          {{ (block.props as ImageComponent).hint }}
        </figcaption>
      </figure>
      <div
        v-if="block.type === 'seperator'"
        class="seperator-component"
      >
        ***
      </div>
    </div>
  </div>
  <PublicSharedUiOrangeWrapper
    title="Опишите вашу задачу, и мы сообщим стоимость нашей
    работы в течение 15 минут"
    style="background-color: black"
  >
    <PublicWidgetsCommonOrangeForm />
  </PublicSharedUiOrangeWrapper>
</template>

<script setup lang="ts">
import { useCasesStore } from '~/components/public/entities/Cases/model'
import { useRoute } from 'vue-router'

import type {
  TCase,
  TextComponent,
  VideoComponent,
  ImageComponent,
  CaseDetailsComponent,
  CaseComponent,
  TServiceList
} from '~/components/public/entities/Cases/types'

const { getCase } = useCasesStore()
const route = useRoute()

const caseCar = ref<TCase>({} as TCase)
const serviceList = ref<TServiceList>({} as TServiceList)
const showModal = ref(false)

const { data, error } = await useAsyncData(
  'case',
  async () => await getCase({ url: String(`cases/${route.params.name}`) })
)

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    message: error.value.message,
    fatal: true
  })
}

caseCar.value = unref(data)!.page
serviceList.value = unref(data)!.info

useSeoMeta({
  title: () => `${caseCar.value.title} | Aвтовыбор-екб`,
  description: 'Оказание услуг в области генерального проектирования',
  keywords: '',
  ogTitle: caseCar.value.title,
  ogDescription: 'Оказание услуг в области генерального проектирования',
  ogType: 'website'
})
</script>

<style lang="scss" scoped>
.case-car-container {
  .wrapper {
    display: flex;
    flex-direction: column;
  }
}
.product-width-class {
  margin: auto;
  max-width: 90%;
  @include more-than-mobile {
    max-width: 70%;
  }
}
</style>
