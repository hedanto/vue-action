<template>
  <div id="app">
    <biz-layout></biz-layout>
  </div>
</template>

<script>
  import layout from 'components/layout/layout.vue';

  export default {
    name: 'app',
    components: {
      'biz-layout': layout
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss">
  @import "common/scss/index";
  body{
    font-size: 14px;
    background: #FbFbFb none repeat scroll 0% 0%;
    background: url(../static/img/bg.jpg) repeat;
  }
</style>
