<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <p>使用Element UI的表格组件(elTable)和分页组件(elPagination)进行二次封装的带分页和异步请求的功能表格组件。</p>
    </pl-content-box-block>
    <pl-content-box-title>
      组件演示
    </pl-content-box-title>
    <pl-content-box-block>
       <pl-code-box title = "分页表格列子"
                    describe-html="简单的分页功能的展示,其他基本功能和Element UI的表格组件(elTable)功能一样请参考 <a target='_blank' class='link' href='http://element.eleme.io/#/zh-CN/component/table'>文档 </a>。"
                    :html="html"
                    :js="js">
         <el-button type="primary" @click="reload">刷新</el-button>
         <br><br>
         <pl-page-table :data-fun="getPageData" ref="pageTable" @after-load="handleAfterLoad">
           <el-table-column sortable="date"
                            prop="date"
                            label="日期"
                            width="180">
           </el-table-column>
           <el-table-column
             prop="name"
             label="姓名"
             width="180">
           </el-table-column>
           <el-table-column
             prop="address"
             label="地址">
           </el-table-column>
         </pl-page-table>
       </pl-code-box>
      </pl-code-box>
    </pl-content-box-block>
    <pl-content-box-title>
      pageTable组件的API
    </pl-content-box-title>
    <pl-content-box-block>
      <h4>pageTable新增的属性，其他属性请参考 <a target='_blank' class='link' href='http://element.eleme.io/#/zh-CN/component/table'>文档 </a>。</h4>
      <pl-api-table :head="tableHead" :content="tableContent"></pl-api-table>
    </pl-content-box-block>
    <pl-content-box-block>
      <h4>pageTable新增的事件，其他事件请参考 <a target='_blank' class='link' href='http://element.eleme.io/#/zh-CN/component/table'>文档 </a>。</h4>
      <pl-api-table :head="tableHeadEvent" :content="tableContentEvent"></pl-api-table>
    </pl-content-box-block>
    <pl-content-box-block>
    <h4>pageTable新增的方法，其他事件请参考 <a target='_blank' class='link' href='http://element.eleme.io/#/zh-CN/component/table'>文档 </a>。</h4>
    <pl-api-table :head="tableHeadMethod" :content="tableContentMethod"></pl-api-table>
    </pl-content-box-block>
  </pl-content-box>
</template>
<script>
  let html =
    `
<pl-page-table :data-fun="getPageData" ref="pageTable" @after-load="handleAfterLoad">
  <el-table-column sortable="date"
                   prop="date"
                   label="日期"
                   width="180">
  </el-table-column>
  <el-table-column
    prop="name"
    label="姓名"
    width="180">
  </el-table-column>
  <el-table-column
    prop="address"
    label="地址">
  </el-table-column>
</pl-page-table>
`;
let js =
`
export default {
  data () {
    return {
      getPageData: this.$api.pageTable.getPageData
    };
  },
  methods: {
    reload () {
      let params = {
        param1: 1,
        param2: 2
      };
      this.$refs.pageTable.reload(params);
    }
  }
};
`;
  let tableHead = ['属性名', '说明', '类型', '默认值'];
  let tableContent = [
    ['data-fun', '获取数据的异步方法，接受参数{pageSize:Number, pageNo:Number},返回promise', 'Function', '无'],
    ['page-sizes', '每页显示个数选择器的选项设置', 'Number[]', '[10, 20, 30, 40, 50]'],
    ['page-size', '每页显示条目个数', 'Number', '10'],
    ['show-number', '是否显示序号', 'Boolean', 'true'],
    ['params', '默认过滤参数，如果想配置默认排序可以配置{sortName:"排序字段名",sortType:"asc|desc"}', 'string', '无']
  ];

  let tableHeadEvent = ['事件名', '说明', '参数'];
  let tableContentEvent = [
    ['after-load', '数据加载后响应，可以在这里获取请求后的数据', 'ret']
  ];

  let tableHeadMethod = ['方法名', '说明', '参数'];
  let tableContentMethod = [
    ['reload', '用来刷新列表，同时接收过滤参数，如果过滤参数和默认过滤参数重名，将会覆盖默认参数.具体使用请参考上面例子', 'params']
  ];

  export default {
    data () {
      return {
        getPageData: this.$api.pageTable.getPageData,
        js,
        html,
        tableHead,
        tableContent,
        tableHeadEvent,
        tableContentEvent,
        tableHeadMethod,
        tableContentMethod
      };
    },
    methods: {
      reload () {
        let params = {
          param1: 1,
          param2: 2
        };
        this.$refs.pageTable.reload(params);
      },
      handleAfterLoad (ret) {
        console.info(ret);
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  p {
    text-indent: 2em;
  }
</style>


