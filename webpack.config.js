const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, path.join('src', 'main.tsx')),
  devtool: "eval",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Kit',
      template: path.resolve(__dirname, path.join('public', 'index.html')),
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  }
};
