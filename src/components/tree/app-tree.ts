import Vue from 'vue';

const tree = Vue.component('app-tree', {
    template: `<div class="list-group app-tree">
        <app-tree-node v-for="item in items" :node="item">
        </app-tree-node>
    </div>`,
    props: {
        items: {type: Object, default: ()=> []}
    }
});

export default tree;