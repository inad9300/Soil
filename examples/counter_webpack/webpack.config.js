const path = require('path')

module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    optimization: {
        usedExports: true
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    }
}
