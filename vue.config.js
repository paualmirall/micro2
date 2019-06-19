module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://paualmirallmicro2.netlify.com/'
      : '/',
    // chainWebpack: config => {
    //   config.externals({
    //     'lodash': {
    //       commonjs: 'lodash',
    //       commonjs2: 'lodash',
    //       amd: 'lodash',
    //       root: '_',
    //     },
    //     vue: "Vue",
    //     "core-js": "core.js",
    //   })
    // }
  }