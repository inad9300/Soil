import typescript from 'rollup-plugin-typescript'

export default {
    input: './src/browser.ts',
    output: {
        file: 'build/browser.js',
        format: 'iife'
    },
    plugins: [
        typescript()
    ]
}
