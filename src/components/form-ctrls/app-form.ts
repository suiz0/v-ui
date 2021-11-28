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
            if (this.validateFields(this.getFields())) {
                ret = true;
                if(!silent) this.$emit('submitted');
            } else {
                this.$refs['frm'].reportValidity();
            }

            if (silent) return ret;
        },
        getFields() {
            return this.$refs['frm'].getElementsByTagName('input');
        },
        validateFields(nodes) {
            let isOk = true;
            for (const node of nodes) {
                if (!node.checkValidity()) {
                    node.classList.add('is-invalid');
                    isOk = false;
                }
            }

            return isOk;
        },
        reset() {
            this.clearValidation();
        },
        clearValidation() {
            Array.from<HTMLInputElement>(this.getFields()).forEach((field) => {
                field.setCustomValidity('');
                field.classList.remove('is-invalid');
            });
        }
    }
});

export default AppForm;