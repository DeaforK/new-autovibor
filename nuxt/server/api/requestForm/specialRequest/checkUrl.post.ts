
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { carUrlScheme } from '~/server/schemas/form.schema'

import FeedAdapter from '~/server/app/adapters/form.adapter'

const feedbackAdap = new FeedAdapter()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(carUrlScheme, body || {})

    await feedbackAdap.sendSpecialMessage(prepareBody, 'checkUrl')

    return {
      message: 'Спасибо за ваше обращение! Ожидайте звонка менеджера, а пока загляните в раздел Блог или Shorts.'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})