<template>
  <div>
    <pl-header :menus="menus" header-title="Demo"></pl-header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    computed: {
      menus () {
        return [
          {resName: '开发指南', stateName: 'example.guide'},
          {resName: '组件', stateName: 'example.components'}
        ];
      }
    },
    methods: {
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


