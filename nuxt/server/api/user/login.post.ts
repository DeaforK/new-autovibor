import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import initSession from '~/server/app/shared/session'
import UserAdapter from '~/server/app/adapters/user.adapter'
import { loginScheme } from '~/server/schemas/user.schema'

const userAdap = new UserAdapter()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(loginScheme, body || {})

    const user = await userAdap.login(prepareBody)

    const session = await initSession(event)
    await session.update((data) => {
      data.user = user
      return data
    })

    return {
      user,
      message: 'Успешный вход'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})