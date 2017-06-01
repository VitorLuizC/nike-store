const path = require('path')
const getPlugins = require('./getPlugins')
const getLoaders = require('./getLoaders')

/**
 * Returns webpack configuration object for both 'production' and 'development'
 * environments.
 * @param {('development'|'production')} env
 * @returns {webpack.Configuration}
 */
function getWebpackConfiguration(env) {
  const isProd = env === 'production'

  const configuration = {
    entry: {
      main: './src/index.js',
      vendors: ['babel-polyfill']
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].js'
    },
    resolve: {
      extensions: ['.js', '.json', '.vue']
    },
    module: {
      rules: getLoaders(env)
    },
    devtool: !isProd ? 'source-map' : false,
    plugins: getPlugins(env)
  }

  return configuration
}

module.exports = getWebpackConfiguration
