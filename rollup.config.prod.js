import multi from '@rollup/plugin-multi-entry';
import {terser} from 'rollup-plugin-terser';

export default {
    input: ['src/js/components/*.js', 'src/js/app.js'],
    output: [
        {
            file: 'dist/bootstrap.ui.js'
        },
        {
        file: 'dist/bootstrap.ui.umd.js',
        format:'umd'
        },
        {
            file: 'dist/bootstrap.ui.umd.min.js',
            format: 'umd',
            plugins: [terser()]
        }
    ],
    plugins:[multi()]
};