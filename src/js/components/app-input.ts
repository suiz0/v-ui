Vue.component('app-input', {
    template: `<b-form-group :label="label">
        <b-form-input :type="type" :state="isValid" :size="size" v-model="value"></b-form-input>
        <b-form-invalid-feedback :state="isValid">{{error}}</b-form-invalid-feedback>
        </b-form-group>`,
    props: {
        isValid: {type: Boolean, default: null},
        error: {type:String, default: ''},
        value: {type: Object},
        size: {type: String, default: 'sm'},
        type: {type: String, default: () => { return 'text'}},
        label: {type: String, default: () => { return 'Input type'}}
    },
    watch: {
        value: function() {
            this.$emit('input', this.value);
        }
    }
});