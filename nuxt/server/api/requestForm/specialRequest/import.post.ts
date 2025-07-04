import FeedAdapter from '~/server/app/adapters/form.adapter'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { importCarSchema } from '~/server/schemas/form.schema'
import { joiWrapper } from '~/server/app/shared/joi'

const feedbackAdap = new FeedAdapter()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(importCarSchema, body || {})

    await feedbackAdap.sendSpecialMessage(prepareBody, 'importCarScheme')

    return {
      message: 'Спасибо за ваше обращение! Ожидайте звонка менеджера, а пока загляните в раздел Блог или Shorts.'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})