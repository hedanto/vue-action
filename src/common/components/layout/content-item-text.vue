<template>
  <div class="content-item-text"><slot></slot></div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'ContentItemText'
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .content-item-text{
    padding: 0 10px;
    line-height: 36px;
  }
</style>


