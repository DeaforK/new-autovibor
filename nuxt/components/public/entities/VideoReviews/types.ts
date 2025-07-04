export type TVideosResponse = {
  count: number
  rows: Array<TVideoReview>
}

export type TVideoPayload = {
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
  props?: TextComponent | ImageComponent | null | VideoComponent | SeperatorComponent | ShortComponent
}

export type TVideoReview = {
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
  components?: Array<Component>
  updatedAt: string
  url: string
  similarPages?: Array<TVideoReview>
  fields: {}
  favorite: boolean
  breadcrumbs: {
    label: string
    to: string
  }[]
}

export type TVideoResponse = {
  page: TVideoReview
}
