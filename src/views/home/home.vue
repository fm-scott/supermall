<template>
  <div>
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners" />


  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar"
    import {getHomeMultidata} from 'network/home'
    import HomeSwiper  from "./childComps/HomeSwiper";

    export default {
        name: "home",
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        components: {
            NavBar,
            HomeSwiper
        }, created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
                console.log(res.data.banner.list)
            })

        }
    }
</script>

<style scoped>
  .home_nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
