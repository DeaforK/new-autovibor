import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { helpOnRoadSchecma } from '~/server/schemas/form.schema'

import FeedAdapter from '~/server/app/adapters/form.adapter'

const feedbackAdap = new FeedAdapter()

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(helpOnRoadSchecma, body || {})

    await feedbackAdap.sendSpecialMessage(prepareBody, 'help')

    return {
      message: 'Благодарим за обращение в команду АВТОВЫБОР, в ближайшее время с Вами свяжется менеджер'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
