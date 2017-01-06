<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <p>用于滚动的时候，固定某个元素</p>
    </pl-content-box-block>
    <pl-content-box-title>组件演示</pl-content-box-title>
    <pl-content-box-block>
      <pl-code-box title="affix组件使用方法" :describe="describe" :html="html" :css="css">
        <div>
          <p>这是一篇示例文章,文章篇幅超长,长到难以想象</p>
          <p>觉得有多长?可以告诉你,真的超长</p>
          <p>真的没骗你,不信你看看</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <p>很长很长很长很长很长很长</p>
          <pl-affix :offset-top="60">
            <div class="bg-primary">这是一个固钉</div>
          </pl-affix>
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
        </div>
      </pl-code-box>
    </pl-content-box-block>
    <pl-content-box-title>affix组件的API</pl-content-box-title>
    <pl-content-box-block>
      <pl-api-table :head="tableHead" :content="tableContent"></pl-api-table>
    </pl-content-box-block>
  </pl-content-box>
</template>

<script>
  let html =
  `
  // 这里是设置了固定在距离顶部60px的位置
  <div>
    <p>文本内容</p>
    <pl-affix :offset-top="60">
      <div class="affix-class">这是一个固钉</div>
    </pl-affix>
    <p>文本内容</p>
  </div>
  `;
  let css = ``;
  let describe =
  `
  默认固定在最顶端,可以设置页面滚动到一定位置后固定,注意,offset-top和offset-bottom只可以设置一个,如果两个都设置了,默认会使用offset-top
  `;
  let tableHead = ['参数', '说明', '类型', '默认值'];
  let tableContent = [
    ['offset-top', '距离窗口顶部达到指定偏移量后触发', 'Number', '0'],
    ['offset-bottom', '距离窗口底部达到指定偏移量后触发', 'Number', '-'],
    ['on-change', '在固定状态发生改变的时候会触发on-change事件', '', '']
  ];

  export default {
    data () {
      return {
        describe,
        html,
        css,
        tableHead,
        tableContent
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
