import Vue from 'vue';
import './app-tree.css';

const tree = Vue.component('app-tree', {
    template: `<div class="list-group app-tree">
        <app-tree-node v-for="item in items" @item-selected="clicked" :node="item" :variant="variant">
        </app-tree-node>
    </div>`,
    props: {
        variant: {type: String, default: 'light'},
        items: {type: Object, default: ()=> []}
    },
    methods: {
        clicked(item) {
            this.$emit('item-selected', item);
        }
    }
});

export default tree;