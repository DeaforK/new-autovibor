<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    :name="videoReview.title"
  />
  <div>
    <template v-if="videoReview?.components">
      <div class="video-container">
        <div
          v-for="component in videoReview.components"
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
              :title="videoReview.name"
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
  </div>
</template>

<script setup lang="ts">
import { useVideosReviewsStore } from '~/components/public/entities/VideoReviews/model'

import { useRoute } from 'vue-router'
import { type TVideoReview, type ImageComponent, type TextComponent, type VideoComponent, type ShortComponent } from '~/components/public/entities/VideoReviews/types'

const { getVideoReview } = useVideosReviewsStore()
const router = useRoute()
const videoReview = ref<TVideoReview>({} as TVideoReview)

const { data, error } = await useAsyncData(
  'videoReviews',
  async () => getVideoReview({ url: String(`blog/video-reviews/${router.params.name}`) })
)

videoReview.value = unref(data)!.page

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    message: error.value.message,
    fatal: true
  })
}

const transformedProps = videoReview.value.similarPages?.map(({ name, poster, url }) => ({
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
    label: 'Видео отзывы',
    to: '/blog/video-reviews'
  },
  {
    label: videoReview.value.title,
    to: videoReview.value.url
  }
])

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: () => `${videoReview.value.title} | Aвтовыбор-екб`,
  description: 'Оказание услуг в области генерального проектирования',
  keywords: '',
  ogTitle: videoReview.value.title,
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