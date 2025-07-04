import { createErrorResponse } from '~/server/app/shared/exceptions'
import initSession from '~/server/app/shared/session'

export default defineEventHandler(async (event) => {
  try {
    const session = await initSession(event)
    return {
      user: session.data.user || null
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})