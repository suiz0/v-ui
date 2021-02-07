import Vue from 'vue';

const tree = Vue.component('app-tree', {
    template: `<div class="list-group app-tree">
        <app-tree-node v-for="item in items" :node="item" :variant="variant">
        </app-tree-node>
    </div>`,
    props: {
        variant: {type: String, default: 'light'},
        items: {type: Object, default: ()=> []}
    }
});

export default tree;