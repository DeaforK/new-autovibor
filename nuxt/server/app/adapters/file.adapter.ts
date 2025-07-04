import { type MultiPartData } from 'h3'
import FileService, { type DatabaseFile } from '~/server/app/services/file.service'

const fileServ = new FileService()

export default class FileAdapter {
  public async saveFiles(data: MultiPartData | MultiPartData[], destination = 'system', forPublic = false) {
    let files: DatabaseFile[] | null = null

    if (Array.isArray(data)) {
      files = await fileServ.processFiles(data, destination)
    } else {
      files =  await fileServ.processFiles([data], destination)
    }

    if (forPublic) {
      for (let file of files) {
        file = file.get()
        file.path = '/' + file.path
      }
    }

    return files
  }
}