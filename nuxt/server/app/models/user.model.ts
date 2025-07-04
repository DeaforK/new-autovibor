import { Model, DataTypes, type CreationOptional } from 'sequelize'

import db from '~/server/app/db'

class User extends Model {
  declare userId: CreationOptional<number>
  declare login: string
  declare password: string
  declare active: boolean
  declare errorAttemptLogin: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    errorAttemptLogin: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    tableName: 'users',
    sequelize: db
  }
)

export default User