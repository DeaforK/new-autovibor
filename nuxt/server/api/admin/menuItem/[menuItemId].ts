import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import MenuItemAdapter from '~/server/app/adapters/menuItem.adapter'

const menuAdap = new MenuItemAdapter()

export default defineAuthenticatedEventHandler(async event => {
  try {
    const params = event.context.params || {}

    const {
      menuItem,
      parentPages
    } = await menuAdap.findOneForAdmin(Number(params.menuItemId) || 0)

    return {
      menuItem,
      parentPages
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})
