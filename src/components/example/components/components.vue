<template>
  <pl-layout>
    <pl-menu slot="left" :menus="subMenus"></pl-menu>
    <router-view slot="right"></router-view>
  </pl-layout>
</template>

<script>
  export default {
    computed: {
      subMenus () {
        return [
          {
            resName: '布局组件',
            children: [
              {resName: '页头(header)', stateName: 'example.components.header'}
            ]
          }
        ];
      }
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>


