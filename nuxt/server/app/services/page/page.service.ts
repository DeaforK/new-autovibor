import { type WhereOptions, Op, fn } from 'sequelize'
import { type PageTypeData } from '~/server/app/entities/pageType.entity'
import Component, {
  type TextComponent,
  type ImageComponent,
  type SeperatorComponent,
  type VideoComponent,
  type CaseComponent,
  type CaseDetailsComponent,
  type CatalogMainComponent,
  type CatalogText,
  type CatalogBeforeAndAfter,
  type CatalogCarousel,
  type CatalogAccordion,
  type ImportedCarsMainComponent
} from '~/server/app/models/page/component.model'

import Page, { type Breadcrumbs } from '~/server/app/models/page/page.model'
import { ComplexError } from '../../shared/exceptions'

export default class PageService {
  private async buildComponents(components: any[], pageId: number) {
    const readyComponents = []
    for await (const component of components) {
      readyComponents.push({
        pageId,
        ...component
      })
    }

    return readyComponents
  }
  private urlModifier(
    url: string,
    type: PageTypeData['value'] | null,
    prepareResultForUpdatePage = false
  ) {
    if (prepareResultForUpdatePage) {
      return url.split('/').pop()
    }

    let newUrl = url
    switch (type) {
      case 'caseCar':
        newUrl = 'cases/' + url
        break
      case 'catalogCar':
        newUrl = 'catalog/' + url
        break
      case 'statment':
        newUrl = 'blog/articles/' + url
        break
      case 'video':
        newUrl = 'blog/videos/' + url
        break
      case 'shorts':
        newUrl = 'blog/shorts/' + url
        break
      case 'videoReviews':
        newUrl = 'blog/video-reviews/' + url
        break
      case 'importedCars':
        newUrl = 'imported-cars/' + url
        break
    }

    return newUrl
  }

  public async update(data: Record<string, any>, pageId = 0) {
    const payload = {
      type: data.type,
      name: data.name,
      poster: data.poster,
      title: data.title,
      description: data.description,
      keywords: data.keywords || '',
      url: this.urlModifier(data.url, data.type),
      orderBy: data.orderBy,
      fields: data.fields || {},
      active: data.active || false,
      favorite: data.favorite || false
    }

    const favoritesPageCount = await this.getFavoritesPageCount(data.type)

    if (favoritesPageCount >= 12 && data.favorite) throw new ComplexError('Закрепленных не должно быть больше 12')

    await Page.update(payload, {
      where: {
        pageId
      }
    })

    const components = await this.buildComponents(data.components, pageId)

    await Component.destroy({
      where: {
        pageId
      }
    })

    await Component.bulkCreate(components, {
      fields: ['pageId', 'type', 'props']
    })
  }

  public async create(data: Record<string, any>) {
    const payload = {
      type: data.type,
      name: data.name,
      poster: data.poster,
      title: data.title,
      description: data.description,
      keywords: data.keywords || '',
      url: this.urlModifier(data.url, data.type),
      orderBy: data.orderBy,
      fields: data.fields || {},
      active: data.active || false,
      favorite: data.favorite || false
    }

    const favoritesPageCount = await this.getFavoritesPageCount(data.type)

    if (favoritesPageCount >= 12 && data.favorite) throw new ComplexError('Закрепленных не должно быть больше 12')

    const newPage = await Page.create(payload)

    const components = await this.buildComponents(data.components, newPage.pageId)

    await Component.bulkCreate(components, {
      fields: ['pageId', 'type', 'props']
    })
  }

  private async getFavoritesPageCount(dataType: string) {
    const where: WhereOptions = { type: dataType, favorite: true }
    return (await Page.findAndCountAll({where})).count
  }

