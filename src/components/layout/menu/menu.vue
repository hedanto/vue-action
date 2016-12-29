<template>
  <div class="menu-wrapper">
    <ul>
      <li class="menu-item" v-for="item in subMenus" :class="{'item-padding':item.children && item.children.length > 0}">
        <a v-if = '!item.stateName' class="disabled">{{item.resName}}</a>
        <router-link  v-if = 'item.stateName' active-class="active"  :to="{name: item.stateName, params: item.stateParams}">
          {{item.resName}}
        </router-link>
        <ul class="sub-menu-item" v-for="subItem in item.children ">
          <li>
            <a v-if = '!subItem.stateName' class="disabled"> {{subItem.resName}}</a>
            <router-link  v-if = 'subItem.stateName' active-class="active"  :to="{name: subItem.stateName, params: subItem.stateParams}">
              {{subItem.resName}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    computed: {
      subMenus () {
        return this.$store.state.curMenu.children;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../../common/scss/index";

  .menu-wrapper {
    $menu-padding-left: 30px;
    > ul > li.menu-item {
      &.item-padding {
        padding: 6px 0px;
      }
      border-top: 1px solid $border-color;
      &:first-child {
        margin-top: 15px;
        border-top: 0px solid $border-color;
      }
      .sub-menu-item {
        a {
          padding-left: $menu-padding-left * 2 - 3px;
          cursor: pointer;
          @include transition;
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
      padding-left: $menu-padding-left - 3px;
      border-left: 3px solid #fff;
      &.active{
        background: $dark-white;
        border-left: 3px solid $primary-color;
      }
      &.disabled{
        color: $font-color-light !important;
      }
      &:hover {
        background: $dark-white;
        border-left-color: $dark-white;
      }
    }

  }
</style>


