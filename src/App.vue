<template>

    <div id="app">
        <Selector :items="selectorItems" @filter="filterData($event, 'location')">
            <span slot="all">{{$t('all_locations')}}</span>
            <div>{{$t('location')}}</div>
        </Selector>

        <Table
            class="testTable"
            :items="data"
            :style="require('./assets/css/testTable.styl')"
            @sort="sortData"
        />
    </div>

</template>

<script>

    import Selector from './components/Selector';
    import Table from './components/Table';
    import data from './mocs/data';
    import tableMap from './assets/maps/testTable';
    import dataService from './services/data';

export default {
    name: 'App',

    components: {
        Selector,
        Table,
    },

    data() {
        return {
            data,
            selectorItems: [],
            ascendingSort: true,
        };
    },

    watch: {
        data() {
            this.mapData();
        },
    },

    methods: {
        mapData() {
            dataService.map.call(this, this.data, tableMap);
        },

        sortData(sort) {
            dataService.sort(this.data, {by: sort.by, ascending: this.ascendingSort});
            this.ascendingSort = !this.ascendingSort;
        },

        filterData(filter, by) {
            this.data = dataService.filter(data, filter, by);
        },

        setSelectorItems() {
            this.selectorItems = Array.from(new Set(this.data.map((item) => item.location.value))).filter((item) => item);
        },
    },

    beforeMount() {
        this.mapData();
        this.setSelectorItems();
    },
}
</script>

<style lang="stylus">

    body
        background-color #eeeeee

    #app
        max-width 1320px
        margin 0 auto
        font-family Arial, sans-serif
        font-size 13px
        line-height 1.4
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        color #2c3e50

    .testTable
        margin-top 30px
        max-height calc(90vh - 30px - 63px)

</style>
