<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  import {getJSON } from '../service/demo'
  export default {
    name: "MonthReport",
    data(){
      return {
        msg: 'MonthReport'
      }
    },
    // 实例创建完成
    mounted: function () {
      this.getData();
    },
    methods:{
      async getData(){
        let res = await getJSON();
        console.log(res,'***')
      }
    }
  }
</script>

<style scoped>

</style>
