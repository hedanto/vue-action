<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <p>用于下拉页面时候，点击返回顶部</p>
    </pl-content-box-block>
    <pl-content-box-title>组件演示</pl-content-box-title>
    <pl-content-box-block>
      <pl-code-box title="backTop组件使用方法" :describe="describe" :html="html" :css="css">
        <div>
          <p>这是一篇示例文章,文章篇幅超长,长到难以想象</p>
          <p>觉得有多长?可以告诉你,真的超长</p>
          <p>真的没骗你,不信你看看</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>这个时候需要再给我一点空间</p>
          <p>让我再展示有多长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>这个时候需要再给我一点空间</p>
          <p>让我再展示有多长</p>
          <pl-back-top :height="100" :bottom="100"></pl-back-top>
        </div>
      </pl-code-box>
    </pl-content-box-block>
    <pl-content-box-title>backTop组件的API</pl-content-box-title>
    <pl-content-box-block>
      <pl-api-table :head="tableHead" :content="tableContent"></pl-api-table>
    </pl-content-box-block>
  </pl-content-box>
</template>

<script>
  let html =
  `
  这里是其他的html代码,长度足够
  <pl-back-top></pl-back-top>

  如果是需要自定义显示距离的话,可以使用下列代码
  <pl-back-top :height="100" :bottom="100">
    </pl-back-top>
  `;
  let css = ``;
  let describe =
  `
  默认位置距离页面右部和底部30px,滚动至距顶端400px时显示。也可以自定义显示的距离
  `;
  let tableHead = ['参数', '说明', '类型', '默认值'];
  let tableContent = [
    ['height', '页面滚动高度达到该值时才显示组件', 'Number', '400'],
    ['bottom', '组件距离底部的距离', 'Number', '30'],
    ['right', '组件距离右部的距离', 'Number', '30'],
    ['duration', '滚动动画持续时间，单位 毫秒', 'Number', '1000'],
    ['on-click', '点击按钮是触发on-click事件', '', '']
  ];

  export default{
    data () {
      return {
        html,
        css,
        describe,
        tableHead,
        tableContent
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
