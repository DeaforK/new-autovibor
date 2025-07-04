import PageAdapter from '~/server/app/adapters/page/page.adapter'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'

const pageAdap = new PageAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const params = event.context.params || {}
    const { page } = await pageAdap.findOne(Number(params.pageId) || 0)

    return {
      page,
      info: {
        types: pageAdap.types,
        services: pageAdap.services
      }
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
