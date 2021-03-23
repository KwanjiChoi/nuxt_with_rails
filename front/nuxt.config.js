export default {
  head: {
    title: 'nuxt_with_rails',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify'
  ],

  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/auth'
  ],

  build: {
  },

  axios: {
    baseURL: process.env.BASE_URL,
    browserBaseURL: process.env.BROWSER_URL
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: false,
      home: '/dashboard',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'api/v1/auth/sign_in', method: 'post', propertyName: 'token'},
          logout: false,
          user: false
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  }

}
