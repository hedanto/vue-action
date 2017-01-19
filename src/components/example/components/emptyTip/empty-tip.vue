<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <p>用于页面的空白提示</p>
    </pl-content-box-block>
    <pl-content-box-title>组件演示</pl-content-box-title>
    <pl-content-box-block>
      <pl-code-box title="代码" describe="&nbsp;" :html="html">
        <pl-empty-tip type="info" text="这是消息提示！"></pl-empty-tip>
        <pl-empty-tip type="error" text="这是消息提示！"></pl-empty-tip>
        <pl-empty-tip type="waring" text="这是消息提示！"></pl-empty-tip>
        <pl-empty-tip type="success" text="这是消息提示！"></pl-empty-tip>
      </pl-code-box>
    </pl-content-box-block>
    <pl-content-box-title>组件的API</pl-content-box-title>
    <pl-content-box-block>
      <pl-api-table :head="tableHead" :content="tableContent"></pl-api-table>
    </pl-content-box-block>
  </pl-content-box>
</template>

<script>
  let html =
    `
<pl-empty-tip type="info" text="这是消息提示！"></pl-empty-tip>
<pl-empty-tip type="error" text="这是消息提示！"></pl-empty-tip>
<pl-empty-tip type="waring" text="这是消息提示！"></pl-empty-tip>
<pl-empty-tip type="success" text="这是消息提示！"></pl-empty-tip>
  `;
  let tableHead = ['参数', '说明', '类型', '默认值'];
  let tableContent = [
    ['type', '类型 info、error、waring、success', 'String', 'info'],
    ['text', '提示信息', 'String', '--']
  ];

  export default{
    data () {
      return {
        html,
        tableHead,
        tableContent
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
