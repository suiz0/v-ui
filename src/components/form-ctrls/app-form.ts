import Vue from 'vue';
import './app-form.css';

const AppForm = Vue.component('app-form', {
    template: `<form ref="frm" @submit="onSubmit">
        <slot><!-- default content--><slot>
    </form>`,
    methods: {
        onSubmit: function(ev) {
            ev.preventDefault();
            this.submit();
        },
        submit(silent = false) {
            let ret = false;
            if(this.$refs['frm'].checkValidity() === true) {
                ret = true;
                if(!silent) this.$emit('submitted');
            } else {
                this.$refs['frm'].reportValidity();
            }

            if(silent) return ret;
        }
    }
});

export default AppForm;