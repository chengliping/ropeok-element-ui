<template>
  <div id="app">
    <div>

    <div class="container" ref="wise">
      <h1>测试 直接使用 element-ui button 组件11111111122222222222222</h1>
      <el-button type="primary">element bottom</el-button>
      <h1>测试 封装一层 element-ui table 组件</h1>
      <rk-table
              :dataSource="dataSource"
              :columns="columns"
      >
      </rk-table>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        dataSource:[{
            'createTime': '2019-06-17',
            'phone': '110',
            'username': '警察叔叔',
            'deptName': '公安部',
            'status': '执勤'
        }], // 数据源
        columns: [{
            hasSort: false, //<Boolean> 是否排序
            isShow: true, //<Boolean> 是否展示
            prop: 'createTime', //<String>  对应属性名
            label: '日期', //<String>   表头标签
            align: 'center',
            width: 200, // 列宽
        },
        {
            hasSort: false, //<Boolean> 是否排序
            isShow: true, //<Boolean> 是否展示
            prop: 'phone', //<String>  对应属性名
            label: '手机', //<String>   表头标签
            align: 'center'
        },
        {
            hasSort: true, //<Boolean> 是否排序
            isShow: true, //<Boolean> 是否展示
            prop: 'username', //<String>  对应属性名
            label: '名字', //<String>   表头标签
            align: 'center'
        },
        {
            hasSort: true, //<Boolean> 是否排序
            isShow: true, //<Boolean> 是否展示
            prop: 'deptName', //<String>  对应属性名
            label: '部门', //<String>   表头标签
            align: 'center'
        },
        {
            hasSort: true, //<Boolean> 是否排序
            isShow: true, //<Boolean> 是否展示
            prop: 'status', //<String>  对应属性名
            label: '状态', //<String>   表头标签
            align: 'center'
        }
      ],
    }
  },
  methods: {

  }
}
</script>

<style lang="css"></style>
