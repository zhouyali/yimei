'use strict'
const utils = require('./utils')
const config = require('../config')
// lijing
const isProduction = process.env.NODE_ENV === 'UAT' || process.env.NODE_ENV === 'LIVE'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  // lijing 添加css兼容 转rem
  postcss: [
    require('autoprefixer')({
        browsers: ['iOS >= 7', 'Android >= 4.1']
    }),
    // require('postcss-px2rem')({
    //   'remUnit':75,
    //   'baseDpr':2
    // })
  ]
}
