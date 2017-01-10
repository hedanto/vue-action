<template>
  <div>
    <pl-header :menus="menus" header-title="Demo" :account="account" @logout="logout" @iconclick="iconClick" @nameclick="nameClick"></pl-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import {MsgType} from '../../common/js/constants';
  export default {
    computed: {
      menus () {
        return this.$store.state.menus;
      },
      account () {
        return {
          name: this.$store.state.contextData.user.userName,
          msgCount: 100
        };
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
      },
      nameClick () {
        this.$router.push({name: 'home.personal.personal-info'});
      },
      iconClick () {
        this.$router.push({name: 'home.personal.personal-msg'});
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  body{
    background: url(../../common/img/bg.jpg) repeat;
  }
</style>


