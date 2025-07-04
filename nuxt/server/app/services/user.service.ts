import CryptoJS from 'crypto-js'

import User from '~/server/app/models/user.model'

export default class UserService {
  private secret = '3hA#*4oVCx2'

  private decryptPassword(password: string) {
    const words = CryptoJS.enc.Base64.parse(password)
    const aesString = CryptoJS.enc.Utf8.stringify(words)
    const passwordBytes = CryptoJS.AES.decrypt(aesString, this.secret)
    return passwordBytes.toString(CryptoJS.enc.Utf8)
  }

  private encryptPassword(password: string) {
    const aesString = CryptoJS.AES.encrypt(password, this.secret).toString()
    const words = CryptoJS.enc.Utf8.parse(aesString)
    return CryptoJS.enc.Base64.stringify(words)
  }

  public async loginProcess(login: string, password: string) {
    const user = await User.findOne({
      raw: true,
      where: {
        login,
        active: true
      }
    })

    if (!user) { return null }

    if (user.errorAttemptLogin > 3) {
      return null
    }

    const actualPassword = this.decryptPassword(user.password)
    if (password !== actualPassword) {
      await User.increment('errorAttemptLogin', {
        by: 1,
        where: {
          userId: user.userId
        }
      })

      return null
    }

    return {
      userId: user.userId
    }
  }

  public async update(data: Record<string, any>, userId = 0) {
    data.password = this.encryptPassword(data.password)

    await User.update({
      login: data.login,
      password: data.password,
      active: data.active
    }, {
      where: {
        userId
      }
    })
  }

  public async create(data: Record<string, any>) {
    data.password = this.encryptPassword(data.password)

    await User.create({
      login: data.login,
      password: data.password,
      active: data.active,
      errorAttemptLogin: 0
    })
  }

  public async findAndCountAll(page: number) {
    let offset = 0
    if (page > 1) { offset = (page - 1) * 10 }

    return await User.findAndCountAll({
      attributes: ['userId', 'login', 'active', 'createdAt', 'updatedAt'],
      order: [
        ['userId', 'DESC']
      ],
      offset,
      limit: 10
    })
  }

  public async findOne(userId: number) {
    const user = await User.findOne({
      raw: true,
      where: {
        userId
      }
    })

    if (!user) { return null }
    user.password = this.decryptPassword(user.password)

    return user
  }

  public async destroy(userIds: Array<number>) {
    const count = await User.count()
    if (count === userIds.length) {
      throw new Error('Нельзя удалить всех пользователей')
    }

    return await User.destroy({
      where: {
        userId: userIds
      }
    })
  }
}