  public async findAndCountAll(page: number, searchData: Record<string, any>) {
    let offset = 0
    if (page > 1) {
      offset = (page - 1) * 10
    }

    const opt: any = {
      attributes: ['pageId', 'name', 'fields', 'type', 'active', 'createdAt', 'updatedAt'],
      order: [['pageId', 'DESC']],
      offset,
      limit: 10
    }

    if (
      searchData.search ||
      (searchData.selectedActivity !== undefined && searchData.selectedActivity !== null) ||
      searchData.selectedPageType
    ) {
      opt.where = {}
    }

    if (searchData.search) {
      opt.where['name'] = {
        [Op.iLike]: `%${searchData.search}%`
      }
    }

    if (searchData.selectedActivity !== undefined && searchData.selectedActivity !== null) {
      opt.where['active'] = searchData.selectedActivity
    }

    if (searchData.selectedPageType) {
      opt.where['type'] = searchData.selectedPageType
    }

    return await Page.findAndCountAll(opt)
  }

  public async filterCatalog(payload: Record<string, any>) {
    const limit = 12
    let offset = 0
    if (payload.page > 1) {
      offset = (payload.page - 1) * limit
    }

    delete payload.page

    const where: WhereOptions = {
      type: 'catalogCar',
      active: true
    }

    for (const key in payload) {
      if (payload[key]) {
        if (!where.fields) {
          where.fields = {}
        }

        where.fields[key] = {
          [Op.iLike]: `%${payload[key]}%`
        }
      }
    }

    const cars = await Page.findAndCountAll({
      where,
      offset,
      limit,
      order: [
        // ['orderBy', 'ASC'],
        ['pageId', 'DESC']
      ]
    })

    for (const car of cars.rows) {
      car.setDataValue('poster', '/' + car.poster)
    }

    return cars
  }

  public async filterImportedCars(payload: Record<string, any>) {
    const limit = 8
    let offset = 0
    if (payload.page > 1) {
      offset = (payload.page - 1) * limit
    }

    delete payload.page

    const where: WhereOptions = {
      type: 'importedCars',
      active: true
    }

    for (const key in payload) {
      if (payload[key]) {
        if (!where.fields) {
          where.fields = {}
        }

        where.fields[key] = {
          [Op.iLike]: `%${payload[key]}%`
        }
      }
    }

    const cars = await Page.findAndCountAll({
      where,
      offset,
      limit,
      order: [
        ['favorite', 'DESC'], ['pageId', 'DESC']
      ]
    })

    for (const car of cars.rows) {
      car.setDataValue('poster', '/' + car.poster)
    }

    return cars
  }

  public async filterCases(payload: Record<string, any>) {
    const limit = 12
    let offset = 0
    if (payload.page > 1) {
      offset = (payload.page - 1) * limit
    }

    delete payload.page

    const where: WhereOptions = {
      type: 'caseCar',
      active: true
    }

    for (const key in payload) {
      if (payload[key]) {
        if (!where.fields) {
          where.fields = {}
        }
        if (key === 'yearOfManufactureFrom' || key === 'yearOfManufactureTo') {
          continue
        } else {
          where.fields[key] = {
            [Op.iLike]: `%${payload[key]}%`
          }
        }
      }
    }

    if (payload.yearOfManufactureFrom && payload.yearOfManufactureTo) {
      if (!where.fields) {
        where.fields = {}
      }
      where.fields.yearOfManufacture = {
        [Op.between]: [Number(payload.yearOfManufactureFrom), Number(payload.yearOfManufactureTo)]
      }
    } else if (payload.yearOfManufactureFrom) {
      where.fields.yearOfManufacture = {
        [Op.gte]: Number(payload.yearOfManufactureFrom)
      }
    } else if (payload.yearOfManufactureTo) {
      where.fields.yearOfManufacture = {
        [Op.lte]: Number(payload.yearOfManufactureTo)
      }
    }

    const cars = await Page.findAndCountAll({
      where,
      offset,
      limit,
      order: [
        // ['orderBy', 'ASC'],
        ['pageId', 'DESC']
      ]
    })

    for (const car of cars.rows) {
      car.setDataValue('poster', '/' + car.poster)
    }

    return cars
  }

