const WebpackCdnPlugin = require('webpack-cdn-plugin');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://paualmirallmicro2.netlify.com/'
      : '/',
    configureWebpack: {
      plugins: [
        new WebpackCdnPlugin({
          modules: {
            'vue': [
              { name: 'vue', var: 'Vue', path: 'dist/vue.runtime.min.js' },
            ],
            'lodash': [
              { name: 'lodash', var: '_', path: 'lodash.min.js' },
            ]
          },
        }),
      ]
    }
  }