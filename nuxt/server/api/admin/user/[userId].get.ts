import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import UserAdapter from '~/server/app/adapters/user.adapter'

const userAdap = new UserAdapter()

export default defineAuthenticatedEventHandler(async (event) => {
  try {
    const params = event.context.params || {}
    const user = await userAdap.findOne(Number(params.userId) || 0)

    return {
      user
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})