declare let Vue: any;

const Sidebar = Vue.component('app-sidebar', {
    template: `
        <div class="sidebar sidebar--expanded" :class="['bg-' + variant, 'text-light']">
            <h3 class="ml-3" v-show="title.length>0">{{title}}</h3>
            <slot>
                Content here
            </slot>
        </div>`,
    props: {
        title: {type: String, default: ""},
        variant: {type: String, default: "dark"}
    }
});

export default Sidebar;