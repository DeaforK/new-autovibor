import { H3Event } from 'h3'
import { type Payload } from '~/server/app/shared/request'

type ComplexErrorConstructor = {
  code?: number | undefined,
  details?: ComplexFieldError | undefined
}

export type ComplexFieldError = {
  [propName: string]: string | ComplexFieldError;
}

export class ComplexError extends Error {
  code: number
  details?: ComplexFieldError | undefined

  constructor(message: string = '', props?: ComplexErrorConstructor) {
    super()
    this.name = 'ComplexError'
    this.message = message
    this.stack = (new Error()).stack
    this.code = props?.code || 500
    this.details = props?.details
  }
}

export const catchSequelizeQueryError = (error: Payload) => {
  if (error.name !== 'SequelizeUniqueConstraintError') {
    throw error
  }

  let message = error.original.detail || 'Произошла незадокументированная ошибка при выполнении запроса'
  const object = Object.entries(error.fields)

  const details = {} as ComplexFieldError
  if (error.fields) {
    if (error.original.code === '23505') {
      message = `Значение ${object[0][1]} уже существует`
    }

    details[object[0][0]] = message
  }

  throw new ComplexError(message, {
    code: 400,
    details
  })
}

export const createErrorResponse = (event: H3Event, e: unknown | Error) => {
  const error = e as ComplexError
  let errorCode = 500
  if (error.code && typeof error.code === 'number') {
    errorCode = error.code
  }

  const err = {
    error: error.message,
    details: error.details || {},
    statusCode: errorCode,
    stack: error.stack
  }

  if (process.env.NODE_ENV === 'production') {
    delete err.stack
  }

  setResponseStatus(event, errorCode)

  return err
}