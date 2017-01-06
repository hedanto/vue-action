<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <p>用显示api一个表格</p>
    </pl-content-box-block>
    <pl-content-box-title>组件演示</pl-content-box-title>
    <pl-content-box-block>
      <pl-code-box title="表格组件" describe="表格组件的使用代码" :html="html" :js="js">
        <pl-api-table :head="tableHead" :content="tableContent" title="表格标题"></pl-api-table>
      </pl-code-box>
    </pl-content-box-block>
    <pl-content-box-title>apiTable组件的API</pl-content-box-title>
    <pl-content-box-block>
      <pl-api-table :head="apiTableHead" :content="apiTableContent"></pl-api-table>
    </pl-content-box-block>
  </pl-content-box>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>

<script>
  let html =
  `
  <pl-api-table :head="tableHead" :content="tableContent" title="表格标题"></pl-api-table>
  `;
  let js =
  `
  let tableHead = ['title1', 'title2'];
  let tableContent = [['1-1', '1-2'], ['2-1', '2-2']];
  export default {
    data () {
      return {
        tableHead,
        tableContent,
        html
      };
    }
  };
  `;
  // head里面数组的个数表示有多少列
  let tableHead = ['title1', 'title2'];
  // content最外层数组个数表示有多少行
  let tableContent = [['1-1', '1-2'], ['2-1', '2-2']];
  let apiTableHead = ['参数', '说明', '类型', '默认值'];
  let apiTableContent = [
    ['type', '表格类型(props,methods,events)', 'string', 'props'],
    ['head', '表头数据,根据type字段,head的默认值也不同', 'array', 'props:["参数","说明","类型","默认值"],methods:["方法名","说明","参数"],events:["事件名","说明","参数"]'],
    ['content', '表格每行的内容数组 [["1","2","3","4"]...]', 'array', '无'],
    ['apis', '表格每行的内容数组 [{parameter,explain,type,default}...],推荐用content', 'array', '无']
  ];

  export default {
    data () {
      return {
        // apiTable数据源
        tableHead,
        tableContent,
        apiTableContent,
        apiTableHead,
        html,
        js
      };
    }
  };
</script>
