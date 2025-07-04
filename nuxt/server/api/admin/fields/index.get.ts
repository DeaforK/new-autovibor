import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import FieldAdapter from '~/server/app/adapters/field.adapter'

const fieldAdap = new FieldAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const query = getQuery(event)
    const module = query.module ? String(query.module) : 'settings'

    const result = await fieldAdap.findAllByModule(module)
    return result
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
