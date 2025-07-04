import * as CasesApi from '../api'
import {
  type TCasePayload,
  type TCaseResponse,
  type TCasesPayload,
  type TCasesResponse
} from '../types'

export const useCasesStore = defineStore('cases', () => {
  const getCases = async (body?: TCasesPayload, page?: number): Promise<TCasesResponse> => {
    return (await CasesApi.getCases(body)) as TCasesResponse
  }

  const getCase = async (body: TCasePayload): Promise<TCaseResponse> => {
    return (await CasesApi.getCase(body)) as TCaseResponse
  }

  return {
    getCases,
    getCase
  }
})
