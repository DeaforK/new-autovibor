import { type ObjectSchema, type ArraySchema, ValidationError } from 'joi'
import { ComplexError, type ComplexFieldError } from '~/server/app/shared/exceptions'
import { type Payload } from '~/server/app/shared/request'

export const joiWrapper = async (schema: ObjectSchema | ArraySchema, data: Payload) => {
  try {
    return await schema.validateAsync(data)
  } catch (e: unknown) {
    const error = e as ValidationError
    const details: ComplexFieldError = {}

    for (const err of error.details) {
      let test: ComplexFieldError | string = details
      for (const i in err.path) {
        const path = err.path[i] as string
        if (typeof test !== 'string') {
          if (Number(i) === err.path.length - 1) {
            test[path] = err.message
          } else {
            test = test[path] ? test[path] : test[path] = {}
          }
        }
      }
    }

    throw new ComplexError('Исправьте ошибки', {
      code: 400,
      details
    })
  }
}