import { Sequelize } from 'sequelize'
import { catchSequelizeQueryError } from '~/server/app/shared/exceptions'

const db = new Sequelize(
  process.env.DB_DATABASE || 'nuxt_cms',
  process.env.DB_USERNAME || 'avln',
  process.env.DB_PASSWORD || 'dg!wyzZts%^aadgHApZ',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: process.env.ENABLE_SEQUELIZE_LOGS == '1' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000
    }
  }
)

db.query = async function () {
  try {
    return (await Sequelize.prototype.query.apply(this, arguments as any)) as any
  } catch (e: unknown) {
    const error = e as any
    catchSequelizeQueryError(error)
  }
}

// db.sync({
//   alter: true
// })

export default db
