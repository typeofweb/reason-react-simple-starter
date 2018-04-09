const ShakePlugin = require('webpack-common-shake').Plugin;
const webpack = require('webpack');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
    entry: [
        './src/main.re'
    ],
    devtool: false,
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ShakePlugin(), // https://github.com/indutny/webpack-common-shake/issues/16
    ]
})
