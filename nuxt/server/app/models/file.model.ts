import { Model, DataTypes, type CreationOptional } from 'sequelize'

import db from '~/server/app/db'

class File extends Model {
  declare fileId: CreationOptional<number>
  declare filename: string
  declare destination: string
  declare size?: number
  declare mimetype?: string
  declare createdAt: CreationOptional<Date>
  declare webPath?: string
}

File.init(
  {
    fileId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: DataTypes.DATE
  },
  {
    tableName: 'files',
    updatedAt: false,
    sequelize: db
  }
)

export default File