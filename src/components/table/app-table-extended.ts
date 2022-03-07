import Vue from 'vue';
import BaseMixin from '../../mixins';
import TableMixin from './mixins';
import AppTable from './app-table';

const AppTableExtended = Vue.component('app-table-extended', {
    mixins: [BaseMixin, TableMixin],
    template: `
    <section class="app-table-extended" :class="{'app-table-extended--fluid': isFluid}">
        <section class="app-table-extended__header">
            <section>
                <h3>{{title}}</h3>
                <p v-if="description" class="text-muted app-table-extended__description">{{description}}</p>
            </section>
            <div class="d-flex ml-auto mr-1 align-items-end" role="group" aria-label="Basic example">
                <button type="button" class="btn ml-1 btn-outline-dark"><span class="oi oi-magnifying-glass" @click="search"></span></button>
                <button type="button" class="btn ml-1 btn-outline-dark" @click="add"> + </button>
            </div>
        </section>
        <app-table :show-action-column="true" 
            :stripped="stripped" 
            :headers="headers" 
            :rows="rows" 
            :headers-config="headersConfig"
            :show-index-column="showIndexColumn"
        >
        </app-table>
    </section>`,
    props: {
        title: {type: String, default: 'Advanced Table Component'},
        description: {type: String, default: ''},
        isFluid: {type: Boolean, default: true}
    },
    methods: {
        search() {
            this.$emit('search');
        },
        add() {
            this.$emit('add');
        }
    }
});

export default AppTableExtended;