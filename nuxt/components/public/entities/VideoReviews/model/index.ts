import * as VideoApi from '../api'
import { type TVideoPayload, type TVideoResponse, type TVideosResponse } from '../types'

export const useVideosReviewsStore = defineStore('videoReviews', () => {
  const getVideosReviews = async (body:number): Promise<TVideosResponse> => {
    return (await VideoApi.getVideosReviews(body)) as TVideosResponse
  }

  const getVideoReview = async (body: TVideoPayload): Promise<TVideoResponse> => {
    return (await VideoApi.getVideoReview(body)) as TVideoResponse
  }

  return {
    getVideosReviews,
    getVideoReview
  }
})
