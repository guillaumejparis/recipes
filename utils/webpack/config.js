/* eslint-disable no-undef */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = options => ({
  mode: options.mode,
  entry: "./src/index.js",
  output: options.output,
  resolve: {
    alias: {
      assets: path.resolve(process.cwd(), "src/assets"),
      components: path.resolve(process.cwd(), "src/components"),
      recipes: path.resolve(process.cwd(), "recipes"),
      routes: path.resolve(process.cwd(), "src/routes")
    },
    extensions: [".js", ".css", ".md"],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules",
      path.resolve(__dirname, "recipes")
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(md)$/,
        use: [
          {
            loader: "html-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), ...options.plugins],
  devtool: options.devtool,
  devServer: options.devServer
});
