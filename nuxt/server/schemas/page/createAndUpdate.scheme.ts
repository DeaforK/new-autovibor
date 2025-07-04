import Joi from 'joi'

export const component = Joi.object({
  type: Joi.string()
    .trim()
    .required()
    .valid(
      'editor',
      'image',
      'video',
      'shorts',
      'seperator',
      'caseDetails',
      'caseMain',
      'catalogMain',
      'catalogText',
      'catalogCarousel',
      'catalogBeforeAndAfter',
      'catalogAccordion',
      'importedCarsMain'
    )
    .messages({
      'any.required': 'Заполните поле',
      'any.only':
        'Поле должно содержать одно из следующих: editor, image, video, shorts, seperator , caseDetails , caseMain, catalogMain , catalogText',
      'string.empty': 'Заполните поле',
      'string.base': 'Поле должно быть строкой'
    }),
  props: Joi.when('type', {
    switch: [
      {
        is: 'editor',
        then: Joi.object({
          text: Joi.string().allow('').trim().required().messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          })
        }).required()
      },
      {
        is: 'image',
        then: Joi.object({
          image: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой',
            'string.empty': 'Заполните поле'
          }),
          hint: Joi.string().allow('').trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          alt: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          })
        }).required()
      },
      {
        is: 'video',
        then: Joi.object({
          url: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          })
        }).required()
      },
      {
        is: 'caseDetails',
        then: Joi.object({
          negative: Joi.array().items(Joi.string()).messages({
            'array.empty': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          benefits: Joi.array().items(Joi.string()).messages({
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          recommended: Joi.array().items(Joi.string()).messages({
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          })
        })
      },
      {
        is: 'caseMain',
        then: Joi.object({
          title: Joi.string().allow('').trim().max(250).messages({
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          engine: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          transmission: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          gear: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          price: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          specialict: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          owners: Joi.number().required().min(1).max(40).messages({
            'number.empty': 'Заполните поле',
            'number.max': 'Не больше 40',
            'any.required': 'Заполните поле',
            'number.min': 'Не менше 1',
            'number.base': 'Поле должно быть числом'
          }),
          mileage: Joi.number().required().min(0).messages({
            'number.empty': 'Заполните поле',
            'any.required': 'Заполните поле',
            'number.min': 'Не менше 0',
            'number.base': 'Поле должно быть числом'
          }),
          yearOfService: Joi.number().required().min(1).max(3000).messages({
            'number.empty': 'Заполните поле',
            'number.max': 'Не больше 40',
            'any.required': 'Заполните поле',
            'number.min': 'Не менше 1',
            'number.base': 'Поле должно быть числом'
          }),
          service: Joi.number().min(1).max(6).messages({
            'number.empty': 'Заполните поле',
            'number.max': 'Вам необходимо выбрать правильную услугу',
            'any.required': 'Заполните поле',
            'number.min': 'Вам необходимо выбрать правильную услугу',
            'number.base': 'Поле должно быть числом'
          }),
          images: Joi.array()
            .min(1)
            .required()
            .items(
              Joi.string().max(250).messages({
                'string.empty': 'Заполните поле',
                'string.max': 'Не больше 250 символов',
                'string.base': 'Поле должно быть строкой'
              })
            )
            .messages({
              'any.required': 'Заполните поле',
              'array.base': 'Поле должно быть массивом'
            })
        }).required()
      },
      {
        is: 'catalogMain',
        then: Joi.object({
          title: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          transmission: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          gear: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          power: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          fuel: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          taxes: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          price: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          images: Joi.array()
            .min(1)
            .max(10)
            .required()
            .items(
              Joi.string().max(250).messages({
                'string.empty': 'Заполните поле',
                'string.max': 'Не больше 250 символов',
                'string.base': 'Поле должно быть строкой'
              })
            )
            .messages({
              'any.required': 'Заполните поле',
              'array.base': 'Поле должно быть массивом'
            }),
          rating: Joi.array()
            .min(1)
            .max(8)
            .items(
              Joi.object({
                id: Joi.number().required().min(1).max(8),
                label: Joi.string().required().trim().max(250).messages({
                  'any.required': 'Заполните поле',
                  'string.empty': 'Заполните поле',
                  'string.max': 'Не больше 250 символов',
                  'string.base': 'Поле должно быть строкой'
                }),
                value: Joi.number().required().min(0).max(10).messages({
                  'number.empty': 'Заполните поле',
                  'number.max': 'Не больше 10',
                  'number.min': 'Не меньше 0',
                  'number.base': 'Поле должно быть числом'
                })
              })
            )
            .messages({
              'any.required': 'Заполните поле',
              'array.base': 'Поле должно быть массивом'
            }),
          recommendation: Joi.array()
            .min(1)
            .max(10)
            .allow('')
            .items(
              Joi.string().max(250).allow('').messages({
                'string.empty': 'Заполните поле',
                'string.max': 'Не больше 250 символов',
                'string.base': 'Поле должно быть строкой'
              })
            )
            .messages({
              'any.required': 'Заполните поле',
              'array.base': 'Поле должно быть массивом'
            }),
          plusesAndMinuses: Joi.object({
            pluses: Joi.array().items(
              Joi.string().trim().allow('').max(250).messages({
                'any.required': 'Заполните поле',
                'string.empty': 'Заполните поле',
                'string.max': 'Не больше 250 символов',
                'string.base': 'Поле должно быть строкой'
              })
            ),
            minuses: Joi.array().items(
              Joi.string().trim().allow('').max(250).messages({
                'any.required': 'Заполните поле',
                'string.empty': 'Заполните поле',
                'string.max': 'Не больше 250 символов',
                'string.base': 'Поле должно быть строкой'
              })
            )
          })

            .messages({
              'any.required': 'Заполните поле'
            })
        }).required()
      },
      {
        is: 'seperator',
        then: Joi.object({
          text: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          })
        }).required()
      },
      {
        is: 'catalogText',
        then: Joi.object({
          key: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой',
            'string.empty': 'Заполните поле'
          }),
          title: Joi.string().allow('').trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          text: Joi.string().trim().required().messages({
            'any.required': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой',
            'string.empty': 'Заполните поле'
          }),
          bordered: Joi.boolean().required().messages({
            'any.required': 'Заполните поле',
            'boolean.base': 'Поле должно быть логического типа: true/false'
          })
        }).required()
      },
      {
        is: 'catalogCarousel',
        then: Joi.object({
          key: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой',
            'string.empty': 'Заполните поле'
          }),
          images: Joi.array()
            .min(1)
            .max(10)
            .required()
            .items(
              Joi.string().max(250).messages({
                'string.empty': 'Заполните поле',
                'string.max': 'Не больше 250 символов',
                'string.base': 'Поле должно быть строкой'
              })
            )
            .messages({
              'any.required': 'Заполните поле',
              'array.base': 'Поле должно быть массивом'
            }),
          title: Joi.string().allow('').trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          })
        }).required()
      },
      {
        is: 'catalogBeforeAndAfter',
        then: Joi.object({
          images: Joi.array()
            .min(1)
            .max(2)
            .required()
            .items(
              Joi.string().max(250).messages({
                'string.empty': 'Заполните поле',
                'string.max': 'Не больше 250 символов',
                'string.base': 'Поле должно быть строкой'
              })
            )
            .messages({
              'any.required': 'Заполните поле',
              'array.base': 'Поле должно быть массивом'
            }),
          title: Joi.string().allow('').trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          key: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой',
            'string.empty': 'Заполните поле'
          })
        }).required()
      },
      {
        is: 'catalogAccordion',
        then: Joi.object({
          items: Joi.array()
            .required()
            .items(
              Joi.object({
                title: Joi.string().trim().max(250).required().messages({
                  'any.required': 'Заполните поле',
                  'string.max': 'Не больше 250 символов',
                  'string.base': 'Поле должно быть строкой',
                  'string.empty': 'Заполните поле'
                }),
                description: Joi.string().trim().max(3000).required().messages({
                  'any.required': 'Заполните поле',
                  'string.max': 'Не больше 3000 символов',
                  'string.base': 'Поле должно быть строкой',
                  'string.empty': 'Заполните поле'
                })
              })
            )
            .messages({
              'any.required': 'Заполните поле',
              'array.base': 'Поле должно быть массивом'
            }),
          title: Joi.string().allow('').trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          key: Joi.string().trim().max(250).required().messages({
            'any.required': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой',
            'string.empty': 'Заполните поле'
          })
        }).required()
      },
      {
        is: 'importedCarsMain',
        then: Joi.object({
          title: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          mileage: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          images: Joi.array()
            .min(1)
            .max(8)
            .required()
            .items(
              Joi.string().max(250).messages({
                'string.empty': 'Заполните поле',
                'string.max': 'Не больше 250 символов',
                'string.base': 'Поле должно быть строкой'
              })
            )
            .messages({
              'any.required': 'Заполните поле',
              'array.base': 'Поле должно быть массивом'
            }),
          engineVolume: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          gear: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          }),
          price: Joi.string().required().trim().max(250).messages({
            'any.required': 'Заполните поле',
            'string.empty': 'Заполните поле',
            'string.max': 'Не больше 250 символов',
            'string.base': 'Поле должно быть строкой'
          })
        })
      }
    ]
  })
})

