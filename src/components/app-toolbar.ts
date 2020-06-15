declare var Vue:any;

const AppToolbar = Vue.component('app-toolbar', {
    template: `<b-navbar :variant="variant" :type="type">
        <b-container v-if="isFixed">
            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>
            <slot></slot>
        </b-container>
        <template v-else>
            <b-navbar-brand><slot name="brand">App Toolbar</slot></b-navbar-brand>
            <slot></slot>
        </template>
    </b-navbar>`,
    props: {
        variant: {type: String, default: 'dark'},
        type: {type: String, default: 'dark'},
        isFixed: {type: Boolean, default: false}
    },
});

export default AppToolbar;