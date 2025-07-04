import { useSession, H3Event } from 'h3'

type SessionData = {
  user: {
    userId: number
  }
}

export default async function(event: H3Event) {
  return await useSession<SessionData>(event, {
    password: '4x|WNn@TV4!$^vvdGj#1d>!<£9F#%^&csbh36bm!#^45@^2hNnU5yN*VIwTFS1]`L)a',
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
}