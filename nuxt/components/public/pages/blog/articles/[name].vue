<template>
  <PublicWidgetsLayoutHeaderWithBreadcrumbs
    :breadcrumbs="crumbs"
    :name="statment.title"
  />
  <template v-if="statment?.components">
    <div class="article-container">
      <div
        v-for="component in statment.components"
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
            :title="statment.name"
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
import { useStatmentsStore } from '~/components/public/entities/Statments/model'
import { useRoute } from 'vue-router'

import type {
  TStatment,
  TextComponent,
  VideoComponent,
  ImageComponent
} from '~/components/public/entities/Statments/types'
import type { ShortComponent } from '~/components/public/entities/Shorts/types'

const { getStatment } = useStatmentsStore()
const route = useRoute()

const statment = ref<TStatment>({} as TStatment)

const { data, error } = await useAsyncData(
  'statment',
  async () => await getStatment({ url: String(`blog/articles/${route.params.name}`) })
)

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    message: error.value.message,
    fatal: true
  })
}

statment.value = unref(data)!.page

const transformedProps = statment.value.similarPages?.map(({ name, poster, url }) => ({
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
    label: 'Статьи',
    to: '/blog/articles'
  },
  {
    label: statment.value.title,
    to: statment.value.url
  }
])

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: () => `${statment.value.title} | Aвтовыбор-екб`,
  description: 'Оказание услуг в области генерального проектирования',
  keywords: '',
  ogTitle: statment.value.title,
  ogDescription: 'Оказание услуг в области генерального проектирования',
  ogType: 'website'
})
</script>

<style lang="scss">
.article-container {
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  max-width: 90%;
  @include more-than-laptop {
    max-width: 50%;
  }
}

.text-editor {
  img {
    max-width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-top: 10px;
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
