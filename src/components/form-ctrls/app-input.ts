import Vue from 'vue';

const AppInput = Vue.component('app-input', {
    template: `<b-form-group :label="label" :class="{'form-group--required': isRequired}">
        <b-form-input ref="input" @change="resetValidation" :type="type" :state="isValid" :required="isRequired ? 'required': null" :state="isValid" :size="size" v-model="value"></b-form-input>
        <b-form-invalid-feedback>{{error}}</b-form-invalid-feedback>
        </b-form-group>`,
    props: {
        isValid: {type: Boolean, default: null},
        isRequired: {type: Boolean, default: false},
        error: {type:String, default: 'Field with error'},
        value: {type: Object},
        size: {type: String, default: 'sm'},
        type: {type: String, default: () => { return 'text'}},
        label: {type: String, default: () => { return 'Input type'}}
    },
    watch: {
        value: function() {
            this.$emit('input', this.value);
        }
    },
    methods: {
        resetValidation() {
            this.$refs['input'].$el.classList.remove('is-invalid');
        }
    }
});

export default AppInput;