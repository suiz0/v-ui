import Vue from 'vue';

const AppListView = Vue.component('app-list-view', {
    template: `<section class="app-list-view view-content">
        <ul class="app-list-view__list">
        </ul>
        <section class="app-list-view__detail">
            <h2>Details</h2>
            <p>Here goes the details</p>
        </section>
    </section>`,
    props: {
        items: {type: Array, default: () => []}
    },
    methods: {

    }
});

export default AppListView;