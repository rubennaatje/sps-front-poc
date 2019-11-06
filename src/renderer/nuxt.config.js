/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */
module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: 'nuxtpoc',
    bodyAttrs: {
      class: 'terminal'
    }
  },
  loading: false,
  plugins: [
    { ssr: true, src: '@/plugins/icons.js' },
    { ssr: false, src: '~/plugins/socket.io.js' }
  ],
  buildModules: [
  ],
  modules: [
    'nuxt-spreadsheet'
  ]
}
