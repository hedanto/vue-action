<template>
  <div class="content-box-toolbar-wrapper" :class="{'border': border}"><slot></slot></div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'ContentBoxToolbar',
    props: {
      border: {
        type: Boolean,
        default: true
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../scss/variables";
  .content-box-toolbar-wrapper{
    padding: 12px 30px 0px;
    &.border{
      border-bottom: 1px solid $border-color;
    }
    .el-form-item{
      margin-bottom: 12px !important;
    }
    .el-date-editor.el-input{
      width: auto !important;
    }
    .el-input-number{
      width: auto !important;
    }
    .el-button {
      margin-bottom: 12px !important;
    }
  }
  .ivu-affix .content-box-toolbar-wrapper{
    background: #fff;
    box-shadow: 0px -2px 3px rgba(51, 51, 51, 0.25);
  }
</style>


