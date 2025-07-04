// Joi
import Joi from 'joi'

export const importedCarScheme = Joi.object({
  model: Joi.string().allow('').trim().max(250).messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  brand: Joi.string().allow('').trim().max(250).messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  poster: Joi.string().allow('').trim().max(250).messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  yearOfManufactureFrom: Joi.number().integer().required().messages({
    'any.required': 'Заполните поле',
    'number.base': 'Поле должно быть числом',
    'number.required': 'Заполните поле',
    'number.empty': 'Заполните поле',
    'number.unsafe': 'Указано небезопасное число'
  }),
  yearOfManufactureTo: Joi.number().integer().required().messages({
    'any.required': 'Заполните поле',
    'number.base': 'Поле должно быть числом',
    'number.required': 'Заполните поле',
    'number.empty': 'Заполните поле',
    'number.unsafe': 'Указано небезопасное число'
  }),
  name: Joi.string().allow('').trim().max(250).messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  title: Joi.string().allow('').trim().max(250).messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  url: Joi.string().allow('').trim().max(250).messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  page: Joi.number().integer().required().messages({
    'any.required': 'Заполните поле',
    'number.base': 'Поле должно быть числом',
    'number.required': 'Заполните поле',
    'number.empty': 'Заполните поле',
    'number.unsafe': 'Указано небезопасное число'
  })
}).options({ abortEarly: false })
