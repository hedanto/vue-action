<template>
  <div id="app">
    <nav-header></nav-header>
    <nav-menu ></nav-menu>
  </div>
</template>

<script>
  import header from 'components/header/header.vue';
  import menu from 'components/menu/menu.vue';

  export default {
    name: 'app',
    components: {
      'nav-header': header,
      'nav-menu': menu
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss">
  @import "common/scss/index";
</style>
