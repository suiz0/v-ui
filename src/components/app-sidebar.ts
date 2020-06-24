declare let Vue: any;

const Sidebar = Vue.component('app-sidebar', {
    template: `
        <div class="sidebar" :class="['bg-' + variant, CSSStatus, 'sidebar--' + variant]">
            <h3 class="ml-3" v-show="title.length>0">{{title}}</h3>
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
        </div>`,
    props: {
        title: {type: String, default: ""},
        variant: {type: String, default: "dark"},
        isCollapsed: {type: Boolean, default: false}
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
    template: `<div class="sidebar__item list-group-item list-group-item-action" :class="'text-' + variant">
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
    }
});

export {SidebarItem};
export default Sidebar;