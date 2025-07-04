import * as CatalogApi from '../api'
import {
  type TCarPayload,
  type TCarResponse,
  type TCatalogPayload,
  type TCatalogResponse
} from '../types'

export const useCatalogStore = defineStore('catalog', () => {
  const getCatalog = async (body?: TCatalogPayload): Promise<TCatalogResponse> => {
    return (await CatalogApi.getCatalog(body)) as TCatalogResponse
  }

  const getCar = async (body: TCarPayload): Promise<TCarResponse> => {
    return (await CatalogApi.getCar(body)) as TCarResponse
  }

  return {
    getCatalog,
    getCar
  }
})
