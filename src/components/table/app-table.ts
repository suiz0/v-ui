import Vue from 'vue';
import BaseMixin from '../../mixins';
import TableMixin from './mixins';
import './table.css';

const AppTable = Vue.component('app-table', {
    mixins: [BaseMixin, TableMixin],
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
        <tr v-for="(row, index) in innerRows" @click="rowClicked(row)" :class="{'app-table__row--selected': row.isSelected, 'app-table__row': true}">
            <td v-if="showIndexColumn">{{index+1}}</td>
            <td v-for="header in headers">{{row.data[header.name]}}</td>
            <td v-if="showActionColumn">
                <b-dropdown text="..." no-caret>
                    <b-dropdown-item @click="deleteRecord($event, row)" href="#">Delete</b-dropdown-item>
                    <slot v-bin:row="row">
                    </slot>
                </b-dropdown>
            </td>
        </tr>
    </tbody>
</table>`,
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
        rowClicked(row) {
            row.isSelected = !row.isSelected;
        }
    },
    created() {
        this.innerRows = this.parseRows(this.rows)
    }
});

export default AppTable;