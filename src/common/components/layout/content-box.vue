<template>
  <div class="content-box">
    <slot></slot>
  </div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'ContentBox'
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .content-box{
    padding-bottom: 20px;
  }
</style>


