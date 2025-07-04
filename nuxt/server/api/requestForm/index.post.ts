import { readBody } from 'h3'
import axios from 'axios'
import { createErrorResponse } from '~/server/app/shared/exceptions'
import { joiWrapper } from '~/server/app/shared/joi'
import { requestScheme } from '~/server/schemas/form.schema'
import FeedAdapter from '~/server/app/adapters/form.adapter'

const feedbackAdap = new FeedAdapter()

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)

    const recaptchaToken = body?.recaptchaToken
    const secret = process.env.RECAPTCHA_SECRET_KEY

    if (!recaptchaToken) {
      throw createError({
        statusCode: 400,
        message: 'reCAPTCHA токен не передан'
      })
    }

    const recaptchaRes = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret,
          response: recaptchaToken
        }
      }
    )

    if (!recaptchaRes.data.success || recaptchaRes.data.score < 0.5) {
      throw createError({
        statusCode: 403,
        message: 'reCAPTCHA проверка не пройдена. Попробуйте позже.'
      })
    }

    const { recaptchaToken: _, ...formData } = body
    const prepareBody = await joiWrapper(requestScheme, formData)

    await feedbackAdap.sendDefaultMessage(prepareBody)

    return {
      message: 'Спасибо за ваше обращение! Ожидайте звонка менеджера, а пока загляните в раздел Блог или Shorts.'
    }
  } catch (error) {
    console.log(error)
    return createErrorResponse(event, error)
  }
})
