<template>
  <q-card style="width: 100%">
    <q-card-section>
      <div class="text-h6">
        Выберите компонент
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row">
        <div
          v-for="(item, index) in pageComponents"
          :key="index"
          class="col-md-6 q-pa-sm"
        >
          <q-btn
            style="width: 100%"
            outline
            color="panel-primary"
            :label="item.name"
            @click="selectComponent(item.componentId)"
          />

          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        v-close-popup
        flat
        label="Закрыть"
        color="panel-primary"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { type SiteComponent } from '~/components/admin/widgets/component/AddPageComponent/types'

const pageComponents = [
  {
    name: 'Текстовый блок',
    description: 'Текстовый редактор',
    componentId: 1
  },
  {
    name: 'Картинка',
    description: 'Картинка',
    componentId: 2
  },
  {
    name: 'Видео',
    description:
      'Ссылка на видео с YouTube. Выберите видео на платформе, нажмите "Поделиться", потом "Встроить" и скопируйте ссылку на видео из src тега iframe',
    componentId: 3
  },
  {
    name: 'Shorts',
    description:
      'Ссылка на видео с YouTube Shorts. Выберите нужное видео на платформе, нажмите "Поделиться", потом "Встроить" и скопируйте ссылку на видео из src тега iframe',
    componentId: 4
  },
  {
    name: 'Разделитель',
    description: 'Добавьте разделитель на свою страницу',
    componentId: 5
  },
  {
    name: 'Характеристики для “Уже подобрали”',
    description:
      'Описывает характеристики подобранного авто, также какая услуга была оказана и кем',
    componentId: 6
  },
  {
    name: 'Плюсы и минусы для уже подобрали',
    description:
      'Данный блок дает заполнить информацию о плюсах и минусах автомобиля, а также включается в себя рекомендации.',
    componentId: 7
  },
  {
    name: 'Общая информация Каталог',
    description:
      'Данный блок содержит в себе характеристики автомобиля, преимущества, лучшие конфигурации, рекомендации.',
    componentId: 8
  },
  {
    name: 'Текстовый редактор для каталога',
    description: 'Текстовый редактор',
    componentId: 9
  },
  {
    name: 'Карусель фотографий для каталога',
    description:
      'дает возможность прикрепить фотографии в конкретному табу, а также добавить до фотографий.',
    componentId: 10
  },
  {
    name: 'Картинка до/после для каталога',
    description:
      'Вставьте две картинки, которые можно будет перетягивать на сайте. Не забудьте задать связь с табом.',
    componentId: 11
  },
  {
    name: 'Аккордеон для каталога',
    description: 'Раскрывающийся ответ на вопрос. Не забудьте задать связь с табом.',
    componentId: 12
  },
  {
    name: 'Общая информация авто из за рубежа',
    description: 'Данный блок содержит в себе характеристики автомобиля, преимущества, лучшие конфигурации, рекомендации.',
    componentId: 13
  }
]

const availableСomponents: Record<number, SiteComponent> = {
  1: {
    type: 'editor',
    props: {
      text: '<p>Начните писать здесь...</p>'
    }
  },
  2: {
    type: 'image',
    props: {
      image: '',
      alt: '',
      hint: ''
    }
  },
  3: {
    type: 'video',
    props: {
      url: ''
    }
  },
  4: {
    type: 'shorts',
    props: {
      url: ''
    }
  },
  5: {
    type: 'seperator',
    props: {
      text: '***'
    }
  },
  6: {
    type: 'caseMain',
    props: {
      title: '',
      engine: null,
      transmission: '',
      gear: '',
      owners: null,
      mileage: null,
      specialict: '',
      service: 1,
      yearOfService: null,
      price: '',
      images: ['']
    }
  },
  7: {
    type: 'caseDetails',
    props: {
      benefits: [''],
      negative: [''],
      recommended: ['']
    }
  },
  8: {
    type: 'catalogMain',
    props: {
      title: '',
      images: [''],
      transmission: '',
      gear: '',
      power: '',
      fuel: '',
      taxes: '',
      price: '',
      rating: [
        { id: 1, label: 'Вместительный', value: null },
        { id: 2, label: 'Динамичный', value: null },
        { id: 3, label: 'Для бездорожья', value: null },
        { id: 4, label: 'Для семьи', value: null },
        { id: 5, label: 'Представительный', value: null },
        { id: 6, label: 'Компактный', value: null },
        { id: 7, label: 'Технологичный', value: null },
        { id: 8, label: 'Общая оценка', value: null }
      ],
      recommendation: [''],
      plusesAndMinuses: {
        pluses: [''],
        minuses: ['']
      }
    }
  },
  9: {
    type: 'catalogText',
    props: {
      title: '',
      text: '<p>Начните писать здесь...</p>',
      key: '',
      bordered: false
    }
  },

  10: {
    type: 'catalogCarousel',
    props: {
      images: [''],
      title: '',
      key: ''
    }
  },

  11: {
    type: 'catalogBeforeAndAfter',
    props: {
      title: '',
      images: ['', ''],
      key: ''
    }
  },

  12: {
    type: 'catalogAccordion',
    props: {
      key: '',
      title: '',
      items: [
        {
          title: '',
          description: ''
        }
      ]
    }
  },
  13: {
    type: 'importedCarsMain',
    props: {
      title: '',
      images: [''],
      mileage: 0,
      engineVolume: '',
      gear: '',
      price: ''
    }
  }
}

const emit = defineEmits<{
  (e: 'add', newComponent: SiteComponent): void
}>()

const selectComponent = (componentId: number) => {
  const component = availableСomponents[componentId]
  emit('add', component)
}
</script>

<style lang="scss" scoped>
.description {
  font-weight: 400;
  word-break: break-word;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  padding: 8px 0px;
  margin-bottom: 0;
}
</style>
