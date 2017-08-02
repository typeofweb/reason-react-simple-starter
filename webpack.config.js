const path = require('path');
const webpack = require('webpack');
const ShakePlugin = require('webpack-common-shake').Plugin;

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './lib/js/src/main.js',
  ],
  output: {
    path: path.join(__dirname, "bundledOutputs"),
    filename: '[name].js',
    publicPath: './'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8081,
    contentBase: './',
    publicPath: '/bundledOutputs/',
    watchOptions: {
      ignored: [
        /node_modules/,
        /bundledOutputs/
      ]
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // new ShakePlugin(), // https://github.com/indutny/webpack-common-shake/issues/16
    new webpack.HotModuleReplacementPlugin()
  ]
};