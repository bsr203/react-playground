const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack/webpack.config.js')

const devhost = process.env.npm_package_config_devhost || 'localhost'
const webpackPort = parseInt(process.env.APP_PORT, 10) + 1

new WebpackDevServer(webpack(config()), {
  hot: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  stats: 'minimal',
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
}).listen(webpackPort, devhost)
