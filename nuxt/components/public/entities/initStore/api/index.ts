import { apiFetch } from '~/extensions/fetch'
import { type TInitData } from '../types'

export const getInitData = async () => {
  try {
    return (await apiFetch('/api/init')) as TInitData
  } catch (e) {
    throw e
  }
}
