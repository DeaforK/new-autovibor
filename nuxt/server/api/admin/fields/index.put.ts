import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { fieldsSchemes } from '~/server/schemas/field.schema'
import FieldAdapter from '~/server/app/adapters/field.adapter'

const fieldAdap = new FieldAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(fieldsSchemes, body || [])

    await fieldAdap.updateFields(prepareBody)

    return {
      message: 'Данные успешно изменены'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
