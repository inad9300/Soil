const webpackConfig = require('../webpack.config')
const path = require('path')

webpackConfig.output.library = ['soil', 'dom']
webpackConfig.output.path = path.resolve(__dirname, 'build')

module.exports = webpackConfig
