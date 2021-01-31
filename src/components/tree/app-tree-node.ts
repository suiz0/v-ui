import Vue from 'vue';

const treeNode = Vue.component('app-tree-node', {
    template: `<div class="app-tree-node list-group-item d-flex flex-wrap">
        <div class="app-tree-node__icon" @click="toggle" v-show="hasChildren">
            <span class="oi oi-caret-right"></span>
        </div>
        <div class="app-tree-node__content" :class="{'app-tree-node--empty' :!hasChildren}">
        {{node.description}}
        <app-tree v-if="hasChildren" :items="node.children" v-show="isExpanded" ></app-tree>
        </div>
    </div>`,
    props: {
        node: {type: Object, default:() => ({icon: '', description: 'item', children: []})}
    },
    data () {
        return {
            isExpanded: false
        }
    },
    computed: {
        hasChildren() {
            return this.node.children && this.node.children.length >0;
        }
    },
    methods: {
        toggle() {
            this.isExpanded = !this.isExpanded;
        }
    }
});

export default treeNode;