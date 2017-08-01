const path = require('path');
const webpack = require('webpack');
const ShakePlugin = require('webpack-common-shake').Plugin;

module.exports = {
  entry: {
    main: './lib/js/src/main.js',
  },
  output: {
    path: path.join(__dirname, "bundledOutputs"),
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: './',
    publicPath: '/bundledOutputs/',
    watchOptions: {
      ignored: [
        /node_modules/,
        /bundledOutputs/,
        'lib/**/*.js'
      ]
    }
  },
  plugins: [
  	new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ShakePlugin(),
  	new webpack.HotModuleReplacementPlugin()
  ]
};