const TableMixin = {
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
}

export default TableMixin;