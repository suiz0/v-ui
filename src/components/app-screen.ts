import Vue from 'vue';
import BaseMixing from '../mixins';

const Screen = Vue.component('app-screen', {
    mixins: [BaseMixing],
    template: `<div class="view-container view--with-toolbar">
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand tag="h1">{{title}}</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
                <b-button-group class="mx-1" v-if="!hideDefaultToolbar">
                    <b-button v-show="mode==='view'" @click="del">Delete</b-button>
                    <b-button v-show="mode==='view'" @click="$emit('edit')">Edit</b-button>
                    <b-button v-show="['new', 'edit'].indexOf(mode)>=0" @click="save">Save</b-button>
                    <b-button v-show="['new', 'edit'].indexOf(mode)>=0" @click="cancel">Cancel</b-button>
                </b-button-group>
                <slot name="custom-toolbar">
                </slot>
            </b-button-toolbar>
        </b-navbar-nav>
    </b-navbar>
    <div class="view-content app-screen__content">
        <slot v-bind:entity="entity">
        </slot>
    </div>
</div>`,
    props: {
        title: {type: String, default: 'Screen'},
        hideDefaultToolbar: {type: Boolean, default: false},
        model: {type: Object, default: () => {}},
        mode: {type: String, default: 'view'}
    },
    data() {
        return {
            entity:{...this.model}
        };
    },
    methods: {
        save: function() {
            this.$emit("save", Object.assign({}, this.entity));
        },
        del: function() {
            this.$emit('delete', this.model);
        },
        cancel: function () {
            this.reset();
            this.$emit('cancel');
        },
        reset: function() {
            this.entity = {};
        }
    }
});

export default Screen;