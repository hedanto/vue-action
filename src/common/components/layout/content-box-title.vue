<template>
  <div class="content-box-title-wrapper">
    <div class="content-box-title">
      <span><slot></slot></span>
    </div>
    <div class="content-box-title-right">
      <div class="content-box-title-tip">
        <slot name="tip"></slot>
      </div>
      <div class="content-box-title-toolbar">
        <slot name="toolbar"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'ContentBoxTitle'
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/variables";
  @import "../../scss/mixin";

  .content-box-title-wrapper {
    padding: $context-header-y-padding $context-header-x-padding;
    line-height: 36px;
    border-bottom: 1px solid $border-color;
    @include clearfix;
    .content-box-title {
      float: left;
      font-size: 17px !important;
      @include clearfix;
    }

    > div{
      padding-right: 20px;
    }
    .content-box-title-right{
      float: right;
      padding-right:0px;
      .content-box-title-tip{
        float: right;
      }
      .content-box-title-toolbar{
        float: right;
      }
    }
  }
</style>


