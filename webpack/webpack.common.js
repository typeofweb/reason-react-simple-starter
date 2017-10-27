const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '..', "bundledOutputs"),
        filename: '[name].js',
        publicPath: './'
    },
    module: {
        rules: [
            // Set up Reason and OCaml files to use the loader
            { test: /\.(re|ml)$/, use: 'bs-loader' },
        ]
    },
    resolve: {
        // Add .re and .ml to the list of extensions webpack recognizes
        extensions: ['.re', '.ml', '.js']
    }
};
