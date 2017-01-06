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
            resName: '相关说明', stateName: 'example.components.illustration'
          },
          {
            resName: '图标', stateName: 'example.components.icons'
          },
          {
            resName: '布局组件',
            children: [
              {resName: '页头(header)', stateName: 'example.components.header'}
            ]
          },
          {
            resName: '其他组件',
            children: [
              {resName: '锚点(affix)', stateName: 'example.components.affix'},
              {resName: '返回顶部(backTop)', stateName: 'example.components.backTop'}
            ]
          },
          {
            resName: '文档组件',
            children: [
              {resName: '表格(apiTable)', stateName: 'example.components.apiTable'},
              {resName: '代码示例组件(codeBox)', stateName: 'example.components.codeBox'},
              {resName: '表单验证(form)', stateName: 'example.components.form'}
            ]
          }
        ];
      }
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>


