export type TShortsResponse = {
  count: number
  rows: Array<TShort>
}

export type TShortsPayload = {
  url: string
}

export type TextComponent = {
  text: string
}

export type ImageComponent = {
  image: string
  alt:string
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
  componentId : number
  type: 'editor' | 'image' | 'video' | 'seperator' | 'shorts'
  props?: TextComponent | ImageComponent | null | ShortComponent | SeperatorComponent | VideoComponent
}

export type TShort = {
  type: 'video'
  active: boolean
  createdAt: Date
  description: string
  keywords: string
  name: string
  orderBy: number
  pageId: number
  poster: string
  title: string
  favorite: boolean
  components?: Array<Component>
  updatedAt: string
  url: string
  similarPages?: Array<TShort>
  fields: {}
  breadcrumbs: {
    label: string
    to: string
  }[]
}

export type TShortResponse = {
  page: TShort
}
