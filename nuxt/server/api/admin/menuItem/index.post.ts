import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { menuItemSchema } from '~/server/schemas/menuItem.schema'
import MenuItemAdapter from '~/server/app/adapters/menuItem.adapter'

const menuAdap = new MenuItemAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const body = await readBody(event)
    const prepareBody = await joiWrapper(menuItemSchema, body || {})

    const code = await menuAdap.saveOrUpdate(prepareBody)

    event.node.res.statusCode = code

    return {
      message: 'Данные успешно изменены'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
