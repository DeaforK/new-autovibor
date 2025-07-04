import FieldService from '~/server/app/services/field.service'
import MenuItemService from '../services/menuItem.service'
import calculateDaysDiff from '../shared/calculation'

const fieldServ = new FieldService()
const menuServ = new MenuItemService()

export default class InitAdapter {
  public async startup() {
    let hardCache = false
    const fields = await fieldServ.findAll()
    const menuItems = await menuServ.findAllMenuItems()
    const settings = []
    const requisites = []
    const statistics = [
      {
        name: 'успешной работы',
        value: 7,
        prefix: 'лет',
        ms: 130
      },
      {
        name: 'автомобилей проверено',
        value: 35000,
        ms: 25
      },
      {
        name: 'человек воспользовались нашими услугами',
        value: 14800,
        ms: 30
      },
      {
        name: 'параметров проверки',
        value: 95,
        ms: 50
      }
    ]

    const importedPageStatistics = [
      {
        name: 'успешно привозим',
        value: 3,
        prefix: 'года',
        ms: 130
      },
      {
        name: 'автомобилей проверено за границей',
        value: 6000,
        ms: 25
      },
      {
        name: 'человек воспользовались нашими услугами',
        value: 800,
        ms: 30
      },
      {
        name: 'параметров проверки',
        value: 95,
        ms: 50
      }
    ]

    let menu = menuItems.filter(item => item.parentId === null)
    menu = menu.map(item => {
      item.subPages = []
      return item
    })

    const childrenItems = menuItems.filter(item => item.parentId !== null)
    for (const item of childrenItems) {
      const find = menu.find(i => i.menuItemId === item.parentId)
      find?.subPages?.push(item)
    }

    for (const field of fields) {
      if (field.module === 'settings') {
        settings.push(field)
      } else if (field.module === 'requisites') {
        requisites.push(field)
      }

      delete field.module
    }

    const constantDate = '2024-05-29'
    const daysDifference = calculateDaysDiff(constantDate)

    const carsValue = daysDifference * 4
    const peopleValue = daysDifference * 2
    statistics[1].value += carsValue
    statistics[2].value += peopleValue

    importedPageStatistics[1].value += carsValue - 3
    importedPageStatistics[2].value += peopleValue - 8

    return {
      settings,
      menu,
      statistics,
      importedPageStatistics,
      requisites
    }
  }
}
