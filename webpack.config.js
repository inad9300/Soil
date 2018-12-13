module.exports = {
    entry: './src/index.ts',
    output: {
        libraryTarget: 'umd',
        filename: 'umd.js'
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
