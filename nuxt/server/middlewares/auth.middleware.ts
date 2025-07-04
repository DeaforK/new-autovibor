import { H3Event } from 'h3'
import initSession from '~/server/app/shared/session'

export function defineAuthenticatedEventHandler<T>(handler: (event: H3Event) => T | Promise<T>) {
  return defineEventHandler(async (event) => {
    const session = await initSession(event)

    if (!session.data.user) {
      setResponseStatus(event, 403)
      return {
        error: 'Требуется авторизация',
        statusCode: 403
      }
    }

    return handler(event)
  })
}