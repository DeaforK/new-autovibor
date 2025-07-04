import type Entity from '~/server/app/entities/interfaces/entity.interface'

export type ServicesTypeData = {
  id: number
  label: string
  url: string
}

export default class ServicesType implements Entity<ServicesTypeData> {
  public list: Array<ServicesTypeData> = [
    {
      id: 1,
      label: 'Выездная диагностика авто',
      url: '/services/car-diagnose'
    },
    {
      id: 2,
      label: 'Подбор под ключ',
      url: '/services/car-choise'
    },
    {
      id: 3,
      label: 'Проверка автомобиля',
      url: '/services/car-check'
    },
    {
      id: 4,
      label: 'Подбор нового автомобиля',
      url: '/services/car-new'
    },
    {
      id: 5,
      label: 'Сопровождение сделки',
      url: '/services/transaction-support'
    },
    {
      id: 6,
      label: 'Эксперт на день',
      url: '/services/expert'
    }
  ]

  public find(id: number) {
    return this.list.find(tag => tag.id === id)
  }
}
