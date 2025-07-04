import { Model, DataTypes, type CreationOptional } from 'sequelize'

import db from '~/server/app/db'

class Fields extends Model {
  declare fieldId: CreationOptional<number>
  declare module?: string
  declare key: string
  declare label: string
  declare hint: string
  declare type: string
  declare content: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

Fields.init(
  {
    fieldId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    module: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    key: {
      type: DataTypes.STRING(25),
      unique: true,
      allowNull: false
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hint: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    tableName: 'fields',
    sequelize: db
  }
)

export default Fields
