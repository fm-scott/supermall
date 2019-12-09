<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item_icon"></slot>
    </div>
    <div v-else>
      <slot name="item_active_icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      link: String,
      activedColor: {
        type: String,
        default: '#C21F39'
      }

    },
    data () {
      return {}
    },
    computed: {
      isActive () {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle () {
        return this.isActive ? {color: this.activedColor} : {}
      }
    },
    methods: {
      itemClick () {
        this.$router.push(this.link)
        // this.isActive = true
      }
    }
  }
</script>

<style scoped>
  .tab_bar_item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab_bar_item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .isActive {
    color: #C21F39;
  }

</style>
