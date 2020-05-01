"use strict";
Vue.component('app-form', {
    template: `<b-form @submit="submit">
        <slot><slot>
    </b-form>`,
    methods: {
        submit: function (ev) {
            if (ev.target.checkValidity() === true) {
                this.$emit('submitted', ev);
            }
            else {
                ev.preventDefault();
            }
        }
    }
});
