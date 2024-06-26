// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxtvue/'
  },
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  runtimeConfig: {
    public: {
      port: 3001
    }
  },
  experimental: {
    crossOriginPrefetch: true
  }
})
