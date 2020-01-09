<template>

    <label class="Selector">
        <slot/>
        <select v-model="filter" class="select">
            <option value="all">
                <slot name="all"></slot>
            </option>
            <option v-for="item in items" :key="item" :value="item">{{item}}</option>
        </select>
    </label>

</template>

<script>

    export default {
        name: 'Selector',

        props: {
            items: {
                type: Array,
                default: () => [],
            },
        },

        data() {
            return {
                filter: 'all',
            };
        },

        watch: {
            filter(value) {
                this.$emit('filter', value);
            },
        },
    }

</script>

<style scoped lang="stylus">

    .Selector
        position relative
        display inline-block
        color rgba(0,0,0,0.4)
        &::after
            position absolute
            content ''
            display block
            width 7px
            height 7px
            border-bottom 1px solid rgba(0,0,0,0.4)
            border-right 1px solid rgba(0,0,0,0.4)
            filter drop-shadow(0 0 1px rgba(0,0,0,0.2))
            transform rotate(45deg)
            right 12px
            bottom 18px

    .select
        width 160px
        height 40px
        padding 10px 30px 11px 20px
        margin-top 5px
        background-color white
        outline none
        border none
        border-radius 0
        appearance none

</style>
