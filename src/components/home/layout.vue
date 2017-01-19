<template>
  <pl-layout class="layout-contianer">
    <pl-menu slot="left" :menus="subMenus"></pl-menu>
    <router-view slot="right"></router-view>
  </pl-layout>
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
</style>


