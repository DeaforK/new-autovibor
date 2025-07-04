import Joi from 'joi'

export const requestScheme = Joi.object({
  name: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  phone: Joi.string()
    .trim()
    .max(250)
    .required()
    .pattern(
      /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/
    )
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.pattern.base': 'Введите корректный номер телефона',
      'string.base': 'Поле должно быть строкой'
    }),
  message: Joi.string()
    .trim()
    .max(250)
    .required()
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой'
    }),
  task: Joi.string()
    .trim(),
  fromPage: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  })
}).options({ abortEarly: false })

export const carUrlScheme = Joi.object({
  name: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  phone: Joi.string()
    .trim()
    .max(250)
    .required()
    .pattern(
      /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/
    )
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.pattern.base': 'Введите корректный номер телефона',
      'string.base': 'Поле должно быть строкой'
    }),
  carUrl: Joi.string().required().trim().max(250).messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  fromPage: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  })
}).options({ abortEarly: false })

export const carCheckScheme = Joi.object({
  name: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  phone: Joi.string()
    .trim()
    .max(250)
    .required()
    .pattern(
      /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/
    )
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.pattern.base': 'Введите корректный номер телефона',
      'string.base': 'Поле должно быть строкой'
    }),
  email: Joi.string().min(3).max(250).required().email().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой',
    'string.email': 'Требуется указать Email'
  }),
  VIN: Joi.string().min(15).max(15).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 15 символов',
    'string.min': 'Не менее 15 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  fromPage: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  })
}).options({ abortEarly: false })

export const insuranceSchema = Joi.object({
  name: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  type: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  phone: Joi.string()
    .trim()
    .max(250)
    .required()
    .pattern(
      /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/
    )
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.pattern.base': 'Введите корректный номер телефона',
      'string.base': 'Поле должно быть строкой'
    }),
  brand: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  yearOfManufacture: Joi.string()
    .trim()
    .max(4)
    .min(4)
    .required()
    .pattern(/(?:(?:19|20)[0-9]{2})/)
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 4 символов',
      'string.min': 'Не менее 4 символов',
      'string.pattern.base': 'Введите корректный Год выпуска',
      'string.base': 'Поле должно быть строкой'
    }),
  propiska: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  fromPage: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  })
}).options({ abortEarly: false })

export const helpOnRoadSchecma = Joi.object({
  name: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  phone: Joi.string()
    .trim()
    .max(250)
    .required()
    .pattern(
      /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/
    )
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.pattern.base': 'Введите корректный номер телефона',
      'string.base': 'Поле должно быть строкой'
    }),
  fromPage: Joi.string().trim().max(250).required().messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой'
    })
}).options({ abortEarly: false })

export const importCarSchema = Joi.object({
  name: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  phone: Joi.string()
    .trim()
    .max(250)
    .required()
    .pattern(
      /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/
    )
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.pattern.base': 'Введите корректный номер телефона',
      'string.base': 'Поле должно быть строкой'
    }),
  budget: Joi.string()
    .trim()
    .max(20)
    .min(1)
    .required()
    .messages({
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 1 символа',
      'string.min': 'Не менее 20 символов',
      'string.base': 'Поле должно быть строкой'
    }),
  carModel: Joi.string()
    .trim()
    .max(250)
    .required()
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой'
    }),
  yearFrom: Joi.string()
    .trim()
    .max(4)
    .min(4)
    .pattern(/(?:(?:19|20)[0-9]{2})/)
    .required()
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 4 символов',
      'string.min': 'Не менее 4 символов',
      'string.pattern.base': 'Введите корректный Год выпуска',
      'string.base': 'Поле должно быть строкой'
    }),
  comment: Joi.string()
    .trim()
    .max(250)
    .messages({
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой'
    }),
  fromPage: Joi.string().trim().max(250).required().messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой'
    })
}).options({ abortEarly: false })
