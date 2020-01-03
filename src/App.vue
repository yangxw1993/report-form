<template>
  <div id="app">
    <SelectArea></SelectArea>
    <div class="bg">
      <div class="content">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
  import TabBar from "./components/TabBar";
  import SelectArea from "./components/SelectArea";
  // import SelectDate from "./components/SelectDate";
  export default {
    name: 'app',
    components: { TabBar,  SelectArea}
  }
</script>

<style lang="scss">
  #app{
    background: #2c86ff;
    .bg{
      padding: 100px 0;
      .content{
        margin: 0 auto;
        width: 95%;

      }
    }
  }


</style>
