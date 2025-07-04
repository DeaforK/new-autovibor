import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import MenuItemAdapter from '~/server/app/adapters/menuItem.adapter'

const menuAdap = new MenuItemAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const body = await readBody(event)
    const ids = body.menuItemsIds || []

    await menuAdap.destroy(ids)

    return {
      message: 'Данные успешно изменены'
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
