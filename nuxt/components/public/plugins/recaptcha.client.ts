import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  if (!config.public.recaptchaSiteKey) {
    console.warn('[reCAPTCHA] siteKey отсутствует')
    return
  }

  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: config.public.recaptchaSiteKey,
    loaderOptions: {
      autoHideBadge: true,
      renderParameters: {
        hl: 'ru'
      }
    }
  })
})
