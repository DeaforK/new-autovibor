import { apiFetch } from '~/extensions/fetch'
import { type TVideoPayload } from '../types'

export const getVideos = async (body: number) => {
  try {
    return await apiFetch('/api/videoBlog', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}

export const getVideo = async (body: TVideoPayload) => {
  try {
    return await apiFetch('/api/page', {
      method: 'post',
      body
    })
  } catch (e) {
    throw e
  }
}
