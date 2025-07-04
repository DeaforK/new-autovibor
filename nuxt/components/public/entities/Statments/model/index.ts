import * as StatmentsApi from '../api'
import { type TStatmentPayload, type TStatmentResponse, type TStatmentsResponse } from '../types'

export const useStatmentsStore = defineStore('statment', () => {
  const getStatments = async (body: number): Promise<TStatmentsResponse> => {
    return (await StatmentsApi.getStatments(body)) as TStatmentsResponse
  }

  const getStatment = async (body: TStatmentPayload): Promise<TStatmentResponse> => {
    return (await StatmentsApi.getStatment(body)) as TStatmentResponse
  }

  return {
    getStatments,
    getStatment
  }
})
