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
    mounted: function () {
      getJSON().then(res => {
        this.content = JSON.stringify(res)
      })
    }
  }
</script>

<style scoped>

</style>
