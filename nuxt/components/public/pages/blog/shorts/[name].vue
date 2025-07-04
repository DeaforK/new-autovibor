<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    :name="short.title"
  />
  <div class="shorts">
    <div class="shorts__video">
      <div
        v-for="component in short.components"
        :key="component.componentId"
      >
        <div
          v-if="component.type === 'shorts'"
          class="shorts__video"
        >
          <iframe
            width="300"
            height="580"
            :src="(component.props as ShortComponent).url"
            :title="short.name"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="shorts__video__iframe"
          />
        </div>

        <iframe
          v-if="component.type === 'video'"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          frameborder="0"
          height="380"
          scrolling="no"
          :src="(component.props as VideoComponent).url"
          title="YouTube video player"
          width="560"
          class="video-editor"
        />
        <div
          v-if="component.type === 'editor'"
          class="text-editor"
          v-html="(component.props as TextComponent)?.text"
        />
        <figure
          v-if="component.type === 'image'"
          class="image-editor"
        >
          <img
            :src="(component.props as ImageComponent).image"
            :alt="(component.props as ImageComponent).alt"
          >
          <figcaption
            v-if="(component.props as ImageComponent).hint"
            style="opacity: 0.4; margin-top: 10px"
          >
            {{ (component.props as ImageComponent).hint }}
          </figcaption>
        </figure>
        <div
          v-if="component.type === 'seperator'"
          class="seperator-component"
        >
          ***
        </div>
      </div>
    </div>
  </div>
  <PublicSharedUiSimilarCardContainer
    v-if="transformedProps"
    :props="transformedProps"
  />
</template>

<script setup lang="ts">
import { useShortsStore } from '~/components/public/entities/Shorts/model'
import { useRoute } from 'vue-router'

import {
  type TShort,
  type TextComponent,
  type ShortComponent,
  type ImageComponent,
  type VideoComponent
} from '~/components/public/entities/Shorts/types'

const { getShort } = useShortsStore()
const route = useRoute()

const short = ref<TShort>({} as TShort)

const { data, error } = await useAsyncData(
  'shorts',
  async () => await getShort({ url: String(`blog/shorts/${route.params.name}`) })
)

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    message: error.value.message,
    fatal: true
  })
}

short.value = unref(data)!.page

const transformedProps = short.value.similarPages?.map(({ name, poster, url }) => ({
  name,
  poster,
  url
}))

const crumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Блог',
    to: '/blog'
  },
  {
    label: 'Shorts',
    to: '/blog/articles'
  },
  {
    label: short.value.title,
    to: short.value.url
  }
])

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: () => `${short.value.title} | Aвтовыбор-екб`,
  description: 'Оказание услуг в области генерального проектирования',
  keywords: '',
  ogTitle: short.value.title,
  ogDescription: 'Оказание услуг в области генерального проектирования',
  ogType: 'website'
})
</script>

<style lang="scss" scoped>
.shorts {
  &__video {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

    @include more-than-small-mobile {
      padding: 20px;
    }

    @include more-than-laptop {
      padding: 60px;
    }

    &__iframe {
      background-color: black;
      border: none;
    }
  }
}
</style>
