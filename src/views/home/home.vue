<template>
  <div id="home">

    <!-- 标题头 -->
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--    轮播图-->
    <home-swiper :banners="banners"/>

    <!--    推荐信息-->
    <recommend-view :recommends="recommends"/>

    <feature-view/>

    <tab-control :titles="tabDatas"></tab-control>
    <!-- <goods-list :goods=""/>-->

    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>


  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar"
    import TabControl from 'components/content/TabControl/TabControl'
    import GoodsList from "components/content/goods/GoodsList";


    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";


    import {getHomeMultidata, getHomeGoods} from 'network/home';


    export default {
        name: "home",
        data() {
            return {
                banners: [],
                recommends: [],
                tabDatas: [
                    '流行', '新款', '精选'
                ]
            }
        },
        components: {
            GoodsList,
            NavBar,
            TabControl,

            HomeSwiper,
            RecommendView,
            FeatureView
        }, created() {
            this.getHomeMultidata()
            this.getHomeGoods()

        },
        methods: {
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                })
            },

            getHomeGoods() {
                let type = 'pop'
                let page = 1
                getHomeGoods().then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home_nav {
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
</style>
