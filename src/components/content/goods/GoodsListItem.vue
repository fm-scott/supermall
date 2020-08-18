<template>
  <div class="goods-list-item"></div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            goodsItem: {
                type: Object,
                defalut() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>

</style>
