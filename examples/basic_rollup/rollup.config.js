import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'

export default {
    input: './main.ts',
    output: {
        file: 'build/main.js',
        format: 'iife'
    },
    treeshake: {
        pureExternalModules: true
    },
    plugins: [
        resolve(),
        typescript()
    ]
}
