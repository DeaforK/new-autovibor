export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },
  swiper: {
    prefix: 'Swiper',
    styleLang: 'scss'
  }
})
