import Vue from 'vue';
import AppTable from './app-table';

const AppMasterDetails = Vue.component('app-master-details',{
    template: `<div class="app-master-details">
        <section class="app-master-details__header d-flex">
            <h3>{{title}}</h3>
            <div class="d-flex ml-auto mr-1" role="group" aria-label="Basic example">
                <button type="button" class="btn ml-1 btn-outline-dark"><span class="oi oi-magnifying-glass" @click="search"></span></button>
                <button type="button" class="btn ml-1 btn-outline-dark" @click="add"> + </button>
            </div>
        </section>
        <app-table :variant="variant" :headers="headers" :rows="rows" :headers-config="headersConfig"></app-table>
    </div>`,
    props: {
        title: {type: String, default: 'Data Sample'},
        headers: {type: Array, default: function() {return []}},
        rows: {type: Array, default: function() {return []}},
        variant: {type: String, default: 'light'},
        headersConfig: {type: Object, default: function() {
            return {
                variant: 'light'
            }
        }}
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