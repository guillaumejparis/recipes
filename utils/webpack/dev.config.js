/* eslint-disable no-undef */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./config')({
  mode: 'development',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/recipes/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Recipes',
      favicon: 'src/assets/favicon.ico',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/recipes/',
    public: 'localhost:8080/recipes',
    compress: true,
    hot: true,
  },
});
