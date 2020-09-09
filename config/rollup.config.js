'use strict'

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

module.exports = {
    input: './src/js/index.js',
    output: [{
        file: './dist/js/script.js',
        format: 'iife',
        name: 'frontend'
    }],
    plugins: [
        resolve(),
        babel({
            // Only transpile our source code
            exclude: 'node_modules/**',
            // Include the helpers in the bundle, at most one copy of each
            babelHelpers: 'bundled'
        })
    ]
}
