export type TStatmentsResponse = {
  count: number
  rows: Array<TStatment>
}

export type TStatmentPayload = {
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

export type ShortComponent = {
  url: string
}

export type Component = {
  componentId: number
  type: 'editor' | 'image' | 'video' | 'seperator' | 'shorts'
  props?: TextComponent | ImageComponent | null | VideoComponent | SeperatorComponent | ShortComponent
}

export type TStatment = {
  type: 'statment'
  active: boolean
  createdAt: Date
  description: string
  keywords: string
  name: string
  orderBy: number
  pageId: number
  poster: string
  title: string
  components?: Array<Component>
  updatedAt: string
  url: string
  similarPages?: Array<TStatment>
  fields: {}
  favorite: boolean
  breadcrumbs: {
    label: string
    to: string
  }[]
}

export type TStatmentResponse = {
  page: TStatment
}
