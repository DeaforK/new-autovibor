import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import PageAdapter from '~/server/app/adapters/page/page.adapter'

const pageAdap = new PageAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const body = await readBody(event)
    const ids = body.pageIds || []

    await pageAdap.destroy(ids)

    return {
      message: 'Данные успешно изменены'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
