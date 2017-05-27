const cssnano = require('cssnano')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Returns webpack loaders for both 'development' and 'production' environments.
 * @param {('development'|'production')} env
 * @returns {Array.<webpack.LoaderRule>}
 */
function getLoaders(env) {
  const isProd = env === 'production'

  const postCssPlugins = [
    autoprefixer({ browsers: ['> 5%, IE >= 11'] })
  ]

  if (isProd)
    postCssPlugins.push(cssnano({ autoprefixer: false }))

  const styleLoaders = {
    use: [
      'css-loader',
      {
        loader: 'stylus-loader',
        options: {
          use: poststylus(postCssPlugins)
        }
      }
    ]
  }

  const loaders = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: {
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: ExtractTextPlugin.extract(styleLoaders)
          }
        }
      }
    },
    {
      test: /\.png$/,
      use: [
        'image-webpack-loader',
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './img/'
          }
        }
      ]
    }
  ]

  return loaders
}

module.exports = getLoaders
