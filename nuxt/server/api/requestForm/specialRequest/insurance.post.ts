import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { insuranceSchema } from '~/server/schemas/form.schema'

import FeedAdapter from '~/server/app/adapters/form.adapter'

const feedbackAdap = new FeedAdapter()

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(insuranceSchema, body || {})

    await feedbackAdap.sendSpecialMessage(prepareBody, 'insurance')

    return {
      message: 'Багодарим за обращение в команду АВТОВЫБОР, в ближайшее время с Вами свяжется менеджер, а пока загляните в раздел Блог или Shorts'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
