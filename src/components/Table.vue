<template>

    <div class="Table">
        <TableHead :items="headItems" @sort="$emit('sort' , $event)"/>
        <TableBody :items="items"/>
    </div>

</template>

<script>

    import TableHead from './TableHead';
    import TableBody from './TableBody';

    export default {
        name: 'Table',

        components: {
            TableHead,
            TableBody,
        },

        props: {
            items: {
                type: Array,
                default: () => [],
            },
        },

        computed: {
            headItems() {
                if (this.items && this.items.length) {
                    const res = {};

                    this.items.forEach((item) => {
                        for(const key in item) {
                            if(!res.hasOwnProperty(key) && item.hasOwnProperty(key)) {
                                res[key] = item[key];
                            }
                        }
                    });

                    return res;
                }

                return null;
            },
        },
    }

</script>

<style scoped lang="stylus">

    .Table
        display flex
        flex-direction column
        text-align left
        @media (max-width: 767px)
            overflow auto
            background-color white
            border-radius 3px
            @supports (scrollbar-width: thin)
                scrollbar-width thin

    .Table >>> *
        box-sizing border-box

</style>
