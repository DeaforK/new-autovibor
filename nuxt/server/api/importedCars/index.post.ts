import PageAdapter from '~/server/app/adapters/page/page.adapter'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { importedCarScheme } from '~/server/schemas/importedCars.schema'
import { joiWrapper } from '~/server/app/shared/joi'

const pageAdap = new PageAdapter()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(importedCarScheme, body || {})

    const result = await pageAdap.filterImportedCars(prepareBody)

    return result
  } catch (error) {
    return createErrorResponse(event, error)
  }
})