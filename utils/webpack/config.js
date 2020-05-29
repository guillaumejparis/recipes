/* eslint-disable no-undef */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
      path.resolve(__dirname, 'recipes'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('@babel/preset-react')],
          },
        },
      },
      {
        test: /\.(css)$/,
        use: [require.resolve('style-loader'), require.resolve('css-loader')],
      },
      {
        test: /\.(scss)$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths: [path.resolve(process.cwd(), 'src')],
              },
            },
          },
          {
            loader: require.resolve('@epegzz/sass-vars-loader'),
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
            loader: require.resolve('file-loader'),
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: {
          loader: require.resolve('html-loader'),
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
