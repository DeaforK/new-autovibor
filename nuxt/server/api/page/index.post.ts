import { createErrorResponse } from '~/server/app/shared/exceptions'
import PageAdapter from '~/server/app/adapters/page/page.adapter'

const pageAdap = new PageAdapter()

export default defineEventHandler(async event => {
  try {
    const body = (await readBody(event)) || {}
    const url = body.url || ''

    const page = await pageAdap.findOneByUrl(url)
    return {
      page,
      info: {
        services: pageAdap.services
      }
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
