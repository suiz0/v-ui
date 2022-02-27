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
        <section class="app-master-details__content">
            <b-list-group class="app-master-details__master">
                <b-list-group-item href="#" class="flex-column align-items-start" v-for="item in master">
                    <div class="d-flex w-100 justify-content-between">
                        <h5>{{item[fieldsConfig.value]}}</h5>
                    </div>
                    <p>{{item[fieldsConfig.description]}}</p>
                </b-list-group-item>
            </b-list-group>
            <div class="app-master-details__detail">
                <slot>
                    Detail View
                </slot>
            </div>
        <section>
    </div>`,
    props: {
        title: {type: String, default: 'Data Sample'},
        description: {type: String, default: 'Master detail description'},
        master: {type: Array, default: () =>  []},
        fieldsConfig: {type: Object, default: () => ({
            value: 'name',
            description: 'description'
        })},
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