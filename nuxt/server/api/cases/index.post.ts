import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { casesScheme } from '~/server/schemas/cases.schema'

import PageAdapter from '~/server/app/adapters/page/page.adapter'

const pageAdap = new PageAdapter()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(casesScheme, body || {})

    const result = await pageAdap.filterCases(prepareBody)

    return result
  } catch (error) {
    return createErrorResponse(event, error)
  }
})