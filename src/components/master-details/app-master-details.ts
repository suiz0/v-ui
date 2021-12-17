import Vue from 'vue';
import './app-master-details.css';

const AppMasterDetails = Vue.component('app-master-details',{
    template: `<div class="app-master-details">
        <section class="app-master-details__header">
            <section>
                <h3>{{title}}</h3>
                <p v-if="description" class="text-muted app-master-details__description">{{description}}</p>
            </section>
            <div class="d-flex ml-auto mr-1" role="group" aria-label="Basic example">
                <button type="button" class="btn ml-1 btn-outline-dark"><span class="oi oi-magnifying-glass" @click="search"></span></button>
                <button type="button" class="btn ml-1 btn-outline-dark" @click="add"> + </button>
            </div>
        </section>
        <slot v-bind="{master, variant}">
        </slot>
    </div>`,
    props: {
        title: {type: String, default: 'Data Sample'},
        description: {type: String, default: ''},
        master: {type: Array, default: () =>  []},
        variant: {type: String, default: 'light'},
    },
    data() {
        return {
            master: this.master,
            detail: {}
        }
    },
    methods: {
        add() {
            this.$emit('add');
        },
        search() {
            this.$emit('search')
        }
    }
});

export default AppMasterDetails;