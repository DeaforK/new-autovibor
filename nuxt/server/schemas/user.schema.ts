// Joi
import Joi from 'joi'

export const loginScheme = Joi.object({
  login: Joi.string()
    .trim()
    .email()
    .max(250)
    .required()
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой',
      'string.email': 'Требуется указать Email'
    }),
  password: Joi.string()
    .trim()
    .max(250)
    .required()
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой'
    })
}).options({ abortEarly: false })

export const userScheme = Joi.object({
  userId: Joi.number()
    .allow(null)
    .integer()
    .min(-2147483647)
    .max(2147483647)
    .messages({
      'number.base': 'Поле должно быть числом',
      'number.max': 'Указано слишком большое число',
      'number.min': 'Указано слишком маленькое число',
      'number.unsafe': 'Указано небезопасное число'
    }),
  login: Joi.string()
    .trim()
    .email()
    .max(250)
    .required()
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой',
      'string.email': 'Требуется указать Email'
    }),
  password: Joi.string()
    .trim()
    .min(8)
    .max(50)
    .required()
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.min': 'Не меньше 8 символов',
      'string.max': 'Не больше 50 символов',
      'string.base': 'Поле должно быть строкой'
    }),
  active: Joi.boolean()
    .required()
    .messages({
      'any.required': 'Заполните поле',
      'boolean.base': 'Поле должно быть логического типа: true/false'
    })
}).options({ abortEarly: false })