
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { carCheckScheme } from '~/server/schemas/form.schema'

import FeedAdapter from '~/server/app/adapters/form.adapter'

const feedbackAdap = new FeedAdapter()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(carCheckScheme, body || {})

    await feedbackAdap.sendSpecialMessage(prepareBody, 'checkVIN')

    return {
      message: 'Спасибо за ваше обращение! Ожидайте звонка менеджера, а пока загляните в раздел Блог или Shorts.'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})