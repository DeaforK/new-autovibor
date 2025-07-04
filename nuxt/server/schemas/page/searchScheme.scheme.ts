// Joi
import Joi from 'joi'

export const searchScheme = Joi.object({
  search: Joi.string().trim().allow('', null).max(250).optional().messages({
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  selectedPageType: Joi.string()
    .trim()
    .max(16)
    .allow('', null)
    .optional()
    .valid('catalogCar', 'caseCar', 'video', 'statment', 'shorts', 'videoReviews', 'importedCars')
    .messages({
      'any.only': 'Поле должно содержать одно из следующих: catalogCar ,caseCar, video , statment , shorts , videoReviews, importedCars',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 16 символов',
      'string.base': 'Поле должно быть строкой'
    }),
  selectedActivity: Joi.boolean().allow(null).optional().messages({
    'boolean.base': 'Поле должно быть логического типа: true/false'
  })
}).options({ abortEarly: false })
