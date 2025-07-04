export type TImportedCarsPayload = {
  name?: string
  model?: string
  brand?: string
  yearOfManufactureFrom?: number
  yearOfManufactureTo?: number
  page: number
}

export type TCarPayload = {
  url: string
}
export type TextComponent = {
  text: string
}

export type ImageComponent = {
  image: string
  alt: string
  hint?: string
}

export type SeperatorComponent = {
  text: string
}

export type VideoComponent = {
  url: string
}

export interface CatalogText {
  title: string
  text: string
  key: string
  bordered: boolean
}

export interface CatalogCarousel {
  images: string[]
  title: string
  key: string
}

export interface CatalogBeforeAndAfter {
  images: [string, string]
  key: string
}

export interface CatalogAccordion {
  key: string
  title?: string
  items: {
    title: string
    description: string
  }[]
}

export type Component = {
  componentId: number
  type: 'editor' | 'image' | 'video' | 'seperator' | 'catalogMain' | 'importedCarsMain'
  props?:
    | TextComponent
    | ImageComponent
    | null
    | VideoComponent
    | SeperatorComponent
    | ImportedCarsMainComponent
}

export type TabComponent = {
  componentId: number
  type: 'catalogText' | 'catalogCarousel' | 'catalogBeforeAndAfter' | 'catalogAccordion'
  props?:
    | CatalogText
    | CatalogCarousel
    | CatalogBeforeAndAfter
    | CatalogAccordion
    | TextComponent
    | ImageComponent
}

export type ImportedCarsMainComponent = {
  componentId: number
  type: string
  title: string
  mileage: number
  images: string[]
  engineVolume: string
  gear: string
  price: string
}

export type TCar = {
  type: 'catalogCar'
  active: boolean
  createdAt: Date
  description: string
  keywords: string
  components?: Array<Component>
  name: string
  orderBy: number
  pageId: number
  poster: string
  title: string
  updatedAt: string
  url: string
  favorite: boolean
  tabs: {
    [key: string]: TabComponent[]
  }
  similarPages?: Array<TCar>
  fields: {
    model: string
    brand: string
    yearOfManufacture: number
  }
  breadcrumbs: {
    label: string
    to: string
  }[]
}

export type TCatalogValue = {
  model: string
  brand: string
  yearOfManufactureFrom: number
  yearOfManufactureUntil: number
}

export type TImportedCarsResponse = {
  cars: {
    rows: Array<TCar>,
    count: number
  }
  values: Array<TCatalogValue>
}

export type TCarResponse = {
  page: TCar
}
