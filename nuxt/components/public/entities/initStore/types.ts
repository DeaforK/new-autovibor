export type TInitData = {
  requisites: []
  settings: []
  menu: []
  statistics: []
  importedPageStatistics: []
}

export type TInitStatistics = {
  name: string
  value: number
  prefix?: string
  ms: number
}

export type TInitField = {
  fieldId: string
  key: string
  type: string
  content: string
}

export type TInitMenu = {
  menuItemId: number
  title: string
  url: string
  parentId: null
  subPages: { menuItemId: number; parentId: number; title: string; url: string }[]
}
