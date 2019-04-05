const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output : {
        library: 'Samay',
        libraryTarget: 'umd',
        filename: 'samay.js',
    }    
}