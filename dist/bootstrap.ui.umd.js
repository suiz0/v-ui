(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    Vue.component('input-field', {
        template: `<b-form-group :label="label">
        <b-form-input :type="type" :state="isValid" :size="size" v-model="value"></b-form-input>
        <b-form-invalid-feedback :state="isValid">{{error}}</b-form-invalid-feedback>
        </b-form-group>`,
        props: {
            isValid: { type: Boolean, default: null },
            error: { type: String, default: '' },
            value: { type: Object },
            size: { type: String, default: 'sm' },
            type: { type: String, default: () => { return 'text'; } },
            label: { type: String, default: () => { return 'Input type'; } }
        },
        watch: {
            value: function () {
                this.$emit('input', this.value);
            }
        }
    });

    Vue.component('screen-view', {
        template: `<div class="view-container view--toolbar">
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand tag="h1">{{title}}</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
                <b-button-group class="mx-1" v-if="!hideDefaultToolbar">
                    <b-button @click="$emit('new')">New</b-button>
                    <b-button @click="$emit('edit')">Edit</b-button>
                    <b-button @click="save">Save</b-button>
                    <b-button @click="cancel">Cancel</b-button>
                </b-button-group>
                <slot name="custom-toolbar">
                </slot>
            </b-button-toolbar>
        </b-navbar-nav>
    </b-navbar>
    <div class="view-content">
        <slot v-bind:entity="entity">
        </slot>
    </div>
</div>`,
        props: {
            title: { type: String, default: 'Screen' },
            hideDefaultToolbar: { type: Boolean, default: false }
        },
        data() {
            return {
                entity: {}
            };
        },
        methods: {
            save: function () {
                this.$emit("save", Object.assign({}, this.entity));
            },
            cancel: function () {
                this.$emit('cancel');
            },
            reset: function () {
                this.entity = {};
            }
        }
    });

    var app = new Vue({
        el: '#app',
        methods: {
            doSomething: function () {
                console.log("done something!");
            },
            screenSave: function () {
                alert("Save");
            },
            screenCancel: function () {
                alert("Cancel");
            },
            screenNew: function () {
                alert("New");
            }
        }
    });
    Vue.config.devtools = true;

})));
