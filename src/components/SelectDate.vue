<template>
  <div class="date">
    <el-date-picker
        v-model="date"
        type="date"
        size="mini"
        border="none"
        placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
  import {formDate} from '../utils/utils'
  export default {
    name: "SelectArea",
    data(){
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        date: formDate(Date.now(), {mark: '$'})
      }
    },
  }
</script>

<style lang="scss">
.header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background: #2c86ff;
  .select{
    background: #2c86ff;
  }
  .el-input__inner{
    border: none !important;
  }
}
</style>
