import Vue from 'vue';

const treeNode = Vue.component('app-tree-node', {
    template: `<div class="app-tree-node list-group-item" :class="['bg-'+variant, 'app-tree-node--' + variant]">
        <div class="app-tree-node__wrapper d-flex">
            <div class="app-tree-node__icon item__icon" @click="toggle" v-show="hasChildren">
                <span class="oi oi-caret-right"></span>
            </div>
            <div class="app-tree-node__content" :class="{'app-tree-node--empty' :!hasChildren}">
            {{node.description}}
            </div>
        </div>
        <app-tree v-if="hasChildren" :items="node.children" v-show="isExpanded" class="app-tree__subtree" :variant="variant"></app-tree>

    </div>`,
    props: {
        variant: {type: String, default: 'light'},
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