const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output : {
        library: 'Samay',
        libraryTarget: 'umd',
        filename: 'samay.js',
        globalObject: "(typeof self !== 'undefined' ? self : this)"
    }    
}