const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '..', "bundledOutputs"),
        filename: '[name].js',
        publicPath: './'
    },
};
