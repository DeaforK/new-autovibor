import { ComplexError } from '~/server/app/shared/exceptions'
import PageService from '~/server/app/services/page/page.service'
import PageTypeEntity from '~/server/app/entities/pageType.entity'
import ServiceTypeEntity from '~/server/app/entities/serviceType.entity'

const pageServ = new PageService()
const pageType = new PageTypeEntity()
const servicesType = new ServiceTypeEntity()

export default class PageAdapter {
  public types = pageType.list
  public services = servicesType.list

  public async saveOrUpdate(payload: Record<string, any>) {
    let responseCode = 201

    if (payload.pageId) {
      await pageServ.update(payload, payload.pageId)
      responseCode = 200
    } else {
      await pageServ.create(payload)
    }
    return responseCode
  }

  public async findOne(pageId: number) {
    const page = await pageServ.findOne(pageId)
    return {
      page
    }
  }

  public async filterCatalog(payload: Record<string, any>) {
    const values = await pageServ.buildFilterForCatalog()
    const cars = await pageServ.filterCatalog(payload)

    return {
      values,
      cars
    }
  }

  public async filterImportedCars(payload: Record<string, any>) {
    const values = await pageServ.buildFilterForImportedCars()
    const cars = await pageServ.filterImportedCars(payload)

    return {
      values,
      cars
    }
  }

  public async filterCases(payload: Record<string, any>) {
    const values = await pageServ.buildFilterForCases()
    const cars = await pageServ.filterCases(payload)

    return {
      values,
      cars
    }
  }

  public async findAndCountAll(page: number, searchData: Record<string, any>) {
    return await pageServ.findAndCountAll(page, searchData)
  }

  public async findAndCountAllByType(page: number, type: string) {
    return await pageServ.findAndCountAllByType(page, type)
  }

  public async destroy(ids: Array<number>) {
    await pageServ.destroy(ids)
    return true
  }

  public async findOneByUrl(url: string) {
    const page = await pageServ.findOneByUrl(url)
    if (!page) {
      throw new ComplexError('Страница не найдена', {
        code: 404
      })
    }

    if (
      page.type === 'caseCar' ||
      page.type === 'catalogCar' ||
      page.type === 'statment' ||
      page.type === 'video' ||
      page.type === 'shorts' ||
      page.type === 'videoReviews' ||
      page.type === 'importedCars'
    ) {
      const similarPages = await pageServ.getRandomPages({
        type: page.type,
        pageId: page.pageId
      })
      page.setDataValue('similarPages', similarPages)
    }

    return page
  }
}
