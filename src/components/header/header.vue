<template>
  <header class="header-wapper">
    <div class="header-content">
      <div class="logo">
        LOGO
      </div>
      <div class="nav-bar">

      </div>
      <div class="account">

      </div>
    </div>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        msg: '这是头'
      };
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/index";

  .header-wapper {
    height: $header-height;
    padding: 5px 0px;
    background: #f5f5f5;
    .header-content {
      @extend .container;
      height: $header-height - 10px;
      .logo {
        width: $left-menu-bar-width;
        height: 100%;
        @extend  .pull-left;
        display: inline-block;
        line-height: 50px;
        text-align: center;
        font-size: 30px;
      }
      .nav-bar{
        height: 100%;
        @extend  .pull-left;
        display: inline-block;
      }
      .account{
        height: 100%;
        @extend  .pull-right;
        display: inline-block;
      }
    }
  }
</style>


