<template>
  <div class="description-container">
    <div
      v-for="block in blocks"
      :key="(block.props as CatalogText).title"
      class="description-container__block"
    >
      <h2 class="description-container__title">
        {{ (block.props as CatalogText).title }}
      </h2>

      <div class="description-container__block__content">
        <template v-if="block.type === 'catalogText'">
          <div
            :class="(block.props as CatalogText).bordered ? 'orange-border' : ''"
            v-html="(block.props as CatalogText).text"
          />
        </template>
        <template v-if="block.type === 'catalogCarousel'">
          <PublicWidgetsCarouselCatalogTap :images="(block.props as CatalogCarousel).images" />
        </template>
        <template v-if="block.type === 'catalogBeforeAndAfter'">
          <PublicWidgetsCatalogSplitter :images="(block.props as CatalogBeforeAndAfter).images" />
        </template>
        <template v-if="block.type === 'catalogAccordion'">
          <PublicWidgetsCatalogAccordion :content="(block.props as CatalogAccordion).items" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {
  TabComponent,
  CatalogText,
  CatalogCarousel,
  CatalogBeforeAndAfter,
  CatalogAccordion
} from '~/components/public/entities/CatalogCars/types'

interface Props {
  blocks: TabComponent[]
}

const { blocks } = defineProps<Props>()
</script>

<style lang="scss">
.description-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @include more-than-laptop {
    max-width: 85%;
  }

  &__title {
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    max-width: 80%;
    color: $primary;

    @include more-than-laptop {
      overflow-wrap: break-word;
      hyphens: manual;
    }
  }

  &__block {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;

    @include more-than-laptop {
      grid-template-columns: 1fr 2fr;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      @include more-than-laptop {
        gap: 24px;
      }

      a {
        @include reset-link;
        color: blue;
        &:hover {
          color: #e15a2b;
          text-decoration: underline;
        }
      }

      ol {
        margin-bottom: 16px;
        counter-reset: num;
        li {
          position: relative;
          margin-bottom: 8px;
          display: flex;
          align-items: baseline;
          &::before {
            min-width: 24.69px;
            position: relative;
            font-size: 16px;
            line-height: 1;
            font-weight: 500;
            content: counter(num) ')';
            counter-increment: num;
            color: #e15a2b;
          }
        }
      }

      ul {
        @include reset-list;
        margin: 30px 0;
        @include more-than-laptop {
          margin-bottom: 20px;
          margin-top: 0;
        }

        li {
          position: relative;
          margin-bottom: 10px;
          font-weight: 500;
          line-height: 1.444444;
          font-size: 16px;
          margin-left: 40px;
          @include more-than-laptop {
            font-size: 18px;
          }

          &::before {
            position: absolute;
            left: -30px;
            top: 5px;
            height: 18px;
            width: 18px;
            background-color: $primary;
            border-radius: 50%;
            content: '';
          }

          &::after {
            position: absolute;
            left: -24px;
            top: 11px;
            height: 6px;
            width: 6px;
            background-color: #ffffff;
            border-radius: 50%;
            content: '';
          }
        }
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 500;
        margin: 20px 0;
      }

      h2 {
        font-size: 24px;
        line-height: 28px;
      }

      h3 {
        font-size: 22px;
        line-height: 26px;
      }

      h4 {
        font-size: 20px;
        line-height: 24px;
      }

      h5,
      h6 {
        font-size: 18px;
        line-height: 22px;
      }

      h2 {
        font-weight: 500;
        font-size: 22px;
        line-height: 35px;
      }

      p {
        font-size: 18px;
      }
    }
  }
}
.orange-border {
  border: 2px $primary solid;
  border-radius: 20px;
  padding: 22px;
}
</style>
