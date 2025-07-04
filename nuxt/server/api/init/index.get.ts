import { createErrorResponse } from '~/server/app/shared/exceptions'
import InitAdapter from '~/server/app/adapters/init.adapter'

const initAdap = new InitAdapter()

export default defineEventHandler(async event => {
  try {
    const result = await initAdap.startup()
    return result
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
