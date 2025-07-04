import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { createAndUpdate } from '~/server/schemas/page/createAndUpdate.scheme'
import PageAdapter from '~/server/app/adapters/page/page.adapter'

const pageAdap = new PageAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(createAndUpdate, body || {})

    const code = await pageAdap.saveOrUpdate(prepareBody)

    event.node.res.statusCode = code

    return {
      message: 'Данные успешно изменены'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
