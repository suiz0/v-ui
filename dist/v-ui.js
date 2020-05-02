Vue.component('app-form', {
    template: `<b-form @submit="submit">
        <slot><!-- default content--><slot>
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

Vue.component('app-input', {
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

Vue.component('app-toolbar', {
    template: `<b-navbar :variant="variant" :type="type">
        <b-container v-show="isFixed">
            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>
            <slot></slot>
        </b-container>
        <template v-show="!isFixed">
            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>
            <slot></slot>
        </template>
    </b-navbar>`,
    props: {
        variant: { type: String, default: 'dark' },
        type: { type: String, default: 'dark' },
        isFixed: { type: Boolean, default: false }
    },
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
