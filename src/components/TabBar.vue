<template>
  <div class="flex-bet tab">
    <div class="tab-item flex-center text-c" v-for="(item, index) in tabBar" :key="item.text">
      <router-link class="tab-link" :class="{active:defaultIndex===index}" :to="item.path" @click.native="changeRouter(index)">{{item.text}}</router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: "TabBar",
    data(){
      return {
        tabBar: [
          {
            text: '日报表',
            path: '/day'
          },
          {
            text: '周报表',
            path: '/week',
          },
          {
            text: '月报表',
            path: 'month',
          }
        ],
        defaultIndex: 0,
      }
    },
    methods: {
      changeRouter(index){
        this.defaultIndex = index;
      }
    }
  }
</script>

<style scoped lang="scss">
.tab{
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  height: 80px;
  background: #ccc;
  z-index: 9999;
  &-item{
    flex: 1;
    height: 80px;
    flex-direction: column;
  }
  .router-link-exact-active{
    color: #42b983;
  }
  &-link{
    font-size: 18px;
    color: #fff;
  }
}
</style>
