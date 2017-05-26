const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

/**
 * Returns webpack plugins for both 'development' and 'distribution'
 * environments.
 * @param {('development'|'production')} env
 * @returns {Array.<webpack.Plugin>}
 */
function getPlugins(env) {
  const isProd = env === 'production'

  const plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      minify: !isProd ? false : {
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
    })
  ]

  if (isProd) {
    plugins.concat([
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    ])
  }

  return plugins
}

module.exports = getPlugins
