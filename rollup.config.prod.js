import multi from '@rollup/plugin-multi-entry';
import {terser} from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';

const fs = require('fs');

fs.unlinkSync("dist/v-ui.css");

export default {
    input: ['src/js/components/*.js', 'src/js/app.js'],
    output: [
        {
            file: 'dist/v-ui.js'
        },
        {
            file: 'dist/v-ui.umd.js',
            format:'umd'
        },
        {
            file: 'dist/v-ui.umd.min.js',
            format: 'umd',
            plugins: [terser()]
        }
    ],
    plugins:[multi(), scss({
        output: function(styles) {

            if(!fs.existsSync('dist/v-ui.css')) {
                fs.writeFileSync('dist/v-ui.css', styles);
            }
        }
    })]
};