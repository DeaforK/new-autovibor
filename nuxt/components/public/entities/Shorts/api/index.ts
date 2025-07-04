import { apiFetch } from '~/extensions/fetch'
import { type TShortsPayload } from '../types'

export const getShorts = async (body: number) => {
  try {
    return await apiFetch('/api/shorts', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}

export const getShort = async (body: TShortsPayload) => {
  try {
    return await apiFetch('/api/page', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}
