declare var Vue:any;

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
        title: {type: String, default: 'Screen'},
        hideDefaultToolbar: {type: Boolean, default: false}
    },
    data() {
        return {
            entity:{}
        };
    },
    methods: {
        save: function() {
            this.$emit("save", Object.assign({}, this.entity));
        },
        cancel: function () {
            this.$emit('cancel');
        },
        reset: function() {
            this.entity = {};
        }
    }
});