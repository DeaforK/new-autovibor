import * as FilesApi from '../api'

export const useFeedbackStore = defineStore('feedback', () => {
  const sendFiles = async (body: { [key: string]: string }) => {
    return await FilesApi.sendFiles(body)
  }

  return {
    sendFiles
  }
})
