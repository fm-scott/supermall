<template>
  <div class="goods">

  </div>
</template>

<script>
    export default {
        name: "GoodsList",
        props: {
            goods: {
                type: Array,
                defalut() {
                    return []
                }
            }
        }

    }
</script>

<style scoped>

</style>
