import { apiFetch } from '~/extensions/fetch'

export default defineNuxtRouteMiddleware(async (_to) => {
  const headers = useRequestHeaders(['cookie'])
  const { user } = await apiFetch('/api/user/authenticated', { headers }) as any

  if (!user) {
    throw createError({ statusCode: 404, message: 'Страница не найдена' })
  }
})