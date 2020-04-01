const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        index: path.resolve(__dirname, 'src/index.ts')
    },

    devtool: 'inline-source-map',




    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.ts?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'ts-loader'
            }]
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}