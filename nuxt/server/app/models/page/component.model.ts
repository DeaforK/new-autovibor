import { string } from 'joi'
import { Model, DataTypes, type CreationOptional } from 'sequelize'
import db from '~/server/app/db'

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
  catalogRatingComponent: [
    {
      id: number
      label: string
      value: number
    }
  ]
  catalogBenefits: string[]
  plusesMinuses: {
    pluses: string[]
    minuses: string[]
  }
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

export type CatalogText = {
  title: string
  text: string
  key: string
  bordered: boolean
}

export type CatalogCarousel = {
  images: string[]
  title: string
  key: string
}

export type CatalogBeforeAndAfter = {
  images: [string, string]
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

export type CaseDetailsComponent = {
  benefits: string[]
  negative: string[]
  recommended: string[]
}

export type ImportedCarsMainComponent = {
  title: string
  mileage: number
  images: string[]
  engineVolume: string
  gear: string
  price: string
}

class Component extends Model {
  declare componentId: CreationOptional<number>
  declare pageId: number
  declare type:
    | 'editor'
    | 'image'
    | 'video'
    | 'seperator'
    | 'caseMain'
    | 'caseDetails'
    | 'catalogMain'
    | 'catalogText'
    | 'catalogCarousel'
    | 'catalogBeforeAndAfter'
    | 'catalogAccordion'
    | 'importedCarsMain'

  declare props?:
    | TextComponent
    | ImageComponent
    | null
    | VideoComponent
    | SeperatorComponent
    | CaseComponent
    | CaseDetailsComponent
    | CatalogMainComponent
    | CatalogText
    | CatalogCarousel
    | CatalogBeforeAndAfter
    | CatalogAccordion
    | ImportedCarsMainComponent

  declare createdAt: CreationOptional<Date>
}

Component.init(
  {
    componentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    pageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    props: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    createdAt: DataTypes.DATE
  },
  {
    tableName: 'components',
    updatedAt: false,
    sequelize: db
  }
)

export default Component
