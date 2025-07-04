export const apiFetch = async (request: any, opts?: any) => {
  const baseURL = process.server ? (process.env.API_URL || 'http://localhost:3000/') : '/'
  const fetch = $fetch.create({
    baseURL
  })

  return await fetch(request, opts)
    .catch(e => {
      const error = e
      error.details = {}

      if (e.response && e.response._data) {
        error.message = e.response._data.error
        error.details = e.response._data.details
      }
      throw error
    })
}
