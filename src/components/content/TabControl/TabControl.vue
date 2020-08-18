<template>
  <div class="tab-control">
    <div v-for="(item ,index ) in  titles"
         class="tab-control-item"
         @click="itemClick(index)"
         :class="{actived:curentIndex==index}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            titles: {
                type: Array,
                defalut() {
                    return [];
                }
            }
        },
        data() {
            return {
                curentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                this.curentIndex = index
            }
        }
    }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    background-color: white;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .actived {
    color: var(--color-high-text);
  }

  .actived span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
