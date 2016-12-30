<template>
  <section class="login-wrapper">
    <pl-header  header-title="DEMO"></pl-header>
    <div class="login-context" ref="loginContext">
      <div class="login-container">
        <div class="login-panel">
          <div class="login-title">
            登录
          </div>
          <el-form ref="form" :model="form" class="login-form">
            <el-form-item>
              <el-input v-model="form.userName" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="form.rememberMe" checked style="margin:0px 0px 35px 0px;">记住密码</el-checkbox>
            <el-form-item class="login-btn-wrapper">
              <el-button type="primary" @click="send">登录</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          userName: '',
          password: '',
          rememberMe: true
        }
      };
    },
    methods: {
      setLoginHeight () {
        let h = document.documentElement.clientHeight;
        let loginContext = this.$refs.loginContext;
        if (loginContext) {
          loginContext.style.height = (h - loginContext.offsetTop) + 'px';
        }
      },
      send () {
        this.$store.dispatch('login', this.form)
          .then(ret => {
            if (ret) {
              let firstLinkMenus = this.$store.getters.getFirstLinkMenus;
              this.$router.push({name: firstLinkMenus.stateName, params: firstLinkMenus.stateParams});
              // this.$router.push('home');
            }
          }
        );
      }
    },
    mounted () {
      this.setLoginHeight();
      let _this = this;
      window.onresize = function () {
        _this.setLoginHeight();
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/index";
  .login-wrapper {
    background: #fff;
    overflow: hidden;
    .login-context {
      min-height: 480px;
      margin-top: 60px;
      background: url("img/login-bg.jpg") no-repeat center 0;
      .login-container {
        @extend .container;
        background: #f5f5f5;
        position: relative;
        .login-panel {
          position: absolute;
          top: 100px;
          right: 100px;
          box-shadow: 2px 2px 5px rgb(204, 204, 204);
          height: 300px;
          width: 350px;
          background: #fff;
          .login-title {
            height: 50px;
            line-height: 50px;
            padding-left: 30px;
            font-size: 20px;
            border-bottom: 1px solid $border-color;
          }
          .login-form {
            padding: 30px 30px;
            .login-btn-wrapper{
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>


