import Vue from 'vue';
import './sidebar.css';

const SidebarExtended = Vue.component('app-sidebar-extended', {
    template: `<app-sidebar :title="title" :is-collapsed="!isExpanded" class="sidebar--extended" :variant="variant">
            <div class="list-group">
                <template v-for="(item, index) in items">
                    <app-sidebar-item :is-selected="item==selected" :key="index" @clicked="itemClicked(item)">
                        <template v-slot:icon>
                            <span v-html="item.icon"></span>
                        </template>
                        {{item.description}}
                    </app-sidebar-item>
                    <app-tree class="mb-1" @item-selected="childSelected(item, $event)" v-if="item.children && item.children.length > 0 && item === selected" :items="item.children"></<app-tree>
                </template>
            </div>
            <template v-slot:footer>
                <button class="btn btn-dark sidebar__button sidebar__toggler" @click="toggle">
                    <span class="oi oi-expand-right" v-show="isExpanded"></span>
                    <span class="oi oi-expand-left" v-show="!isExpanded"></span>
                </button>
            </template>
            <template v-slot:collapsed>
                <app-sidebar-button v-for="(item, index) in items" :is-selected="item==selected" v-html="item.icon" @clicked="itemClicked(item)">
                </app-sidebar-button>
            </template>
        </app-sidebar>`,
    props: {
        title: {type: String, default: ""},
        variant: {type: String, default: "dark"},
        items: {type: Array, default: []},
        selectedIndex: {type: Number, default: 0}
    },
    data () {
        return {
            isExpanded: false,
            selected: this.items ? this.items[this.selectedIndex] : null
        }
    },
    methods: {
        toggle()
        {
            this.isExpanded = !this.isExpanded;
        },
        childSelected(parent, item) {
            this.itemClicked(parent, item);
        },
        itemClicked(item, child?) 
        {
            this.$emit("item-selected", item, child);
            this.setSelected(item);
        },
        setSelected(item) 
        {
            this.selected = item;
        }
    }
});

export default SidebarExtended;