<template>
  <div class="content-box-card">
    <slot></slot>
  </div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'ContentBoxCard'
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../scss/variables";

  .content-box-card{
    border: 1px solid $border-color;
    padding: 15px;

    .el-form-item {
      .el-input{
       //  width: 100% !important;
      }
      .el-select {
        width: 100% !important;
      }
      .el-input-number{
        width: 100% !important;
      }
    }
    .el-form {
      max-width: 750px;
      margin: 0px auto;
      padding-right : 40px;
    }
  }
</style>


