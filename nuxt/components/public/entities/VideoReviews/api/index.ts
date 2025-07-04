import { apiFetch } from '~/extensions/fetch'
import { type TVideoPayload } from '../types'

export const getVideosReviews = async (body: number) => {
  try {
    return await apiFetch('/api/videoReviews', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}

export const getVideoReview = async (body: TVideoPayload) => {
  try {
    return await apiFetch('/api/page', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}
