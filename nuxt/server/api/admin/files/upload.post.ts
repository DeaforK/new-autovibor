import { defineAuthenticatedEventHandler } from '~/server/middlewares/auth.middleware'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { readMultipartFormDataWrapper } from '~/server/app/shared/request'
import FileAdapter from '~/server/app/adapters/file.adapter'

const fileAdap = new FileAdapter()

export default defineAuthenticatedEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormDataWrapper(event)
    if (!formData.files) {
      throw new Error('Файлы не найдены')
    }

    const query = getQuery(event)
    const destination = query.destination ? String(query.destination) : 'system'

    const files = await fileAdap.saveFiles(formData.files, destination)

    event.node.res.statusCode = 201

    return {
      files
    }
  } catch (error) {
    return createErrorResponse(event, error)
  }
})