declare let Vue: any;

const Sidebar = Vue.component('app-sidebar', {
    template: `
        <div class="sidebar" :class="['bg-' + variant, 'text-light', CSSStatus]">
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
            return this.isExpanded ? "sidebar--expanded" : "";
        }
    }
});

export default Sidebar;