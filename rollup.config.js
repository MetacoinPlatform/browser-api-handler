import typescript from 'rollup-plugin-typescript2'
import builtins from 'rollup-plugin-node-builtins'
//import resolve from '@rollup/plugin-node-resolve'
//import json from '@rollup/plugin-json'
//import commonjs from '@rollup/plugin-commonjs'
import { terser } from "rollup-plugin-terser"

export default [
    {
        external: ['crypto', 'events'],
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/browser-extensionizer.cjs.min.js',
                format: 'cjs',
            },
            {
                file: 'dist/browser-extensionizer.es.min.js',
                format: 'es',
            },
        ],
        plugins: [
            typescript(),
            builtins(),
            terser()
        ],
    },
/*    
     {
        input: 'src/index.ts',
        output: [{
            file: 'dist/browser-extensionizer.bundle.min.js',
            format: 'iife',
            name: 'BrowserExtensionizer',
        }],
        plugins: [
            typescript(),
            commonjs(),
            json(),
            builtins({ crypto: true }),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            terser(),
        ],
    }
*/
]
