const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        library: 'soil',
        libraryTarget: 'umd',
        filename: 'umd.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts']
    }
}
