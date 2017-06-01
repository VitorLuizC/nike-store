const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const { DefinePlugin, optimize } = require('webpack')
const { UglifyJsPlugin, CommonsChunkPlugin } = optimize
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Returns webpack plugins for both 'development' and 'distribution'
 * environments.
 * @param {('development'|'production')} env
 * @returns {Array.<webpack.Plugin>}
 */
function getPlugins(env) {
  const isProd = env === 'production'

  const htmlMinifierConfig = {
    html5: true,
    removeComments: true,
    keepClosingSlash: false,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    collapseBooleanAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  }

  let plugins = [
    new ExtractTextPlugin('css/style.css'),
    new HtmlPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      minify: !isProd ? false : htmlMinifierConfig
    })
  ]

  if (isProd) {
    plugins = plugins.concat([
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new CommonsChunkPlugin({
        name: 'vendors',
        minChunks: 2
      }),
      new UglifyJsPlugin()
    ])
  }

  return plugins
}

module.exports = getPlugins
