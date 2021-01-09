var path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, path.join('src', 'index.ts')),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     // options: {
      //     //   presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
      //     // }
      //   }
      // }
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
    'styled-components': 'styled-components',
    'react-is': 'react-is',
  }
};
