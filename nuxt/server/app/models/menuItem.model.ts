import { Model, DataTypes, type CreationOptional } from 'sequelize'

import db from '~/server/app/db'

class MenuItem extends Model {
  declare menuItemId: CreationOptional<number>
  declare title: string
  declare url: string
  declare isActive: boolean
  declare orderBy: number
  declare parentId?: number | null
  declare parentInfo?: MenuItem | null
  declare subPages?: MenuItem[]
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

MenuItem.init(
  {
    menuItemId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    tableName: 'menuItems',
    sequelize: db
  }
)

export default MenuItem
