import Vue from 'vue';
import './app-master-details.css';

const AppMasterDetails = Vue.component('app-master-details',{
    template: `<div class="app-master-details">
        <div class="wrapper d-flex flex-column app-master-details-wrapper" :class="{'app-master-details-wrapper--full-height': isDetailViewEnabled}">
        <section class="app-master-details__header">
            <section>
                <h3>{{title}}</h3>
                <p v-if="description" class="text-muted app-master-details__description">{{description}}</p>
            </section>
            <div class="d-flex ml-auto mr-1" role="group" aria-label="Basic example">
                <button type="button" class="btn ml-1 btn-outline-dark" @click="search"><span class="oi oi-magnifying-glass"></span></button>
                <button type="button" class="btn ml-1 btn-outline-dark" @click="add"> + </button>
                <button type="button" v-show="!isDetailViewEnabled" class="btn ml-1 btn-outline-dark" @click="toggleView"><span class="oi oi-list"></span></button>
                <button type="button" v-show="isDetailViewEnabled" class="btn ml-1 btn-outline-dark" @click="toggleView"><span class="oi oi-menu"></span></button>
            </div>
        </section>
        <app-table class="app-master-details__content" v-show="!isDetailViewEnabled" :variant="variant" :headers="tableView.headers" :rows="master" :headers-config="{'variant': tableView.variant? tableView.variant : variant}">
            <template v-slot="slotProps">
                <a href="#" @click="keyClicked($event, slotProps.data.item)" v-if="slotProps.data.header.name === tableView.keyField">{{slotProps.data.item[slotProps.data.header.name]}}</a>
                <span v-else>{{slotProps.data.item[slotProps.data.header.name]}}</span>
            </template>
        </app-table>
        <section class="app-master-details__content app-master-details__content--detail" v-show="isDetailViewEnabled">
            <ul class="app-master-details__detail-index list-group">
                <li class="list-group-item" :class="{'active': selectedRow === row}" v-for="row in master">
                    <div @click="detailItemClicked(row)">
                    {{row.col1}}
                    </div>
                </li>
            </ul>
            <div class="app-master-details__detail-content">
                <slot>
                    Here goes the content
                </slot>
            </div>
        </section>
        </div>
    </div>`,
    props: {
        title: {type: String, default: 'Data Sample'},
        description: {type: String, default: ''},
        master: {type: Array, default: () =>  []},
        detail: {type: Object, default: ()=> null},
        variant: {type: String, default: 'light'},
        tableView: { type: Object, default: () =>  ({
            headers: [],
            variant: 'light',
            keyField: 'description'
         })
        }
    },
    data() {
        return {
            isDetailViewEnabled: false,
            master: this.master,
            selectedRow: null,
            detail: {}
        }
    },
    methods: {
        add() {
            this.$emit('add');
        },
        search() {
            this.$emit('search')
        },
        keyClicked($event, row) {
            $event.stopPropagation();
            this.selectedRow = row;
            this.isDetailViewEnabled = true;
            this.$emit('load-detail', row);
        },
        toggleView() {
            this.isDetailViewEnabled = !this.isDetailViewEnabled;
        },
        detailItemClicked(row) {
            this.selectedRow = row;
            this.$emit('load-detail', row);
        }
    }
});

export default AppMasterDetails;