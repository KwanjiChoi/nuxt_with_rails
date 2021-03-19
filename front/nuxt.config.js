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
    baseURL: 'http://localhost:3000'
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: false,
      home: '/users/profile'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/v1/auth/sign_in', method: 'post', propertyName: 'token'},
          logout: { url: '/v1/auth/sign_out', method: 'post' },
          user: false
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  }

}
