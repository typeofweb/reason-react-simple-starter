const webpack = require('webpack');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));


module.exports = Merge(CommonConfig, {
    entry: isDevServer ?
        [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8081',
            'webpack/hot/only-dev-server',
            './src/main.re',
        ] : [
            './src/main.re',
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
