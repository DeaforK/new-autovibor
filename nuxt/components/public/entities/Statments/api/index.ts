import { apiFetch } from '~/extensions/fetch'
import { type TStatmentPayload } from '../types'

export const getStatments = async (body: number) => {
  try {
    return await apiFetch('/api/statmentBlog', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}

export const getStatment = async (body: TStatmentPayload) => {
  try {
    return await apiFetch('/api/page', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}
