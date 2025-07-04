import { ComplexError } from '~/server/app/shared/exceptions'
import UserService from '~/server/app/services/user.service'

const usrServ = new UserService()

export default class UserAdapter {
  public async login(payload: Record<string, any>) {
    const login = payload.login
    const password = payload.password

    const user = await usrServ.loginProcess(login, password)

    if (!user) {
      throw new ComplexError('Исправьте ошибки', {
        details: {
          login: 'Неверный логин или пароль',
          password: 'Неверный логин или пароль'
        },
        code: 400
      })
    }

    return user
  }

  public async saveOrUpdate(payload: Record<string, any>) {
    let responseCode = 201

    if (payload.userId) {
      const userId = payload.userId
      delete payload.userId

      await usrServ.update(payload, userId)

      responseCode = 200
    } else {
      await usrServ.create(payload)
    }

    return responseCode
  }

  public async findOne(userId: number) {
    return await usrServ.findOne(userId)
  }

  public async findAndCountAll(page: number) {
    return await usrServ.findAndCountAll(page)
  }

  public async destroy(ids: Array<number>) {
    return await usrServ.destroy(ids)
  }
}