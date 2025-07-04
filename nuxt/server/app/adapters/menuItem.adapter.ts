import { ComplexError } from '~/server/app/shared/exceptions'
import MenuItemService from '~/server/app/services/menuItem.service'

const menuServ = new MenuItemService()

export default class MenuItemAdapter {
  public async saveOrUpdate(payload: Record<string, any>) {
    let responseCode = 201

    if (payload.menuItemId && payload.parentId && payload.menuItemId === payload.parentId) {
      throw new ComplexError('Исправьте ошибки', {
        code: 400,
        details: {
          parentId: 'Нельзя присвоить эту же страницу как родителя'
        }
      })
    }

    const menuItem = await menuServ.findOne(payload.parentId)

    if (menuItem?.parentId) {
      throw new ComplexError('Исправьте ошибки', {
        code: 400,
        details: {
          parentId: 'У этой страницы уже есть родительская страница'
        }
      })
    }

    if (payload.menuItemId && payload.parentId) {
      const children = await menuServ.findAllChildren(payload.menuItemId)
      if (children.length > 0) {
        throw new ComplexError('Исправьте ошибки', {
          code: 400,
          details: {
            parentId: 'Невозможно задать родителя, потому что у данной страницы уже есть другие дочерние элементы'
          }
        })
      }
    }

    if (payload.menuItemId) {
      const menuItemId = payload.menuItemId
      delete payload.menuItemId

      await menuServ.update(payload, menuItemId)

      responseCode = 200
    } else {
      await menuServ.create(payload)
    }

    return responseCode
  }

  public async findOneForAdmin(menuItem: number) {
    const item = await menuServ.findOne(menuItem)
    const parentPages = await menuServ.findAll()

    return {
      menuItem: item,
      parentPages
    }
  }

  public async findOne(menuItemId: number) {
    return await menuServ.findOne(menuItemId)
  }

  public async findAndCountAll(page: number) {
    return await menuServ.findAndCountAll(page)
  }

  public async destroy(ids: Array<number>) {
    return await menuServ.destroy(ids)
  }
}
