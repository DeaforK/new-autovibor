import { type UnwrapNestedRefs } from 'vue'
import { uid } from '~/components/admin/shared/libs/helpers'
import { apiFetch } from '~/extensions/fetch'

import { type SiteComponent } from '~/components/admin/widgets/component/AddPageComponent/types'

type SiteComponentInRender = SiteComponent & {
  uid?: number
}
export default () => {
  const { notify } = useQuasar()
  const router = useRouter()
  const componentLoading = ref(false)
  const types = ref([])
  const services = ref([])
  const selectComponentDialog = ref(false)

  const data = reactive({
    pageId: null,
    name: '',
    type: '',
    title: '',
    description: '',
    keywords: '',
    url: '',
    fields: {
      brand: '',
      model: '',
      yearOfManufactureFrom: '',
      yearOfManufactureUntil: '',
      yearOfManufacture: '',
      content: ''
    },
    orderBy: 0,
    poster: null,
    active: true,
    components: [] as SiteComponentInRender[],
    favorite: false
  })

  const errors: UnwrapNestedRefs<Record<string, any>> = reactive({
    name: '',
    type: '',
    title: '',
    description: '',
    keywords: '',
    url: '',
    fields: {
      brand: '',
      model: '',
      yearOfManufactureUntilFrom: '',
      yearOfManufactureUntil: '',
      yearOfManufacture: '',
      content: ''
    },
    orderBy: '',
    poster: null,
    components: [],
    active: true,
    favorite: true
  })

  const hintUrl = computed(() => {
    let url = 'example'

    switch (data.type) {
      case 'caseCar':
        url = 'cases/' + url
        break
      case 'catalogCar':
        url = 'catalog/' + url
        break
      case 'statment':
        url = 'blog/articles/' + url
        break
      case 'video':
        url = 'blog/videos/' + url
        break
      case 'shorts':
        url = 'blog/shorts/' + url
        break
      case 'videoReviews':
        url = 'blog/videoReviews/' + url
        break
    }

    return `Введите URL без пробелов. Пример: example. Будет автовыбор-екб.рф/${url}/`
  })

  const clearComponentsErrors = () => {
    errors.components = []
  }

  const addComponent = (component: Record<string, any>) => {
    selectComponentDialog.value = false
    data.components.push({
      uid: uid(),

      ...JSON.parse(JSON.stringify(component))
    })
  }

  const up = (index: number) => {
    clearComponentsErrors()

    setTimeout(() => {
      const currentIndex = index
      const previousIndex = index - 1

      const thisItem = data.components[currentIndex]
      const previous = data.components[previousIndex]
      if (!previous) {
        return false
      }

      data.components[currentIndex] = previous
      data.components[previousIndex] = thisItem
    }, 300)
  }

  const down = (index: number) => {
    clearComponentsErrors()

    setTimeout(() => {
      const currentIndex = index
      const nextIndex = index + 1

      const thisItem = data.components[currentIndex]
      const next = data.components[nextIndex]
      if (!next) {
        return false
      }

      data.components[currentIndex] = next
      data.components[nextIndex] = thisItem
    }, 300)
  }

  const deleteComponent = (index: number) => {
    clearComponentsErrors()

    data.components.splice(index, 1)
  }

  const removed = () => {
    data.poster = null
    errors.poster = ''
  }

  const addUidInComponent = (components: SiteComponent[] = []) => {
    return components.map(component => {
      return {
        uid: uid(),
        ...component
      }
    })
  }

  const failed = (info: any) => {
    const response = JSON.parse(info.xhr.response)
    notify({
      color: 'negative',
      textColor: 'white',
      icon: 'warning',
      message: response.error || 'Упс, произошла ошибка'
    })
    errors.poster = response.error
    componentLoading.value = false
  }

  const uploaded = (info: any) => {
    const response = JSON.parse(info.xhr.response)
    data.poster = response.files[0].path
    errors.poster = ''
  }

  const createFile = (name: string, needParse = false) => {
    if (needParse) {
      const split = name.split('/')
      const filename = split[split.length - 1]
      name = filename
    }

    return new File([], name, {
      type: 'image/pdf'
    })
  }

  const onSubmit = async () => {
    const body: Record<string, any> = { ...data }

    if (body.type === 'caseCar') {
      body.fields = {
        brand: data.fields.brand,
        model: data.fields.model,
        yearOfManufacture: data.fields.yearOfManufacture
      }
    } else if (body.type === 'catalogCar') {
      body.fields = {
        brand: data.fields.brand,
        model: data.fields.model,
        yearOfManufactureFrom: data.fields.yearOfManufactureFrom,
        yearOfManufactureUntil: data.fields.yearOfManufactureUntil
      }
    } else if (body.type === 'importedCars') {
      body.fields = {
        brand: data.fields.brand,
        model: data.fields.model,
        yearOfManufacture: data.fields.yearOfManufacture
      }
    } else if (body.type === 'statment') {
      body.fields = {}
    } else if (body.type === 'video') {
      body.fields = undefined
    } else if (body.type === 'shorts') {
      body.fields = undefined
    } else if (body.type === 'videoReviews') {
      body.fields = undefined
    }

    body.components = body.components.map((comp: any) => {
      let cmp = {
        type: comp.type,
        props: comp.props
      }
      return cmp
    })

    componentLoading.value = true

    await apiFetch('/api/admin/page', {
      method: 'post',
      body
    })
      .then((result: any) => {
        notify({
          color: 'positive',
          textColor: 'white',
          icon: 'done',
          message: result.message || 'Успех'
        })
        router.push('/admin/pages')
      })
      .catch(err => {
        for (const key in err.details) {
          errors[key] = err.details[key]
          if (key === 'components') {
            for (const j in err.details[key]) {
              errors[key][j] = err.details[key][j]
            }
          }
        }

        notify({
          color: 'negative',
          textColor: 'white',
          icon: 'warning',
          message: err.message || 'Упс, произошла ошибка'
        })
      })

    componentLoading.value = false
  }

  return {
    types,
    data,
    componentLoading,
    errors,
    selectComponentDialog,
    addComponent,
    removed,
    hintUrl,
    deleteComponent,
    addUidInComponent,
    down,
    up,
    uploaded,
    failed,
    createFile,
    onSubmit,
    services
  }
}
