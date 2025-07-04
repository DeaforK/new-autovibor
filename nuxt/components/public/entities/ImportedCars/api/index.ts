import { apiFetch } from '~/extensions/fetch'
import { type TCarPayload, type TImportedCarsPayload } from '../types'

export const getImportedCars = async (body?: TImportedCarsPayload) => {
  try {
    return await apiFetch('/api/importedCars', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}

export const getImportedCar = async (body: TCarPayload) => {
  try {
    return await apiFetch('/api/page', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}
