const path = require('path')
const getPlugins = require('./getPlugins')

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
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './img/',
                useRelativePath: !isProd
              }
            },
            'image-webpack-loader'
          ]
        }
      ]
    },
    plugins: getPlugins(env)
  }

  return configuration
}

module.exports = getWebpackConfiguration
