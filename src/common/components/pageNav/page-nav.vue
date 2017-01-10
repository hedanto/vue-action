<template>
  <div class="page-nav-wrapper">
    <div class="page-nav-title">
      <el-breadcrumb separator="/" v-if="!navTitle">
        <el-breadcrumb-item v-if="showPrevious && previousNav.desc" :to="{ name: previousNav.name, params: previousNav.params}">
         <i class="anticon icon-leftcircleo"></i> {{previousNav.desc}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{curNavName}}</el-breadcrumb-item>
      </el-breadcrumb>
      <span>{{navTitle}}</span>
    </div>
    <div class="page-nav-right">
      <div class="page-nav-toolbar">
        <slot name="nav-toolbar"></slot>
      </div>
      <div class="page-nav-tip">
        <slot name="nav-tip"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../config';
  import utils from '../../js/sysUtils';
  export default {
    name: config.prefix + 'PageNav',
    props: {
      showPrevious: { // 是否显示上个路由
        default: false,
        type: Boolean
      },
      previousPath: { // 指定上一级导航，showPrevious：true的时候才有效
        default: ''
      },
      navTitle: { // 手动配置显示的头
        default: '',
        type: String
      }
    },
    data () {
      return {};
    },
    computed: {
      previousNav () {
        let routerMap = this.$store.state.routerMap;
        let pnav = {
          desc: '',
          name: '',
          params: {}
        };
        if (this.showPrevious) {
          if (this.previousPath && routerMap[this.previousPath]) {
            let state = utils.getState(this.previousPath);
            if (routerMap[state.name]) {
              let route = routerMap[state.name];
              pnav = {
                desc: route.desc,
                name: state.name,
                params: {}
              };
            }
          } else if (this.$store.state.previousRouter && this.$store.state.previousRouter.name) {
            let route = routerMap[this.$store.state.previousRouter.name];
            pnav = {
              desc: route.desc,
              name: route.name,
              params: this.$store.state.previousRouter.params
            };
          }
        }
        return pnav;
      },
      curNavName () {
        let routerMap = this.$store.state.routerMap;
        return routerMap[this.$router.currentRoute.name].desc;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/variables";
  @import "../../scss/mixin";

  .page-nav-wrapper {
    padding: $context-header-y-padding $context-header-x-padding;
    line-height: 36px;
    border-bottom: 1px solid $border-color;
    height: 61px;
    @include clearfix;
    .page-nav-title {
      float: left;
      font-size: 17px !important;
      @include clearfix;
      .el-breadcrumb {
        font-size: 17px !important;
        line-height: 36px;
      }
    }

    > div{
      padding-right: 20px;
    }
    .page-nav-right{
      float: right;
      padding-right:0px;
      .page-nav-tip{
        float: right;
      }
      .page-nav-toolbar{
        padding-left: 10px;
        float: right;
      }
    }
  }
</style>


