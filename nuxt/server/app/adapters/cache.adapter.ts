import Cache from '~/server/app/classes/cache.class'

const cache = new Cache()

export default class CacheAdapter {
  public async clear() {
    await cache.clear()
  }
}