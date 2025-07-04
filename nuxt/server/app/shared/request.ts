import { type MultiPartData, H3Event } from 'h3'

// Абсолютно неясная нагрузка из вне, то что мы не можем контролировать. Например:
// requestBody из HTTP запросов; объект из фреймворка без описания типа.
export type Payload = {
  [propName: string]: any
}

export class RequestStatus {
  static success = 'success'
  static fail = 'fail'
}

export const multipartFormDataSort = async (formData: MultiPartData[]) => {
  const result: Record<string, MultiPartData | MultiPartData[]> = {}

  for await (const data of formData) {
    if (!data.name) { continue }
    if (data.data.length === 0) { continue }

    if (result[data.name]) {
      if (Array.isArray(result[data.name])) {
        (result[data.name] as MultiPartData[]).push(data)
      } else {
        const previous = result[data.name] as MultiPartData
        result[data.name] = [previous, data]
      }
    } else {
      result[data.name] = data
    }
  }

  return result
}

export const readMultipartFormDataWrapper = async (event: H3Event, limit = 2048000) => {
  const contentLength = Number(event.node.req.headers['content-length']) || 0
  if (contentLength > limit) {
    throw new Error('Превышен разовый лимит передачи данных. Не более 2мб')
  }

  const body = await readMultipartFormData(event)
  if (!body) {
    throw new Error('Пустой объект с данными')
  }

  const formData = await multipartFormDataSort(body)
  return formData
}