'use strict'

const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
import json from '@rollup/plugin-json'

module.exports = {
    input: 'src/js/script.js',
    output: [{
        file: 'dist/js/script.js',
        format: 'iife',
        name: 'frontend'
    }],
    plugins: [
        babel({
            // Only transpile our source code
            exclude: 'node_modules/**',
            // Include the helpers in the bundle, at most one copy of each
            babelHelpers: 'bundled'
        }),
        json()
    ]
}
