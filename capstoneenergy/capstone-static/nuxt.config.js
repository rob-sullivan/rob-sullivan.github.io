
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Capstone Energy Management - Unlock more power with less energy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'css/main.css' },
    ],
    script:[
      {type: 'text/javascript', href: 'js/jquery.min.js',  body: true},
      {type: 'text/javascript', href: 'js/jquery.min.js',  body: true},
      {type: 'text/javascript', href: 'js/jquery.scrollex.min.js',  body: true},
      {type: 'text/javascript', href: 'js/jquery.scrolly.min.js',  body: true},
      {type: 'text/javascript', href: 'js/browser.min.js',  body: true},
      {type: 'text/javascript', href: 'js/breakpoints.min.js',  body: true},
      {type: 'text/javascript', href: 'js/util.js',  body: true},
      {type: 'text/javascript', href: 'js/main.js',  body: true},
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
