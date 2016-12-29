<template>
  <header class="header-wrapper">
    <div class="header-content">
      <div class="logo">
        <img src="./img/logo.png">
        <span>DEMO</span>
      </div>
      <div class="nav-bar" v-if="showInfo">
        <ul ref="headerNav">
          <li v-for="item in menus">
            <router-link active-class="active"  :to="{name: item.stateName, params: item.stateParams}">{{item.resName}}</router-link>
          </li>
        </ul>
      </div>
      <div class="account" v-if="showInfo">
        <router-link :to="{name: 'home.personal.personal-msg'}" class="msg">
          <el-badge :value="100" :max="99" class="item"/>
          <img src="./img/male.png">
        </router-link>
        <span class="name">
          <router-link :to="{name: 'home.personal.personal-info'}">{{userInfo.userName}}</router-link>
          &nbsp;|&nbsp;
          <a @click="logout" href="#">退出</a>
        </span>
      </div>
    </div>
  </header>
</template>
<script>
  import {MsgType} from '../../../common/js/constants';
  export default {
    props: {
      showInfo: {
        default: true
      }
    },
    data () {
      return {};
    },
    computed: {
      menus () {
        return this.$store.state.menus;
      },
      userInfo () {
        return this.$store.state.contextData.user;
      }
    },
    methods: {
      logout () {
        this.$confirm('确定要退出系统吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: MsgType.WARING
        }).then(() => {
          this.$api.logout();
        });
      }
    },
    mounted () {
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../../common/scss/index";

  .header-wrapper {
    z-index: 1;
    $img-size:44px;
    $img-margin:($header-height - $img-size - 10px)/2 0px;
    height: $header-height;
    padding: 5px 0px;
    background: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    box-shadow: 2px 2px 5px rgb(204, 204, 204);
    .header-content {
      @extend .container;
      height: $header-height - 10px;
      .logo {
        width: $left-menu-bar-width;
        height: 100%;
        @extend .pull-left;
        display: inline-block;
        line-height: 100%;
        text-align: center;
        > img {
          height: $img-size;
          width: $img-size;
          margin: $img-margin;
          float: left;
        }
        > span {
          display: inline-block;
          height: $img-size;
          line-height: $img-size;
          float: left;
          padding-left: 15px;
          font-size: 30px;
          margin: $img-margin;
        }
      }
      .nav-bar {
        height: 100%;
        @extend .pull-left;
        display: inline-block;
        > ul {
          margin: 0;
          height: $header-height - 10px;
          list-style: none;
          > li {
            float: left;
            display: inline-block;
            height: 100%;
            > a {
              text-decoration: none;
              height: 100%;
              line-height: $header-height - 10px;
              padding: 0px 15px;
              display: block;
              cursor: pointer;
              color: $font-color-light;
              @include transition;
              &:hover {
                color: $font-color;
              }
              &.active {
                color: $font-color;
                position: relative;
                &:before {
                  position: absolute;
                  width: 100%;
                  content: "";
                  height: 3px;
                  background: $primary-color;
                  left: 0px;
                  bottom: -5px;
                }
              }
            }
          }
        }

      }
      .account {
        height: 100%;
        @extend .pull-right;
        display: inline-block;
        position: relative;
        .msg {
          position: relative;
          float: left;
          > .item{
            top: 0px;
            left: $img-size - 15px;
            position: absolute;
          }
        }
        img {
          @include border-radius;
          float: left;
          height: $img-size;
          width: $img-size;
          margin: $img-margin;
        }
        > .name {
          display: inline-block;
          float: left;
          line-height: $header-height - 10px;
          padding-left: 10px;
        }
      }
    }
  }
</style>


