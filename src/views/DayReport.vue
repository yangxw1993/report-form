<template>
  <div class="table">
    <el-table
        :data="tableData"
        highlight-current-row
        style="width: 100%">
      <el-table-column
          v-for="(item, index) in tableHeader"
          :key="item.prop"
          :fixed="!index"
          :prop="item.prop"
          :label="item.label">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            label: '项目',
            prop: 'project',
          },
          {
            label: '全国',
            prop: 'country',
          },
          {
            label: '北京',
            prop: 'beijing',
          },
          {
            label: '深圳',
            prop: 'shenzhen',
          },
          {
            label: '上海',
            prop: 'shanghai',
          },
        ],
        tableData: [{
          project: '门店',
          country: 115,
          beijing: 13,
          shenzhen: '12.3%',
          shanghai: '20%'
        },
          {
            project: '门店',
            country: 115,
            beijing: 13,
            shenzhen: '12.3%',
            shanghai: '20%'
          },
          {
            project: '门店',
            country: 115,
            beijing: 13,
            shenzhen: '12.3%',
            shanghai: '20%'
          },
          {
            project: '门店',
            country: 115,
            beijing: 13,
            shenzhen: '12.3%',
            shanghai: '20%'
          },
          {
            project: '门店',
            country: 115,
            beijing: 13,
            shenzhen: '12.3%',
            shanghai: '20%'
          },
          {
            project: '门店',
            country: 115,
            beijing: 13,
            shenzhen: '12.3%',
            shanghai: '20%'
          },
          {
            project: '门店',
            country: 115,
            beijing: 13,
            shenzhen: '12.3%',
            shanghai: '20%'
          }]
      }
    }
  }
</script>
