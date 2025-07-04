export type TCasesPayload = {
  name?: string
  model?: string
  brand?: string
  yearOfManufactureFrom?: string
  yearOfManufactureTo?: string
  page: number
}

export type TCasePayload = {
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

export type CaseDetailsComponent = {
  benefits: string[]
  negative: string[]
  recommended: string[]
}

export type CaseComponent = {
  title?: string | null
  engine: number
  transmission: string
  gear: string
  owners: number
  mileage: number
  specialict: string
  service: number
  yearOfService: number
  price: string
  images: string[]
}

export type Component = {
  componentId: number
  type: 'editor' | 'image' | 'video' | 'seperator' | 'caseMain' | 'caseDetails'
  props?:
    | TextComponent
    | ImageComponent
    | null
    | VideoComponent
    | SeperatorComponent
    | CaseDetailsComponent
    | CaseComponent
}

export type TCase = {
  type: 'caseCar'
  active: boolean
  createdAt: Date
  description: string
  keywords: string
  name: string
  components?: Array<Component>
  orderBy: number
  pageId: number
  poster: string
  title: string
  updatedAt: string
  url: string
  similarPages?: Array<TCase>
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

export type TCasesValue = {
  model: string
  brand: string
  yearOfManufactureFrom: number
  yearOfManufactureUntil: number
}

export type TCasesResponse = {
  cars: {
    rows: Array<TCase>,
    count: number
  }
  values: Array<TCasesValue>
}

export type TServiceList = {
    services: {
      id: number
      label: string
      url: string
    }[]
  }


export type TCaseResponse = {
  page: TCase
  info: TServiceList
}
