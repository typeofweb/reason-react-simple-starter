const webpack = require('webpack');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './lib/es6/src/main.js',
    ],
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
        new webpack.HotModuleReplacementPlugin()
    ]
});
