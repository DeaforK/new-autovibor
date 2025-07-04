import { apiFetch } from '~/extensions/fetch'

export const sendFiles = async (body: { [key: string]: string }): Promise<{ message: string }> => {
  try {
    const res = (await apiFetch('/api/files', {
      method: 'post',
      body
    })) as Promise<{ message: string }>

    return res
  } catch (e) {
    throw e
  }
}
