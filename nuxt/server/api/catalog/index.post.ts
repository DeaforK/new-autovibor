import PageAdapter from '~/server/app/adapters/page/page.adapter'
import { catalogCarScheme } from '~/server/schemas/catalogCar.schema'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'

const pageAdap = new PageAdapter()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(catalogCarScheme, body || {})

    const result = await pageAdap.filterCatalog(prepareBody)

    return result
  } catch (error) {
    return createErrorResponse(event, error)
  }
})