import * as ImportedCarsApi from '../api'
import {
  type TCarPayload,
  type TCarResponse,
  type TImportedCarsPayload,
  type TImportedCarsResponse
} from '../types'

export const useImportedCarsStore = defineStore('importedCars', () => {
  const getImportedCars = async (body?: TImportedCarsPayload): Promise<TImportedCarsResponse> => {
    return (await ImportedCarsApi.getImportedCars(body)) as TImportedCarsResponse
  }

  const getImportedCar = async (body: TCarPayload): Promise<TCarResponse> => {
    return (await ImportedCarsApi.getImportedCar(body)) as TCarResponse
  }

  return {
    getImportedCars,
    getImportedCar
  }
})
