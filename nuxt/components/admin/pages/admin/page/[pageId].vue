<template>
  <q-page class="w100">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-12 pa-8">
          <legend class="block-subtitle">
            Содержимое
          </legend>
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.name"
            label="Название (H1)"
            color="panel-primary"
            :error-message="errors['name']"
            :error="!!errors['name']"
            @update:model-value="errors['name'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-select
            v-model="data.type"
            label="Тип"
            emit-value
            map-options
            :options="types"
            option-value="value"
            option-label="label"
            color="panel-primary"
            :error-message="errors['type']"
            :error="!!errors['type']"
            @update:model-value="errors['type'] = ''"
          />
        </div>
        <div
          v-for="(comp, j) in data.components"
          :key="comp.uid"
          class="col-12"
        >
          <q-card
            flat
            bordered
            class="page-block mt-16"
          >
            <q-card-section>
              <!-- Редактор -->
              <EditorComponent
                v-if="comp.type === 'editor'"
                :errors="errors"
                :key-attr="j"
              />
              <!-- Изображение -->
              <ImageComponent
                v-if="comp.type === 'image'"
                :errors="errors"
                :key-attr="j"
              />
              <!-- Видео -->
              <VideoComponent
                v-if="comp.type === 'video'"
                :errors="errors"
                :key-attr="j"
              />
              <ShortsComponent
                v-if="comp.type === 'shorts'"
                :errors="errors"
                :key-attr="j"
              />
              <!-- Разделитель -->
              <div
                v-if="comp.type === 'seperator'"
                class="pa-4 flex"
              >
                <p class="component-separator">
                  ***
                </p>
              </div>

              <CaseDetailsComponent
                v-if="comp.type === 'caseDetails'"
                :errors="errors"
                :key-attr="j"
              />

              <CaseComponent
                v-if="comp.type === 'caseMain'"
                :errors="errors"
                :key-attr="j"
                :services="services"
              />
              <CatalogMainComponent
                v-if="comp.type === 'catalogMain'"
                :errors="errors"
                :key-attr="j"
                :services="services"
              />

              <CatalogTextComponent
                v-if="comp.type === 'catalogText'"
                :errors="errors"
                :key-attr="j"
              />
              <CatalogAccordionComponent
                v-if="comp.type === 'catalogAccordion'"
                :errors="errors"
                :key-attr="j"
              />
              <CatalogCarouselComponent
                v-if="comp.type === 'catalogCarousel'"
                :errors="errors"
                :key-attr="j"
              />

              <CatalogBeforeAndAfterComponent
                v-if="comp.type === 'catalogBeforeAndAfter'"
                :errors="errors"
                :key-attr="j"
              />
              <ImportedCarsMainComponent
                v-if="comp.type === 'importedCarsMain'"
                :errors="errors"
                :key-attr="j"
              />
              <div>
                <q-btn
                  flat
                  color="panel-primary"
                  icon="delete"
                  @click="deleteComponent(j)"
                />
                <q-btn
                  flat
                  color="panel-primary"
                  icon="expand_more"
                  :ripple="{ early: true }"
                  @click="down(j)"
                />
                <q-btn
                  flat
                  color="panel-primary"
                  icon="expand_less"
                  :ripple="{ early: true }"
                  @click="up(j)"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 pa-8">
          <div class="col-12 pa-8 flex justify-center">
            <q-btn
              round
              color="panel-primary"
              icon="add"
              title="Добавить новый блок"
              @click="selectComponentDialog = true"
            />
          </div>
        </div>
        <div class="col-12 pa-8">
          <legend class="block-subtitle mt-16">
            Дополнительно
          </legend>
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <QUploader
            ref="posterUploader"
            no-thumbnails
            square
            flat
            bordered
            field-name="files"
            color="white"
            style="width: 100%; height: 100%"
            :text-color="errors?.poster ? 'negative' : 'panel-primary'"
            :label="errors?.poster ? errors?.poster : 'Загрузите картинку'"
            url="/api/admin/files/upload?destination=system"
            accept=".webp, .png, .jpg, .jpeg, .gif"
            max-files="1"
            @uploaded="uploaded($event)"
            @failed="failed($event)"
            @uploading="componentLoading = true"
            @finish="componentLoading = false"
            @removed="removed()"
          />
        </div>
      </div>
      <div class="row">
        <div
          v-if="data.type === 'catalogCar' || data.type === 'caseCar' || data.type === 'importedCars'"
          class="col-12 col-sm-6 col-md-4 pa-8"
        >
          <q-input
            v-model="data.fields.brand"
            label="Марка"
            color="panel-primary"
            :error-message="errors.fields.brand"
            :error="!!errors.fields.brand"
            @update:model-value="errors.fields.brand = ''"
          />
        </div>
        <div
          v-if="data.type === 'catalogCar' || data.type === 'caseCar' || data.type === 'importedCars'"
          class="col-12 col-sm-6 col-md-4 pa-8"
        >
          <q-input
            v-model="data.fields.model"
            label="Модель"
            color="panel-primary"
            :error-message="errors.fields.model"
            :error="!!errors.fields.model"
            @update:model-value="errors.fields.model = ''"
          />
        </div>
        <div
          v-if="data.type === 'catalogCar'"
          class="col-12 col-sm-6 col-md-4 pa-8"
        >
          <q-input
            v-model="data.fields.yearOfManufactureFrom"
            label="Год выпуска от:"
            type="number"
            color="panel-primary"
            :error-message="errors.fields.yearOfManufactureFrom"
            :error="!!errors.fields.yearOfManufactureFrom"
            @update:model-value="errors.fields.yearOfManufactureFrom = ''"
          />
        </div>
        <div
          v-if="data.type === 'catalogCar'"
          class="col-12 col-sm-6 col-md-4 pa-8"
        >
          <q-input
            v-model="data.fields.yearOfManufactureUntil"
            label="Год выпуска до:"
            type="number"
            color="panel-primary"
            :error-message="errors.fields.yearOfManufactureUntil"
            :error="!!errors.fields.yearOfManufactureUntil"
            @update:model-value="errors.fields.yearOfManufactureUntil = ''"
          />
        </div>
        <div
          v-if="data.type === 'importedCars'"
          class="col-12 col-sm-6 col-md-4 pa-8"
        >
          <q-input
            v-model="data.fields.yearOfManufacture"
            label="Год выпуска:"
            type="number"
            color="panel-primary"
            :error-message="errors.fields.yearOfManufacture"
            :error="!!errors.fields.yearOfManufacture"
            @update:model-value="errors.fields.yearOfManufacture = ''"
          />
        </div>
        <div
          v-if="data.type === 'caseCar'"
          class="col-12 col-sm-6 col-md-4 pa-8"
        >
          <q-input
            v-model="data.fields.yearOfManufacture"
            label="Год выпуска"
            type="number"
            color="panel-primary"
            :error-message="errors.fields.yearOfManufacture"
            :error="!!errors.fields.yearOfManufacture"
            @update:model-value="errors.fields.yearOfManufacture = ''"
          />
        </div>
      </div>

      <div class="col-12 pa-8">
        <legend class="block-subtitle mt-16">
          SEO
        </legend>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.title"
            label="Title"
            color="panel-primary"
            hint="Заголовок страницы в браузере"
            :error-message="errors['title']"
            :error="!!errors['title']"
            @update:model-value="errors['title'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.description"
            label="Description"
            color="panel-primary"
            hint="Описание страницы для поисковой системы"
            :error-message="errors['description']"
            :error="!!errors['description']"
            @update:model-value="errors['description'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.keywords"
            label="Keywords"
            color="panel-primary"
            hint="Перечень слов через запятую, которые соотвествуют поисковому интенту"
            :error-message="errors['keywords']"
            :error="!!errors['keywords']"
            @update:model-value="errors['keywords'] = ''"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.url"
            label="URL"
            color="panel-primary"
            :hint="hintUrl"
            :error-message="errors['url']"
            :error="!!errors['url']"
            @update:model-value="errors['url'] = ''"
          />
        </div>

        <div class="col-12 pa-8">
          <legend class="block-subtitle mt-16">
            Настройки
          </legend>
        </div>
        <div class="col-12 col-sm-6 col-md-4 pa-8">
          <q-input
            v-model="data.orderBy"
            label="Сортировка"
            type="number"
            color="panel-primary"
            :error-message="errors['orderBy']"
            :error="!!errors['orderBy']"
            @update:model-value="errors['orderBy'] = ''"
          />
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 pa-8 flex">
        <q-toggle
          v-model="data.active"
          size="md"
          color="panel-primary"
          :true-value="true"
          :false-value="false"
          val="lg"
          label="Активен"
        />
      </div>

      <q-toggle
        v-if="data.type === 'shorts' || data.type === 'videoReviews'
          || data.type === 'video' || data.type === 'statment' || data.type === 'importedCars'"
        v-model="data.favorite"
        size="md"
        color="panel-primary"
        :true-value="true"
        :false-value="false"
        val="lg"
        label="Закреплен"
      />

      <div class="mt-16 pa-8">
        <q-btn
          label="Сохранить"
          type="submit"
          color="panel-primary"
          :loading="componentLoading"
        />
        <q-btn
          label="Назад"
          color="panel-primary"
          flat
          class="q-ml-sm"
          :loading="componentLoading"
          @click="router.push('/admin/pages')"
        />
      </div>
    </q-form>
    <q-dialog v-model="selectComponentDialog">
      <AddPageComponent @add="addComponent" />
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { apiFetch } from '~/extensions/fetch'
import isLogin from '~/components/admin/middleware/isLogin'
import isEntityExists from '~/components/admin/middleware/isEntityExists'
import useFeature from '~/components/admin/features/pages/page'
import { QUploader } from 'quasar'
import EditorComponent from '~/components/admin/widgets/component/EditorComponent.vue'
import ImageComponent from '~/components/admin/widgets/component/ImageComponent.vue'
import VideoComponent from '~/components/admin/widgets/component/VideoComponent.vue'
import ShortsComponent from '~/components/admin/widgets/component/ShortsComponent.vue'
import AddPageComponent from '~/components/admin/widgets/component/AddPageComponent/AddPageComponent.vue'
import CaseDetailsComponent from '~/components/admin/widgets/component/CaseDetailsComponent.vue'
import CaseComponent from '~/components/admin/widgets/component/CaseComponent.vue'
import CatalogMainComponent from '~/components/admin/widgets/component/CatalogMainComponent.vue'
import CatalogTextComponent from '~/components/admin/widgets/component/CatalogTextComponent.vue'
import CatalogAccordionComponent from '~/components/admin/widgets/component/CatalogAccordionComponent.vue'
import CatalogCarouselComponent from '~/components/admin/widgets/component/CatalogCarouselComponent.vue'
import CatalogBeforeAndAfterComponent from '~/components/admin/widgets/component/CatalogBeforeAndAfterComponent.vue'
import ImportedCarsMainComponent from '~/components/admin/widgets/component/ImportedCarsMainComponent.vue'
definePageMeta({
  layout: 'panel',
  middleware: [isLogin, isEntityExists('page', 'pageId')]
})

