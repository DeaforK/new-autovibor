import Keyv from 'keyv'

export default class Cache {
  private static storage: Keyv

  public static testConnection() {
    this.storage = new Keyv(process.env.REDIS_LINK || 'redis://localhost:6379')
    this.storage.on('error', (error: Error) =>  {
      console.error('Ошибка при подключении к Redis', error)
    })
  }

  public async set(namespace: string, data: unknown) {
    return await Cache.storage.set(namespace, data, 1000 * 60 * 30)
  }

  public async get(namespace: string) {
    return await Cache.storage.get(namespace)
  }

  public async clear(namespace?: string) {
    if (namespace) {
      return await Cache.storage.delete(namespace)
    } else {
      return await Cache.storage.clear()
    }
  }
}

Cache.testConnection()