const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '{name].[hash].js'
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'}),
    new CleanWebpackPlugin(),
    new ESLintPlugin()
  ],
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'scss-loader']
      }
    ]
  }
}
