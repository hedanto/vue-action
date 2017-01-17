<template>
    <div class="main-wrapper">
      <div class="main-left">
        <slot name="left"></slot>
      </div>
      <div class="main-content">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'Layout'
  };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/index";

  .main-wrapper {
    border: 1px solid $border-color;
    background-color: $main-background-color;
    padding: 0px;
    @include border-radius(0px);
    > .main-left {
      display: table-cell;
      border-right: 1px solid $border-color;
      min-width: $left-menu-bar-width;
    }
    > .main-content {
      display: table-cell;
      width: 3000px;
      vertical-align: top;
    }
  }
</style>


