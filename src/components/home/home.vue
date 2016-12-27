<template>
  <div>
    <biz-header></biz-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/layout/header/header.vue';

  export default {
    components: {
      'biz-header': header
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


