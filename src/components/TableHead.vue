<template functional>

    <div class="TableHead">
        <div
            v-for="(item, key) in props.items"
            :key="`${item.value}-${key}`"
            class="item"
            :class="key"
        >
            {{parent.$t(key)}}
            <div v-if="item.sort" class="sort" @click="listeners['sort']({by: key})">
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 489.4 489.4">
                    <path d="M370.2 468.9c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3V50.1l73.6 73.6c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6c4.8-4.8 4.8-12.5 0-17.3l-94.5-94.5c-4.6-4.6-12.7-4.6-17.3 0l-94.5 94.5c-4.8 4.8-4.8 12.5 0 17.3 4.8 4.8 12.5 4.8 17.3 0l73.6-73.6v418.8h-.2zM209.9 365.7c-4.8-4.8-12.5-4.8-17.3 0L119 439.3V20.5c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v418.8l-73.5-73.6c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l94.5 94.5c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6L210 383c4.6-4.7 4.6-12.5-.1-17.3z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'TableHead',

        props: {
            items: {
                type: Object,
                default: () => {},
            },
        },
    }

</script>

<style scoped lang="stylus">

    .TableHead
        position sticky
        top 0
        display flex
        padding 0 30px
        border-top-left-radius 3px
        border-top-right-radius 3px
        box-shadow 0 -1px 0 0 #eeeeee inset
        height auto
        min-height 70px
        @media (min-width 768px)
            position static
            background-color white

    .item
        display flex
        align-items center
        padding 20px 10px
        text-align left
        font-weight normal
        color rgba(0,0,0, 0.4)
        flex-basis auto
        flex-grow 1
        height auto
        min-height 55px
        @media (max-width 767px)
            min-height 70px
            background-color white
            box-shadow 0 -1px 0 0 #eeeeee inset

    .sort
        display inline-block
        margin-left 5px
        cursor pointer
        &:hover
            color black

</style>
