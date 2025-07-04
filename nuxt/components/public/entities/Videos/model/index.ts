import * as VideoApi from '../api'
import { type TVideoPayload, type TVideoResponse, type TVideosResponse } from '../types'

export const useVideosStore = defineStore('video', () => {
  const getVideos = async (body:number): Promise<TVideosResponse> => {
    return (await VideoApi.getVideos(body)) as TVideosResponse
  }

  const getVideo = async (body: TVideoPayload): Promise<TVideoResponse> => {
    return (await VideoApi.getVideo(body)) as TVideoResponse
  }

  return {
    getVideos,
    getVideo
  }
})
