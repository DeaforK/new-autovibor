import { apiFetch } from '~/extensions/fetch'
import { type TCarPayload, type TCatalogPayload } from '../types'

export const getCatalog = async (body?: TCatalogPayload) => {
  try {
    return await apiFetch('/api/catalog', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}

export const getCar = async (body: TCarPayload) => {
  try {
    return await apiFetch('/api/page', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}
