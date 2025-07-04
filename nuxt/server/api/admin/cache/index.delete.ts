import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import CacheAdapter from '~/server/app/adapters/cache.adapter'

const cacheAdap = new CacheAdapter()

export default defineAuthenticatedEventHandler(async (event) => {
  try {
    await cacheAdap.clear()

    return {
      message: 'Кеш успешно очищен'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})