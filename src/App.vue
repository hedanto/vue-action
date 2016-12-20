<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss">
  @import "common/scss/index";
  body{
    background: url(../static/img/bg.jpg) repeat;
  }
</style>
