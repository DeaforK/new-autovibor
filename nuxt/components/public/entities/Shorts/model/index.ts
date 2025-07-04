import * as ShortsApi from '../api'
import { type TShortsPayload, type TShortResponse, type TShortsResponse } from '../types'

export const useShortsStore = defineStore('shorts', () => {
  const getShorts = async (body:number): Promise<TShortsResponse> => {
    return (await ShortsApi.getShorts(body)) as TShortsResponse
  }

  const getShort = async (body: TShortsPayload): Promise<TShortResponse> => {
    return (await ShortsApi.getShort(body)) as TShortResponse
  }

  return {
    getShorts,
    getShort
  }
})
