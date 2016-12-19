<template>
  <div class="menu-wrapper">
    <ul>
      <li class="menu-item">
        <a>菜单1</a>
        <ul class="sub-menu-item">
          <li><a>子菜单1</a></li>
          <li><a>子菜单2</a></li>
          <li><a>子菜单3</a></li>
        </ul>
      </li>
      <li class="menu-item">
        <a>菜单1</a>
        <ul class="sub-menu-item">
          <li><a class="active">子菜单1</a></li>
          <li><a>子菜单2</a></li>
          <li><a>子菜单3</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../../common/scss/index";

  .menu-wrapper {
    $menu-padding-left: 30px;
    > ul > li.menu-item {
      padding: 6px 0px;
      border-top: 1px solid $border-color;
      > a {
        color: $font-color-light !important;
      }
      &:first-child {
        margin-top: 15px;
        border-top: 0px solid $border-color;
      }
      .sub-menu-item {
        a {
          padding-left: $menu-padding-left * 2;
          cursor: pointer;
          @include transition;
          &:hover {
            background: $dark-white;
          }
          &.active{
            background: $dark-white;
            border-left: 3px solid $primary-color;
            padding-left: 57px;
          }
        }
      }
    }
    a {
      height: 40px;
      line-height: 40px;
      position: relative;
      width: auto;
      @include text-ellipsis;
      display: block;
      text-decoration: none;
      padding-left: $menu-padding-left;
    }

  }
</style>


