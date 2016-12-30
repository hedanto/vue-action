<template>
  <div id="app">
    <top-progress ref="topProgress"></top-progress>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
  // https://github.com/dalphyx/vue-top-progress
  import TopProgress from 'vue-top-progress';
  export default {
    name: 'app',
    components: {
      'top-progress': TopProgress
    },
    mounted () {
      let vm = this;
      this.$router.beforeEach((to, from, next) => {
        vm.$refs.topProgress.start();
        next();
      });
      this.$router.afterEach(() => {
        setTimeout(() => {
          vm.$refs.topProgress.done();
        }, 250);
      });

      this.$http.interceptors.push((request, next) => {
        vm.$refs.topProgress.start();
        // 这里对请求体进行处理
        next((response) => {
          setTimeout(() => {
            vm.$refs.topProgress.done();
          }, 250);
        });
      });
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss">
  @import "common/scss/index";
  body{
    background: url(common/img/bg.jpg) repeat;
  }
</style>
