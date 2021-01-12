const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, path.join('src', 'index.ts')),
  devtool: "eval",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.jsx?$/, loader: "babel-loader" }
    ]
  },
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
    'styled-components': 'styled',
    'react-is': 'react-is',
  },
};
