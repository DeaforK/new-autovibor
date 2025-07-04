import { Model, DataTypes, type CreationOptional } from 'sequelize'
import Component from '~/server/app/models/page/component.model'

import db from '~/server/app/db'

interface StatementFields {
  content: string
}

interface CatalogFields {
  brand: string
  model: string
  yearOfManufactureFrom: number
  yearOfManufactureUntil: number
}

interface CaseFields {
  brand: string
  model: string
  yearOfManufacture: number
}

export type Breadcrumbs = {
  label: string
  to: string
}

class Page extends Model {
  declare pageId: CreationOptional<number>
  declare type: string
  declare name: string
  declare poster?: string
  declare title: string
  declare description: string
  declare keywords?: string
  declare url: string
  declare orderBy: number
  declare components?: Component[]
  declare tabs?: {
    [key: string]: Component[];
  }
  declare fields?: StatementFields | CatalogFields | CaseFields | null
  declare active: boolean
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare similarPages?: Page[]
  declare breadcrumbs?: Breadcrumbs[]
}

Page.init(
  {
    pageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(500),
      unique: true,
      allowNull: false
    },
    orderBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fields: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    tableName: 'pages',
    sequelize: db
  }
)

Page.hasMany(Component, { foreignKey: 'pageId', sourceKey: 'pageId', as: 'components' })

export default Page
