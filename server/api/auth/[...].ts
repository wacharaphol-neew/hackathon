import GoogleProvider from '@auth/core/providers/google'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  providers: [
    GoogleProvider({
      clientId: useRuntimeConfig().oauthGoogleClientId,
      clientSecret: useRuntimeConfig().oauthGoogleClientSecret
    })
  ],
  pages: {
    signIn: '/login'
  }
})

