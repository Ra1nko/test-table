<template>
    <div class="TableBody">
        <div
            v-for="(item, i) in items"
            :key="`${item.id}-${i}`"
            class="row"
        >
            <div
                v-for="(value, field) in item"
                :key="`${value}-${field}`"
                class="item"
                :class="field"
            >
                <template v-if="value.link">
                    <a :href="value.link">{{value.value}}</a>
                </template>
                <template v-else>
                    {{value.value}}
                </template>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'TableBody',

        props: {
            items: {
                type: Array,
                default: () => [],
            },
        },
    }

</script>

<style scoped lang="stylus">

    .TableBody
        padding 0 30px 30px
        max-height 100%
        background-color white
        border-bottom-left-radius 3px
        border-bottom-right-radius 3px
        @media (min-width 768px)
            overflow auto
            @supports (overflow: overlay)
                overflow overlay
            @supports (scrollbar-width: thin)
                padding 0 19px 30px 30px
                scrollbar-width thin

    .TableBody::-webkit-scrollbar
        width 9px

    .TableBody::-webkit-scrollbar-thumb
        background-color rgba(135, 135, 135, 0.3)
        border 3px solid white
        border-radius 10px

    .item
        padding 20px 10px
        flex-basis auto
        flex-grow 1

    .item a
        color #6495ed
        text-decoration none
        &:hover
            text-decoration underline

    .row
        display flex
        &:hover
            background-color rgba(135, 135, 135, 0.1)

    .row:not(:last-child) > *:not(.spacer)
        border-bottom 1px solid #eeeeee

</style>
