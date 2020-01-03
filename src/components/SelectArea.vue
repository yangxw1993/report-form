<template>
  <div class="header">
    <div class="area flex-center">
      <el-select class="select" size="mini" v-model="value" placeholder="请选择">
        <el-option
            v-for="item in areaList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
    <div class="date">
      <SelectDate></SelectDate>
    </div>
  </div>
</template>

<script>
  import SelectDate from "./SelectDate";
  export default {
    name: "SelectArea",
    components:{ SelectDate },
    data(){
      return {
        areaList: [
          {
          value: '选项1',
          label: '日报表全国版'
        }, {
          value: '选项2',
          label: '日报表区域版',
        }],
        value: '日报表全国版'
      }
    },
  }
</script>

<style lang="scss">
.header{
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px 0;
  width: 100%;
  background: #2c86ff;
  z-index: 9999;
  .select{
    background: #2c86ff;
  }
  .area{
    .el-input__inner{
      width: 120px;
      color: #fff;
      background: #2c86ff !important;
    }
    .el-select__caret{
      color: #fff !important;
    }
  }
  .date{
    margin: 10px auto;
    width: 95%;
    background: #fff;
  }
}
</style>
