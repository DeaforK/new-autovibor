import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { searchScheme } from '~/server/schemas/page/searchScheme.scheme'
import PageAdapter from '~/server/app/adapters/page/page.adapter'

const pageAdap = new PageAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(searchScheme, body || {})

    const params = event.context.params || {}
    const result = await pageAdap.findAndCountAll(Number(params.page) || 0, prepareBody)

    return {
      ...result,
      pageTypes: pageAdap.types
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
