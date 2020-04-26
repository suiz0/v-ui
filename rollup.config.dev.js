import multi from '@rollup/plugin-multi-entry';

export default {
    input: ['src/js/components/*.js', 'src/js/app.js'],
    output: {
        file: 'dist/bootstrap.ui.js'
    },
    plugins:[multi()]
};