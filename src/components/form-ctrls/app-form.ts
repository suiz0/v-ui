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
            if (this.validateFields(this.$refs['frm'].children)) {
                ret = true;
                if(!silent) this.$emit('submitted');
            } else {
                this.$refs['frm'].reportValidity();
            }

            if(silent) return ret;
        },
        validateFields(nodes) {
            let isOk = true;
            for (const node of nodes) {
                if (node.tagName.toLowerCase() === 'input') {
                    if (!node.checkValidity()) {
                        node.classList.add('is-invalid');
                        return false;
                    }
                } else if (node.children.length) {
                    isOk = isOk && this.validateFields(node.children);
                }
            }

            return isOk;
        }
    }
});

export default AppForm;