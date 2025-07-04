import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { userScheme } from '~/server/schemas/user.schema'
import UserAdapter from '~/server/app/adapters/user.adapter'

const userAdap = new UserAdapter()

export default defineAuthenticatedEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(userScheme, body || {})

    const code = await userAdap.saveOrUpdate(prepareBody)

    event.node.res.statusCode = code

    return {
      message: 'Данные успешно изменены'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})