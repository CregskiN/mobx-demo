const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        index: path.resolve(__dirname, 'src/index.tsx')
    },

    devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
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