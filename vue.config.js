module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://paualmirallmicro2.netlify.com/'
      : '/',
    configureWebpack: {
      plugins: [
        new WebpackCdnPlugin({
          modules: {
            'vue': [
              { name: 'vue', var: 'Vue', path: 'dist/vue.min.js' },
              { name: 'lodash', var: '_', path: 'lodash.min.js' },
            ]
          },
        }),
      ]
    }
  }