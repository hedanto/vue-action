<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <h2>用于展现组件代码</h2>
    </pl-content-box-block>
    <pl-content-box-title>组件演示</pl-content-box-title>
    <pl-content-box-block>
      <pl-code-box title="backTop组件使用方法" :describe="describe" :html="html">
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
          <pl-back-top></pl-back-top>
        </div>
      </pl-code-box>
    </pl-content-box-block>
  </pl-content-box>
</template>

<script>
  let html =
  `
  这里是其他的html代码,长度足够
  <pl-back-top></pl-back-top>
  `;
  let describe =
  `
  默认位置距离页面右部和底部30px,滚动至距顶端400px时显示。也可以自定义显示的距离
  `;
  export default{
    data () {
      return {
        html,
        describe
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
