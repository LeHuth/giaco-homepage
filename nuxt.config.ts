// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    '@nuxt/image',
      '@kgierke/nuxt-basic-auth'
  ],
  swiper: {
    modules: ['navigation', 'pagination', 'scrollbar'],

  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  basicAuth: {
    enabled: true,
    users: [
      {
        username: "niki",
        password: "stinkt",
      },
    ],
  },
  app:{
    head:{
      script: [
        {
          src: './grained.min.js',
        }]
    }
  }

})