const path = require('path')

module.exports = function nuxtBootstrapSlider (options) {
  // Register plugin
  this.addPlugin({ src: path.resolve(__dirname, 'plugin.js'), ssr: false })
}

module.exports.meta = require('./package.json')
