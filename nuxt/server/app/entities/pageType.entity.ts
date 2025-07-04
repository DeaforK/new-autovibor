import type Entity from '~/server/app/entities/interfaces/entity.interface'

export type PageTypeData = {
  value: 'video' | 'statment' | 'catalogCar' | 'caseCar' | 'shorts' | 'videoReviews' | 'importedCars'
  label: string
  orderBy: number
}

export default class PageType implements Entity<PageTypeData> {
  public list: Array<PageTypeData> = [
    {
      value: 'video',
      label: 'Блог видео',
      orderBy: 10
    },
    {
      value: 'statment',
      label: 'Cтатья',
      orderBy: 20
    },
    {
      value: 'catalogCar',
      label: 'Каталог автомобилей',
      orderBy: 30
    },
    {
      value: 'caseCar',
      label: 'Уже подобрали',
      orderBy: 30
    },
    {
      value: 'shorts',
      label: 'Shorts',
      orderBy: 30
    },
    {
      value: 'videoReviews',
      label: 'Видео отзывы',
      orderBy: 10
    },
    {
      value: 'importedCars',
      label: 'Машины из за рубежа',
      orderBy: 30
    }
  ]

  public find(value: string) {
    return this.list.find(tag => tag.value === value)
  }
}
