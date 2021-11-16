import Vue from 'vue';
import './app-sidebar.css'

const Sidebar = Vue.component('app-sidebar', {
    template: `
        <div class="sidebar" :class="['bg-' + variant, CSSStatus, 'sidebar--' + variant, (title.length === 0) ? 'sidebar--no-title' : 'sidebar--with-title']">
            <section class="sidebar__header">
                <h5 class="sidebar__title" v-show="title.length>0 && isExpanded">{{title}}</h5>
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
                <slot name="footer">
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
            isExpanded: !this.isCollapsed,
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

const SidebarButton = Vue.component('app-sidebar-button', {
    template: `<button :class="['btn', 'sidebar__button', isSelected? 'sidebar__item--active': '']" @click="clicked">
        <slot>
        </slot>
    </button>`,
    props: {
        id: {type: String, default: null},
        variant: {type: String, default: "primary"},
        isSelected: {type: Boolean, default: false}
    },
    methods: {
        clicked() {
            this.$emit("clicked", this.id);
        }
    }
});

const SidebarItem = Vue.component('app-sidebar-item', {
    template: `<div class="sidebar__item list-group-item list-group-item-action" :class="['text-' + variant, isSelected? 'sidebar__item--active': '']" v-on:click="clicked">
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
        id: {type: String, default: null},
        variant: {type: String, default: "primary"},
        isSelected: {type: Boolean, default: false}
    },
    methods: {
        clicked() {
            this.$emit("clicked", this.id);
        }
    }
});

export {SidebarItem, SidebarButton};
export default Sidebar;