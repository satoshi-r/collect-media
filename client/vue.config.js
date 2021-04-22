/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/style.scss";`,
      },
    },
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'CollectMedia'
        return args
      })
  }
}