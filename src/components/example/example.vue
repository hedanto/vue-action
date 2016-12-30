<template>
  <div>
    <pl-header :menus="menus" header-title="DEMO"></pl-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import menuData from './menu-data';
  export default {
    computed: {
      menus () {
        return menuData;
      }
    },
    methods: {
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


