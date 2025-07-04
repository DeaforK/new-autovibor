import Joi from 'joi'

export const fieldsSchema = Joi.object({
  fieldId: Joi.number().integer().required().messages({
    'any.required': 'Заполните поле',
    'number.base': 'Поле должно быть числом',
    'number.required': 'Заполните поле',
    'number.empty': 'Заполните поле',
    'number.unsafe': 'Указано небезопасное число'
  }),
  module: Joi.string().trim().max(25).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 25 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  key: Joi.string().trim().max(25).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 25 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  label: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  hint: Joi.string().allow('').trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  type: Joi.string().trim().max(10).required().valid('string', 'boolean', 'file').messages({
    'any.required': 'Заполните поле',
    'any.only': 'Поле должно содержать одно из следующих: string, boolean, file',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 10 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  content: Joi.string().allow('').trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  })
}).options({ abortEarly: false })

export const fieldsSchemes = Joi.array()
  .items(fieldsSchema)
  .required()
  .options({ abortEarly: false })
