module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://paualmirallmicro2.netlify.com/'
      : '/',
    chainWebpack: config => {
      config.externals({
        lodash: 'lodash',
        vue: 'vue',
        'core-js': 'core-js'
      })
    }
  }