const path = require('path')
const webpack = require('webpack')
const { DefinePlugin } = webpack

/**
 * Returns webpack configuration object for both 'production' and 'development' 
 * environments.
 * @param {String} env
 * @returns {webpack.Configuration}
 */
function getWebpackConfiguration(env) {
  const isProd = env === 'production'

  const configuration = {
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].js'
    },
    resolve: {
      extensions: ['.js', '.json', '.vue']
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: isProd ? 'vue-loader' : {
            loader: 'vue-loader',
            options: {
              sourceMap: true
            }
          }
        }
      ]
    },
    plugins: isProd ? [
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    ] : []
  }

  return configuration
}

module.exports = getWebpackConfiguration
