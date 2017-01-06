<template>
  <div class="content-box-block">
    <slot></slot>
  </div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'ContentBoxBlock'
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .content-box-block{
    padding: 20px 30px;
  }
</style>


