// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@sidebase/nuxt-auth'
  ],

  // devtools: {
  //   enabled: true
  // },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  auth: {
    isEnabled: true,
    baseURL: '/api/auth',
    provider: { type: 'authjs' }
  },

  runtimeConfig: {
    authSecret: '',
    oauthGoogleClientId: '',
    oauthGoogleClientSecret: ''
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