export const fieldForCatalog = Joi.object({
  brand: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  model: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  yearOfManufactureFrom: Joi.number().max(2050).min(1900).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 4 символов',
    'string.min': 'Не менше 4 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  yearOfManufactureUntil: Joi.number().max(2050).min(1900).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 4 символов',
    'string.min': 'Не менше 4 символов',
    'string.base': 'Поле должно быть строкой'
  })
})

export const fieldForImportedCars = Joi.object({
  brand: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  model: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  yearOfManufacture: Joi.number().max(2050).min(1900).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 4 символов',
    'string.min': 'Не менше 4 символов',
    'string.base': 'Поле должно быть строкой'
  })
})

export const fieldForStatment = Joi.object({})

export const fieldForCase = Joi.object({
  brand: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  model: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  yearOfManufacture: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  })
})

export const createAndUpdate = Joi.object({
  pageId: Joi.number().allow(null).integer().min(-2147483647).max(2147483647).messages({
    'number.base': 'Поле должно быть числом',
    'number.max': 'Указано слишком большое число',
    'number.min': 'Указано слишком маленькое число',
    'number.unsafe': 'Указано небезопасное число'
  }),
  type: Joi.string()
    .trim()
    .max(20)
    .required()
    .valid('catalogCar', 'caseCar', 'video', 'statment', 'shorts', 'videoReviews', 'importedCars')
    .messages({
      'any.required': 'Заполните поле',
      'any.only': 'Поле должно содержать одно из следующих: catalogCar ,caseCar, video , statment , shorts , videoReviews , importedCars',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 20 символов',
      'string.base': 'Поле должно быть строкой'
    }),
  name: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  poster: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Заполните поле'
  }),
  title: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  description: Joi.string().trim().max(250).required().messages({
    'any.required': 'Заполните поле',
    'string.empty': 'Заполните поле',
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  keywords: Joi.string().allow('', null).trim().max(250).messages({
    'string.max': 'Не больше 250 символов',
    'string.base': 'Поле должно быть строкой'
  }),
  url: Joi.string()
    .trim()
    .max(250)
    .required()
    .custom((value, helper) => {
      const regex = new RegExp('/')
      if (regex.test(value)) {
        return helper.error('url.invalid')
      }
      const arrValue = value.trim().split(' ').join()
      if (arrValue !== value) {
        return helper.error('url.invalid')
      }
      return value
    })
    .messages({
      'any.required': 'Заполните поле',
      'string.empty': 'Заполните поле',
      'string.max': 'Не больше 250 символов',
      'string.base': 'Поле должно быть строкой',
      'url.invalid': 'URL должен быть без пробелов. Пример: example. Будет автовыбор-екб.рф/example/'
    }),
  orderBy: Joi.number().integer().min(0).max(2147483647).messages({
    'number.base': 'Поле должно быть числом',
    'number.max': 'Указано слишком большое число',
    'number.min': 'Указано отрицательное число, укажите положительное',
    'number.unsafe': 'Указано небезопасное число'
  }),
  fields: Joi.when('type', {
    switch: [
      {
        is: 'caseCar',
        then: fieldForCase
      },
      {
        is: 'catalogCar',
        then: fieldForCatalog
      },
      {
        is: 'statment',
        then: fieldForStatment
      },
      {
        is: 'importedCars',
        then: fieldForImportedCars
      }
    ],
    otherwise: Joi.forbidden()
  }),
  active: Joi.boolean().required().messages({
    'any.required': 'Заполните поле',
    'boolean.base': 'Поле должно быть логического типа: true/false'
  }),
  components: Joi.array().required().items(component).messages({
    'any.required': 'Заполните поле',
    'array.base': 'Поле должно быть массивом'
  }),
  favorite: Joi.boolean().required().messages({
    'any.required': 'Заполните поле',
    'boolean.base': 'Поле должно быть логического типа: true/false'
  })
}).options({ abortEarly: false })
