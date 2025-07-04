import { randomUUID } from 'node:crypto'
import path from 'node:path'
import fs from 'node:fs'
import { type MultiPartData } from 'h3'
import File from '~/server/app/models/file.model'

export interface DatabaseFile extends File {
  path?: string
}

export default class FileService {
  public async processFiles(files: MultiPartData[], to: string) {
    const forDB = []
    for await (const file of files) {
      const filename = this.generateName(file)
      const destination = await this.generatePath(to)
      const size = await this.writeFile(file.data, destination, filename)

      forDB.push({
        filename,
        destination,
        size,
        mimetype: file.type
      })
    }

    const result = await this.addInDB(forDB)

    return result
  }

  private generateName(file: MultiPartData) {
    const uid = randomUUID()
    const name = uid.replace(/-/g, '')
    const fileExtension = path.extname(file.filename || '')
    return name + fileExtension
  }

  private async generatePath(destination: string) {
    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const fullFolderPath = `${year}/${month}/${day}`
    const checkFolders = [
      path.join(process.cwd(), `/static/images/${destination}/${year}`),
      path.join(process.cwd(), `/static/images/${destination}/${year}/${month}`),
      path.join(process.cwd(), `/static/images/${destination}/${fullFolderPath}`)
    ]

    for await (const checkFolder of checkFolders) {
      if (!fs.existsSync(checkFolder)) {
        await fs.promises.mkdir(checkFolder)
      }
    }

    return `images/${destination}/${fullFolderPath}/`
  }

  private async writeFile(data: Buffer, destination: string, filename: string) {
    const size = data.length
    const psth = `static/${destination}/${filename}`
    await fs.promises.writeFile(psth, data)

    return size
  }

  private prepareResultFiles(files: Array<DatabaseFile>) {
    for (let file of files) {
      file = file.get()
      if (!file.path) {
        file.path = `${file.destination}${file.filename}`
      }
    }
    return files
  }

  private async addInDB(files: Array<any>) {
    const result = await File.bulkCreate(files, {
      fields: ['filename', 'destination', 'size', 'mimetype']
    })

    return this.prepareResultFiles(result)
  }
}