  public async buildFilterForCatalog() {
    const result: Record<string, Set<string>> = {}

    const cars = await Page.findAll({
      where: {
        type: 'catalogCar',
        active: true
      }
    })

    for (const car of cars) {
      const fields = car?.fields as Record<string, any>
      const brand = fields.brand.toUpperCase()
      const model = fields.model.toUpperCase()

      if (brand && model) {
        if (!result[brand]) {
          result[brand] = new Set()
        }
        result[brand].add(model)
      }
    }

    const brandsWithModels: Record<string, string[]> = {}
    for (const brand in result) {
      brandsWithModels[brand] = Array.from(result[brand])
    }

    return brandsWithModels
  }

  public async buildFilterForImportedCars() {
    const result: Record<string, Set<string>> = {}

    const cars = await Page.findAll({
      where: {
        type: 'importedCars',
        active: true
      }
    })

    for (const car of cars) {
      const fields = car?.fields as Record<string, any>
      const brand = fields.brand.toUpperCase()
      const model = fields.model.toUpperCase()

      if (brand && model) {
        if (!result[brand]) {
          result[brand] = new Set()
        }
        result[brand].add(model)
      }
    }

    const brandsWithModels: Record<string, string[]> = {}
    for (const brand in result) {
      brandsWithModels[brand] = Array.from(result[brand])
    }

    return brandsWithModels
  }

  public async buildFilterForCases() {
    const result: Record<string, Set<string>> = {}

    const cars = await Page.findAll({
      where: {
        type: 'caseCar',
        active: true
      }
    })

    for (const car of cars) {
      const fields = car?.fields as Record<string, any>
      const brand = fields.brand.toUpperCase()
      const model = fields.model.toUpperCase()

      if (brand && model) {
        if (!result[brand]) {
          result[brand] = new Set()
        }
        result[brand].add(model)
      }
    }

    const brandsWithModels: Record<string, string[]> = {}
    for (const brand in result) {
      brandsWithModels[brand] = Array.from(result[brand])
    }

    return brandsWithModels
  }

  public async findAllActive() {
    return await Page.findAll({
      order: [
        ['orderBy', 'ASC'],
        ['pageId', 'DESC']
      ],
      where: {
        active: true
      }
    })
  }

  public async findOne(pageId: number) {
    const page = await Page.findOne({
      include: ['components'],
      order: [[{ model: Component, as: 'components' }, 'componentId', 'ASC']],
      where: {
        pageId
      }
    })

    if (page) {
      page.setDataValue('url', this.urlModifier(page.url, null, true))
    }

    return page
  }

  public async destroy(pageIds: Array<number>) {
    const find = await Page.findAll({
      attributes: ['url'],
      where: {
        pageId: pageIds
      }
    })

    await Page.destroy({
      where: {
        pageId: pageIds
      }
    })

    return {
      deletedUrls: find.map(page => page.url),
      deletedPageIds: pageIds
    }
  }

