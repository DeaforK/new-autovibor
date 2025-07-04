<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="breadcrumbs"
    :name="video.title"
  />

  <template v-if="video?.components">
    <div class="video-container">
      <div
        v-for="component in video.components"
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
            :title="video.name"
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
  </template>
  <PublicSharedUiSimilarCardContainer
    v-if="transformedProps"
    :props="transformedProps"
  />
</template>

<script setup lang="ts">
import { useVideosStore } from '~/components/public/entities/Videos/model'
import { useRoute } from 'vue-router'

import {
  type TVideo,
  type TextComponent,
  type VideoComponent,
  type ImageComponent,
  type ShortComponent
} from '~/components/public/entities/Videos/types'

const { getVideo } = useVideosStore()
const route = useRoute()

const video = ref<TVideo>({} as TVideo)

const { data, error } = await useAsyncData(
  'video',
  async () => await getVideo({ url: String(`blog/videos/${route.params.name}`) })
)

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    message: error.value.message,
    fatal: true
  })
}


video.value = unref(data)!.page

const transformedProps = video.value.similarPages?.map(({ name, poster, url }) => ({
  name,
  poster,
  url
}))

const breadcrumbs = ref([
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Блог',
    to: '/blog'
  },
  {
    label: 'Видеоблог',
    to: '/blog/videos'
  },
  {
    label: video.value.title,
    to: video.value.url
  }
])

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: () => `${video.value.title} | Aвтовыбор-екб`,
  description: 'Оказание услуг в области генерального проектирования',
  keywords: '',
  ogTitle: video.value.title,
  ogDescription: 'Оказание услуг в области генерального проектирования',
  ogType: 'website'
})
</script>

<style lang="scss" scoped>
.video-container {
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  max-width: 90%;

  @include more-than-laptop {
    max-width: 50%;
  }
}

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
