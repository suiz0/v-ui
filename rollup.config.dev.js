import multi from '@rollup/plugin-multi-entry';
import scss from 'rollup-plugin-scss';

export default {
    input: ['src/js/components/*.js', 'src/js/app.js'],
    output: {
        file: 'dist/v-ui.js'
    },
    plugins:[multi(), scss()]
};