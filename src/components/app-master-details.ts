declare let Vue: any;

const AppMasterDetails = Vue.component('app-master-details',{
    template: `<div class="app-master-details">
        <section class="app-master-details__header d-flex">
            <h3>{{title}}</h3>
            <div class="d-flex ml-auto mr-1" role="group" aria-label="Basic example">
                <button type="button" class="btn ml-1 btn-outline-dark"><span class="oi oi-magnifying-glass" @click="search"></span></button>
                <button type="button" class="btn ml-1 btn-outline-dark" @click="add"> + </button>
            </div>
        </section>
        <table :class="['table', variant ? 'table-' + variant: null]">
            <thead :class="[headersConfig.variant ? 'thead-' + headersConfig.variant: null]">
                <tr>
                    <th>#</th>
                    <th v-for="header in headers">
                        {{header.description}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows">
                    <td>{{index+1}}</td>
                    <td v-for="header in headers">{{row[header.name]}}</td>
                </tr>
            </tbody>
        </table>
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