<template>
  <div ref="rkTable">
    <el-table
            stripe
            :border="border"
            :data="dataSource"
            @selection-change="handleSelectionChange"
            v-loading="listLoading"
            @row-dblclick="rowClick"
            highlight-current-row
            @row-click="clickTable"
            ref="refTable"
            @expand-change="expandChange"
    >
      <!--数据源-->
      <el-table-column
              v-for="(column, index) in columns"
              v-if="column.isShow"
              header-align="center"
              :sortable="column.hasSort"
              :key="column.prop"
              :prop="column.prop"
              :label="column.label"
              :align="column.align"
              :width="column.width">
      </el-table-column >
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'rkTable',
  data() {
    return {
    };
  },
  props:{
      dataSource: {             // 表格数据源
          type: Array,
          default: ()=> []
      },
      columns: {                // 表格的字段展示
          type: Array,
          default: ()=>[]
      }
  },
  computed: {

  },
  mounted() {

  },
  beforeDestroy() {

  },
  methods: {

  },
  watch: {

  }
};
</script>

<style lang="css">
</style>