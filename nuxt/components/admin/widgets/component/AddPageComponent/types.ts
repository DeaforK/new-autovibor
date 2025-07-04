export type SiteComponent = {
  type:
    | 'editor'
    | 'image'
    | 'video'
    | 'seperator'
    | 'caseMain'
    | 'caseDetails'
    | 'catalogMain'
    | 'catalogMain'
    | 'catalogText'
    | 'catalogCarousel'
    | 'catalogBeforeAndAfter'
    | 'catalogAccordion'
    | 'shorts'
    | 'importedCarsMain'
  props:
    | TextComponent
    | ImageComponent
    | SeperatorComponent
    | VideoComponent
    | ShortsComponent
    | CaseComponent
    | CaseDetailsComponent
    | CatalogMainComponent
    | CatalogText
    | CatalogCarousel
    | CatalogBeforeAndAfter
    | CatalogAccordion
    | ImportedCarsMainComponent
    | null
}

export type TextComponent = {
  text: string
}

export type ImageComponent = {
  image: string
  alt: string
  hint?: string
}

export type CatalogText = {
  title?: string
  text: string
  key: string
  bordered: boolean
}

export type CatalogCarousel = {
  images: string[]
  title?: string
  key: string
}

export type CatalogBeforeAndAfter = {
  images: [string, string]
  title?: string
  key: string
}

export type CatalogAccordion = {
  key: string
  title?: string
  items: {
    title: string
    description: string
  }[]
}

export type CaseComponent = {
  title?: string | null
  engine: number | null
  transmission: string
  gear: string
  owners: number | null
  mileage: number | null
  specialict: string
  service: number | null
  yearOfService: number | null
  price: string | null
  images: string[]
}

export type CaseDetailsComponent = {
  benefits: string[]
  negative: string[]
  recommended: string[]
}

export type SeperatorComponent = {
  text: string
}

export type VideoComponent = {
  url: string
}

export type ShortsComponent = {
  url: string
}

export type CatalogMainComponent = {
  title: string
  images: string[]
  transmission: string
  gear: string
  power: string
  fuel: string
  taxes: string
  price: string
  rating: { id: number; label: string; value: number | null }[]
  recommendation: string[]
  plusesAndMinuses: {
    pluses: string[]
    minuses: string[]
  }
}

export type ImportedCarsMainComponent = {
  title: string
  mileage: number
  images: string[]
  engineVolume: string
  gear: string
  price: string
}