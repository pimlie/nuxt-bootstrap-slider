import path from 'path'

export default function nuxtBootstrapSlider(options) {
  // register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: true
  })
}
