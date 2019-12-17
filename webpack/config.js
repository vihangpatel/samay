const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['/node_modules/'],
                loader: 'babel-loader'
            },
        ],
    },
    output : {
        library: 'Samay',
        libraryTarget: 'umd',
        filename: 'samay.js',
        globalObject: "(typeof self !== 'undefined' ? self : this)"
    }    
}