useSeoMeta({
  title: 'Страницы'
})

const router = useRouter()
const route = useRoute()

const posterUploader: Ref<QUploader | null> = ref(null)

defineExpose({
  posterUploader
})

const {
  types,
  services,
  data,
  errors,
  componentLoading,
  hintUrl,
  down,
  up,
  deleteComponent,
  addUidInComponent,
  addComponent,
  selectComponentDialog,
  removed,
  uploaded,
  failed,
  createFile,
  onSubmit
} = useFeature()

provide('data', data)
provide('componentLoading', componentLoading)

const init = async () => {
  const { page, info } = (await apiFetch(`/api/admin/page/${route.params.pageId}`)) as any

  if (page) {
    data.pageId = page.pageId
    data.type = page.type
    data.name = page.name
    data.title = page.title
    data.description = page.description
    data.keywords = page.keywords || ''
    data.url = page.url
    data.fields.brand = page.fields?.brand || ''
    data.fields.model = page.fields?.model || ''
    data.fields.yearOfManufactureFrom = page.fields?.yearOfManufactureFrom
    data.fields.yearOfManufactureUntil = page.fields?.yearOfManufactureUntil
    data.fields.yearOfManufacture = page.fields?.yearOfManufacture
    data.orderBy = page.orderBy
    data.poster = page.poster
    data.active = page.active
    data.favorite = page.favorite ?? false
    data.components = addUidInComponent(page.components)

    const posterFile = createFile(page.poster, true)
    const link = posterUploader.value as any
    link.files = [posterFile]
    link.updateFileStatus(posterFile, 'uploaded', 1)
    link.uploadedFiles = [posterFile]
  }

  types.value = info.types
  services.value = info.services
}

onMounted(() => {
  init()
})
</script>
