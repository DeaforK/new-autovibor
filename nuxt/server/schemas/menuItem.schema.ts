import Joi from 'joi'

export const menuItemSchema = Joi.object({
  menuItemId: Joi.number().allow(null).integer().min(-2147483647).max(2147483647).messages({
    'number.base': 'Поле должно быть числом',
    'number.max': 'Указано слишком большое число',
    'number.min': 'Указано слишком маленькое число',
    'number.unsafe': 'Указано небезопасное число'
  }),
  title: Joi.string().trim().max(50).required().messages({
    'any.required': 'Поле должно быть заполнено',
    'string.empty': 'Поле должно быть заполнено',
    'string.max': 'Не больше 25 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  url: Joi.string().trim().max(250).required().messages({
    'any.required': 'Поле должно быть заполнено',
    'string.empty': 'Поле должно быть заполнено',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  orderBy: Joi.number().integer().required().messages({
    'any.required': 'Поле должно быть заполнено',
    'number.base': 'Поле должно быть числом',
    'number.required': 'Поле должно быть заполнено',
    'number.empty': 'Поле должно быть заполнено',
    'number.unsafe': 'Указано небезопасное число'
  }),
  isActive: Joi.boolean().required().messages({
    'any.required': 'Поле должно быть заполнено',
    'boolean.base': 'Поле должно быть логическим значением',
    'boolean.required': 'Поле должно быть заполнено'
  }),
  parentId: Joi.number().integer().allow(null).messages({
    'number.base': 'Поле должно быть числом',
    'number.unsafe': 'Указано небезопасное число'
  }),
  createdAt: Joi.date().allow(null).messages({
    'date.base': 'Поле должно быть датой',
    'date.unsafe': 'Указано небезопасное значение'
  }),
  updatedAt: Joi.date().allow(null).messages({
    'date.base': 'Поле должно быть датой',
    'date.unsafe': 'Указано небезопасное значение'
  })
}).options({ abortEarly: false })

export const menuItemsSchemes = Joi.array()
  .items(menuItemSchema)
  .required()
  .options({ abortEarly: false })
