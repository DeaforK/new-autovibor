import { apiFetch } from '~/extensions/fetch'

export default (entity: any, id: string) => {
  return defineNuxtRouteMiddleware(async (to) => {
    const doOrId = to.params[id] as any || 0
    if (doOrId !== 'create') {
      if (isNaN(doOrId)) {
        throw createError({ statusCode: 404, message: 'Страница не найдена' })
      }

      const headers = useRequestHeaders(['cookie'])
      const result = await apiFetch(`/api/admin/${entity}/${doOrId}`, { headers }) as any

      if (!result[entity]) {
        throw createError({ statusCode: 404, message: 'Страница не найдена' })
      }
    }
  })
}