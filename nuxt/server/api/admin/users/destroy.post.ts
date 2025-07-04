import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import UserAdapter from '~/server/app/adapters/user.adapter'

const userAdap = new UserAdapter()

export default defineAuthenticatedEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const ids = body.userIds || []

    await userAdap.destroy(ids)

    return {
      message: 'Данные успешно изменены'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})