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
        return [
          {
            resName: '相关说明', stateName: 'example.components.illustration'
          },
          {
            resName: '图标', stateName: 'example.components.icons'
          },
          {
            resName: '综合实列', stateName: 'example.components.integrate'
          },
          {
            resName: '布局组件',
            children: [
              {resName: '页头(header)', stateName: 'example.components.header'},
              {resName: '基本布局组件', stateName: 'example.components.layout'}
            ]
          },
          {
            resName: '数据组件',
            children: [
              {resName: '分页表格(pageTable)', stateName: 'example.components.pageTable'},
              {resName: '日期组件(datePicker)', stateName: 'example.components.datePicker'}
            ]
          },
          {
            resName: '其他组件',
            children: [
              {resName: '锚点(affix)', stateName: 'example.components.affix'},
              {resName: '返回顶部(backTop)', stateName: 'example.components.backTop'},
              {resName: '消息提示(empty-tip)', stateName: 'example.components.empty-tip'}
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