  public async findOneByUrl(url: string) {
    let page: Page | null = null
    let where: WhereOptions = {
      url,
      active: true
    }

    page = await Page.findOne({
      include: ['components'],
      order: [[{ model: Component, as: 'components' }, 'componentId', 'ASC']],
      where
    })

    if (!page) {
      return null
    }
    const newComps: Component[] = []
    const tabs: { [key: string]: Component[] } = {}

    for await (const component of page.components || []) {
      if (component.type === 'editor') {
        component.props = component.props as TextComponent
      }
      if (component.type === 'seperator') {
        component.props = component.props as SeperatorComponent
      }
      if (component.type === 'caseDetails') {
        component.props = component.props as CaseDetailsComponent
      }

      if (component.type === 'caseMain') {
        component.props = component.props as CaseComponent
        if (component.props.images) {
          component.props.images = component.props.images.map(image => '/' + image)
        }
      }
      if (component.type === 'catalogMain') {
        component.props = component.props as CatalogMainComponent
        if (component.props.images) {
          component.props.images = component.props.images.map(image => '/' + image)
        }
      }
      if (component.type === 'video') {
        component.props = component.props as VideoComponent
      }

      if (component.type === 'catalogText') {
        const key = (component.props as CatalogText)?.key
        if (!tabs[key]) {
          tabs[key] = []
        }
        tabs[key].push(component)
        continue
      }
      if (component.type === 'catalogCarousel') {
        const key = (component.props as CatalogCarousel)?.key
        if (!tabs[key]) {
          tabs[key] = []
        }
        tabs[key].push(component)
        continue
      }
      if (component.type === 'catalogBeforeAndAfter') {
        const key = (component.props as CatalogBeforeAndAfter)?.key
        if (!tabs[key]) {
          tabs[key] = []
        }
        tabs[key].push(component)
        continue
      }
      if (component.type === 'catalogAccordion') {
        const key = (component.props as CatalogAccordion)?.key
        if (!tabs[key]) {
          tabs[key] = []
        }
        tabs[key].push(component)
        continue
      }

      if (component.type === 'image') {
        component.props = component.props as ImageComponent
        if (component.props.image) {
          component.props.image = '/' + component.props.image
        }
      }
      if (component.type === 'importedCarsMain') {
        component.props = component.props as ImportedCarsMainComponent
        if (component.props.images) {
          component.props.images = component.props.images.map(image => '/' + image)
        }
      }
      newComps.push(component)
    }

    page.setDataValue('components', newComps)
    page.setDataValue('tabs', tabs)

    page.setDataValue('poster', '/' + page.poster)
    page.setDataValue('breadcrumbs', this.createBreadcrumbs(page))

    return page
  }

  public createBreadcrumbs(page: Page): Breadcrumbs[] {
    const items: Breadcrumbs[] = [
      {
        label: 'Главная',
        to: '/'
      }
    ]

    if (page.type === 'catalogCar') {
      items.push({
        label: 'Каталог моделей',
        to: '/catalog/'
      })
    } else if (page.type === 'caseCar') {
      items.push({
        label: 'Уже подобрали',
        to: '/cases/'
      })
    } else if (page.type === 'statment') {
      items.push({
        label: 'Блог записей',
        to: '/blog/articles/'
      })
    } else if (page.type === 'video') {
      items.push({
        label: 'Блог видео',
        to: '/blog/videos/'
      })
    } else if (page.type === 'shorts') {
        items.push({
          label: 'Shorts',
          to: '/blog/shorts/'
      })
    } else if (page.type === 'importedCars') {
      items.push({
        label: 'Авто из за рубежа',
        to: '/car-delivery'
      })
    }

    items.push({
      label: page.name,
      to: '/' + page.url
    })

    return items
  }

  public async findAndCountAllByType(page: number, type: string) {
    let offset = 0
    if (page > 1) {
      offset = (page - 1) * 12
    }
    return await Page.findAndCountAll({
      where: {
        [Op.and]: [{ type: type }, { active: true }]
      },
      // order: [['orderBy', 'DESC']],
      order: [['favorite', 'ASC'], ['pageId', 'DESC']],
      offset,
      limit: 12
    })
  }

  public async getRandomPages(
    similarPage: {
      type: string
      pageId: number
    },
    limit = 3
  ) {
    const where: WhereOptions = {
      active: true,
      type: similarPage.type,
      pageId: {
        [Op.notIn]: [similarPage.pageId]
      }
    }

    const pages = await Page.findAll({
      attributes: ['name', 'poster', 'url'],
      order: [fn('random')],
      limit,
      where
    })

    for (const page of pages) {
      page.setDataValue('poster', '/' + page.poster)
    }

    return pages
  }
}
