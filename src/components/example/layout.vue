<template>
  <section>
    <div class="main-wrapper">
      <div class="main-left">
        <pl-menu :menus="subMenus"></pl-menu>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      subMenus () {
        return this.$store.state.curMenu.children;
      }
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/index";

  .main-wrapper {
    @extend .container;
    border: 1px solid $border-color;
    background-color: $main-background-color;
    margin-top: 90px;
    margin-bottom: 30px;
    min-height: 700px;
    padding: 0px;
    @include border-radius(0px);
    > .main-left {
      display: table-cell;
      border-right: 1px solid $border-color;
      min-width: $left-menu-bar-width;
      height: 700px;
    }
    > .main-content {
      display: table-cell;
      width: 3000px;
      vertical-align: top;
    }
  }
</style>


