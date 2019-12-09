<template>
<div>
  <nav-bar  class="home_nav">
      <div  slot="center">购物街</div>
  </nav-bar>
</div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "home",
        components:{
            NavBar
        }
    }
</script>

<style scoped>
.home_nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
