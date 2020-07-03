declare let Vue: any;

const SidebarExtended = Vue.component('app-sidebar-extended', {
    template: `<app-sidebar :title="title" :is-collapsed="!isExpanded" class="sidebar--extended" :variant="variant">
                <app-sidebar-item @clicked="toggle" v-show="isExpanded">
                    <template v-slot:icon>
                        <span class="oi oi-menu"></span>
                    </template>
                </app-sidebar-item>
            <slot>
            </slot>
            <template v-slot:collapsed>
                <button v-show="!isExpanded" class="btn btn-dark sidebar__button" @click="toggle"><span class="oi oi-menu"></span></button>
                <slot name="collapsed">
                </slot>
            </template>
        </app-sidebar>`,
    props: {
        title: {type: String, default: ""},
        variant: {type: String, default: "dark"}
    },
    data () {
        return {
            isExpanded: false
        }
    },
    methods: {
        toggle()
        {
            this.isExpanded = !this.isExpanded;
        }
    }
});

export default SidebarExtended;