import Vue from 'vue';
import BaseMixin from '../../mixins';

let AppTable = Vue.component('app-table', {
    mixins: [BaseMixin],
    template: `<table :class="['table', variant ? 'table-' + variant: null]">
    <thead :class="[headersConfig.variant ? 'thead-' + headersConfig.variant: null]">
        <tr>
            <th v-if="showIndexColumn">#</th>
            <th v-for="header in headers">
                {{header.description}}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(row, index) in innerRows" @click="rowClicked(row)" :class="{'row--selected': row.isSelected}">
            <td v-if="showIndexColumn">{{index+1}}</td>
            <td v-for="header in headers">{{row.data[header.name]}}</td>
        </tr>
    </tbody>
</table>`,
    props: {
        variant: {type: String, default: 'light'},
        headers: {type: Array, default:()=> []},
        headersConfig: {type: Object, default: function() {
            return {
                variant: 'light'
            }
        }},
        showIndexColumn: {type: Boolean, default: false},
        rows: {type: Array, default: () => []}
    },
    data() {
        return {
            innerRows: []
        }
    },
    methods: {
        parseRows(rows) {
            return this.rows.map((currentValue) => {
                return {
                    data: currentValue, 
                    isSelected: false
                };
            });
        },
        rowClicked(row) {
            row.isSelected = !row.isSelected;
        }
    },
    created() {
        this.innerRows = this.parseRows(this.rows)
    }
});

export default AppTable;