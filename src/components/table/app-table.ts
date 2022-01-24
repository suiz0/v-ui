import Vue from 'vue';
import BaseMixin from '../../mixins';
import './table.css';

let AppTable = Vue.component('app-table', {
    mixins: [BaseMixin],
    template: `<table :class="[stripped ? 'app-table--stripped' : null, 'app-table', 'table', variant ? 'table-' + variant: null]">
    <thead :class="[headersConfig.variant ? 'thead-' + headersConfig.variant: null]">
        <tr>
            <th v-if="showIndexColumn">#</th>
            <th v-for="header in headers">
                {{header.description}}
            </th>
            <th class="col-1" v-if="showActionColumn">
                Actions
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(row, rowIndex) in innerRows" :class="{'app-table__row--selected': row.isSelected, 'app-table__row': true}">
            <td v-if="showIndexColumn">{{index+1}}</td>
            <td v-for="(header, headerIndex) in headers" @click="rowClicked(row, rowIndex, headerIndex)">
                <slot v-bind:data="{item: row.data, header:header}">
                    {{row.data[header.name]}}
                </slot>
            </td>
            <td v-if="showActionColumn">
                <b-dropdown text="..." no-caret>
                    <b-dropdown-item @click="deleteRecord($event, row)" href="#">Delete</b-dropdown-item>
                    <slot name="actions" v-bin:row="row">
                    </slot>
                </b-dropdown>
            </td>
        </tr>
    </tbody>
</table>`,
    props: {
        variant: {type: String, default: 'light'},
        headers: {type: Array, default:()=> []},
        stripped: {type: Boolean, default: true},
        showActionColumn: {type: Boolean, default: false},
        headersConfig: {type: Object, default: function() {
            return {
                variant: 'light'
            }
        }},
        showIndexColumn: {type: Boolean, default: false},
        rows: {type: Array, default: () => []}
    },
    watch: {
        rows(newValues) {
            this.innerRows = this.parseRows(newValues);
        }
    },
    data() {
        return {
            innerRows: []
        }
    },
    methods: {
        deleteRecord($event, item) {
            $event.stopPropagation();
            this.$emit('delete', item.data);
        },
        parseRows(rows) {
            return rows.map((currentValue) => {
                return {
                    data: currentValue, 
                    isSelected: false
                };
            });
        },
        rowClicked(row, rowIndex, cellIndex) {
            row.isSelected = !row.isSelected;
            this.$emit('row-clicked', row, {row: rowIndex, cell: cellIndex});
        }
    },
    created() {
        this.innerRows = this.parseRows(this.rows)
    }
});

export default AppTable;