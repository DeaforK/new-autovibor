import { apiFetch } from '~/extensions/fetch'
import { type TCasePayload, type TCasesPayload } from '../types'

export const getCases = async (body?: TCasesPayload) => {
  try {
    return await apiFetch('/api/cases', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}

export const getCase = async (body: TCasePayload) => {
  try {
    return await apiFetch('/api/page', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}
