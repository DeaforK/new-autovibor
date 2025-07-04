import { useInitStore } from '~/components/public/entities/initStore/model/index'

export default defineNuxtPlugin(async () => {
  if (process.server) {
    const { getInitData } = useInitStore()
    await getInitData()
  }
})
