/* eslint-disable no-undef */

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./config')({
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(process.cwd(), '_build'),
    publicPath: '/recipes/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: { collapseWhitespace: true },
    }),
    new CopyPlugin([
      'src/manifest.json',
      'src/assets/favicon.ico',
      { from: 'src/assets/icons/*.png', to: 'assets/icons', flatten: true },
    ]),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      exclude: [/^recipe-.*\.js$|\.(jpg|png)$/],
      runtimeCaching: [
        {
          urlPattern: /recipe-.*\.js$|\.(jpg|png)$/,
          handler: 'CacheFirst',
        },
      ],
      skipWaiting: true,
    }),
  ],
});
