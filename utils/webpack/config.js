/* eslint-disable no-undef */

const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (options) => ({
  mode: options.mode,
  entry: './src/index.js',
  output: options.output,
  resolve: {
    alias: {
      assets: path.resolve(process.cwd(), 'src/assets'),
      components: path.resolve(process.cwd(), 'src/components'),
      hooks: path.resolve(process.cwd(), 'src/hooks'),
      recipes: path.resolve(process.cwd(), 'recipes'),
      routes: path.resolve(process.cwd(), 'src/routes'),
      theme: path.resolve(process.cwd(), 'src/theme'),
    },
    extensions: ['.js', '.css', '.md', '.scss'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
      path.resolve(__dirname, 'recipes'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths: [path.resolve(process.cwd(), 'src')],
              },
            },
          },
          {
            loader: '@epegzz/sass-vars-loader',
            options: {
              syntax: 'scss',
              files: [path.resolve(process.cwd(), 'src/theme/theme.js')],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes: false,
            minimize: {
              collapseWhitespace: false,
            },
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      h: ['preact', 'h'],
      Fragment: ['preact', 'Fragment'],
    }),
    ...options.plugins,
  ],
  devtool: options.devtool,
  devServer: options.devServer,
});
