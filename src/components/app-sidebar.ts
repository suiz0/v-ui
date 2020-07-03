declare let Vue: any;

const Sidebar = Vue.component('app-sidebar', {
    template: `
        <div class="sidebar" :class="['bg-' + variant, CSSStatus, 'sidebar--' + variant, (title.length === 0) ? 'sidebar--no-title' : 'sidebar--with-title']">
            <section class="sidebar__header">
                <h5 class="ml-3 sidebar__title" v-show="title.length>0 && isExpanded">{{title}}</h5>
            </section>
            <section class="sidebar__content" v-show="isExpanded">
                <slot>
                    Content here
                </slot>
            </section>
            <section class="sidebar__content" v-show="!isExpanded">
                <slot name="collapsed">
                &lt;C&gt;
                </slot>
            </section>
            <section class="sidebar__footer">
            </section>
        </div>`,
    props: {
        title: {type: String, default: ""},
        variant: {type: String, default: "dark"},
        isCollapsed: {type: Boolean, default: false},
        showCollapse: {type: Boolean, default: false}
    },
    data () {
        return {
            isExpanded: !this.isCollapsed
        }
    },
    watch: {
        isCollapsed(val) {
            this.isExpanded = !val;
        }
    },
    computed: {
        CSSStatus() {
            return this.isExpanded ? "sidebar--expanded" : "sidebar--collapsed";
        }
    }
});

const SidebarItem = Vue.component('app-sidebar-item', {
    template: `<div class="sidebar__item list-group-item list-group-item-action" :class="'text-' + variant" v-on:click="clicked">
            <div class="sidebar__item__icon">
                <slot name="icon">
                </slot>
            </div>
            <div class="sidebar__item__text">
                <slot>
                </slot>
            </div>
        </div>`,
    props: {
        variant: {type: String, default: "primary"}
    },
    methods: {
        clicked(){
            this.$emit("clicked");
        }
    }
});

export {SidebarItem};
export default Sidebar;