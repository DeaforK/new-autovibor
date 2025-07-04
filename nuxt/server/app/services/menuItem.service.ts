import { Op, Sequelize } from 'sequelize'
import MenuItem from '~/server/app/models/menuItem.model'

export default class MenuItemService {
  public async create(data: Record<string, any>) {
    await MenuItem.create({
      title: data.title,
      url: data.url,
      isActive: data.isActive,
      orderBy: data.orderBy,
      parentId: data.parentId || null
    })
  }

  public async findAll() {
    return await MenuItem.findAll()
  }

  public async findAllChildren(menuItemId: number) {
    return await MenuItem.findAll({
      attributes: ['parentId'],
      where: {
        parentId: menuItemId
      }
    })
  }

  public async findAllMenuItems() {
    return await MenuItem.findAll({
      attributes: ['menuItemId', 'title', 'url', 'parentId'],
      where: {
        isActive: true
      },
      raw: true,
      order: [['orderBy', 'ASC']]
    })
  }

  public async update(data: Record<string, any>, menuItemId = 0) {
    await MenuItem.update(
      {
        title: data.title,
        url: data.url,
        isActive: data.isActive,
        orderBy: data.orderBy,
        parentId: data.parentId || null
      },
      {
        where: {
          menuItemId
        }
      }
    )
  }

  public async destroy(menuItemIds: Array<number>) {
    return await MenuItem.destroy({
      where: {
        menuItemId: menuItemIds
      }
    })
  }

  public async findOne(menuItemId: number) {
    return await MenuItem.findOne({
      where: {
        menuItemId
      }
    })
  }

  public async findAndCountAll(page: number) {
    let offset = 0
    if (page > 1) {
      offset = (page - 1) * 10
    }

    const menuItems = await MenuItem.findAndCountAll({
      order: [['menuItemId', 'DESC']],
      offset,
      limit: 10
    })

    for (const menuItem of menuItems.rows) {
      if (menuItem.parentId) {
        const item = await this.findOne(menuItem.parentId)
        menuItem.setDataValue('parentInfo', item)
      }
    }
    return menuItems
  }
}
