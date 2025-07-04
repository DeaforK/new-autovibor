import { createErrorResponse } from '~/server/app/shared/exceptions'
import PageAdapter from '~/server/app/adapters/page/page.adapter'

const pageAdap = new PageAdapter()
const type = 'video'
export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const page = body ? Number(body) : 0
    const result = await pageAdap.findAndCountAllByType(Number(page) || 0, type)

    return result
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
