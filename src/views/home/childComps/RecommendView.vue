<template>
  <div class="recommends">
    <div class="recommends-item" v-for="item in  recommends">
      <a  :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props: {
            recommends: Array,
            defalut() {
                return []
            }
        }
    }
</script>

<style scoped>
  .recommends{
    display: flex;
    width: 100%;
  }
  .recommends-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommends-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

</style>
