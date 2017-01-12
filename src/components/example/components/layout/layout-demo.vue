<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <p>用于每个模块页面的布局</p>
    </pl-content-box-block>
    <pl-content-box-title>
      组件演示
    </pl-content-box-title>
    <pl-content-box-block>
      <pl-code-box title="基本布局组件"  :html="html" :describe="describe">
        <div style="border: 1px solid #e9e9e9;">
          <pl-content-box>
            <pl-page-nav>
              <div slot="nav-tip">
                <i class="text-primary anticon icon-infocirlceo"></i>&nbsp;<small class="text-muted">这里可以放tip</small>
              </div>
              <div slot="nav-toolbar">
                <el-button  icon="edit"></el-button>
              </div>
            </pl-page-nav>
            <pl-content-box-toolbar>
              <el-button>按钮</el-button><el-button>按钮</el-button>&nbsp;这里是工具条
            </pl-content-box-toolbar>
            <pl-content-box-block>
              <div style="height: 80px;">
                <p>这里是内容块</p>
              </div>
            </pl-content-box-block>
            <pl-content-box-title>
              标题1
              <div slot="tip">
                <i class="text-primary anticon icon-infocirlceo"></i>&nbsp;<small class="text-muted">这里可以放tip</small>
              </div>
              <div slot="toolbar">
                <el-button  icon="edit"></el-button>
              </div>
            </pl-content-box-title>
            <pl-content-box-block>
              <pl-content-box-card>
                <div style="height: 80px;">
                  <p>这里是内容卡片</p>
                </div>
              </pl-content-box-card>
            </pl-content-box-block>
            <pl-content-box-title>
              标题2
            </pl-content-box-title>
            <pl-content-box-block>
              <div style="height: 80px;">
                <p>这里是内容块</p>
              </div>
            </pl-content-box-block>
            <pl-content-box-toolbar class="text-center" :border="false">
              <el-button type="primary">按钮</el-button><el-button>按钮</el-button>
            </pl-content-box-toolbar>
          </pl-content-box>
        </div>
      </pl-code-box>
    </pl-content-box-block>
    <pl-content-box-title>
      布局组件api
    </pl-content-box-title>
    <pl-content-box-block>
      <h4>pl-page-nav 主要用页面导航，会根据配置出现二级导航</h4>
      <pl-api-table :head="tableHeadPageNav" :content="tableContentPageNav"></pl-api-table>
    </pl-content-box-block>
    <pl-content-box-block>
      <h4>pl-content-box-title 主要用于内容块标题</a>。</h4>
      <pl-api-table :head="tableHeadTitle" :content="tableContentTitle"></pl-api-table>
    </pl-content-box-block>
    <pl-content-box-block>
      <h4>pl-content-box-toolbar 主要用于放按钮、输入框等等</a>。</h4>
      <pl-api-table :head="tableHeadToolbar" :content="tableContentToolbar"></pl-api-table>
    </pl-content-box-block>
  </pl-content-box>
</template>

<script>
  let html =
    `
  <pl-content-box>
    <pl-page-nav>
      <div slot="nav-tip">
        <i class="text-primary anticon icon-infocirlceo"></i>&nbsp;<small class="text-muted">这里可以放tip</small>
      </div>
      <div slot="nav-toolbar">
        <el-button  icon="edit"></el-button>
      </div>
    </pl-page-nav>
    <pl-content-box-toolbar>
        <el-button>按钮</el-button><el-button>按钮</el-button>&nbsp;这里是工具条
    </pl-content-box-toolbar>
    <pl-content-box-block>
      <div style="height: 80px;">
        <p>这里是内容块</p>
      </div>
    </pl-content-box-block>
    <pl-content-box-title>
      标题1
      <div slot="tip">
        <i class="text-primary anticon icon-infocirlceo"></i>&nbsp;<small class="text-muted">这里可以放tip</small>
      </div>
      <div slot="toolbar">
        <el-button  icon="edit"></el-button>
      </div>
    </pl-content-box-title>
    <pl-content-box-block>
       <pl-content-box-card>
                <div style="height: 80px;">
                  <p>这里是内容卡片</p>
                </div>
       </pl-content-box-card>
    </pl-content-box-block>
    <pl-content-box-title>
      标题2
    </pl-content-box-title>
    <pl-content-box-block>
      <div style="height: 80px;">
        <p>这里是内容块</p>
      </div>
    </pl-content-box-block>
    <pl-content-box-toolbar class="text-center" :border="false">
       <el-button type="primary">按钮</el-button><el-button>按钮</el-button>
    </pl-content-box-toolbar>
  </pl-content-box>
  `;
  let css = ``;
  let describe =
    `
  简单布局演示
  `;
  let tableHeadPageNav = ['参数', '说明', '类型', '默认值'];
  let tableContentPageNav = [
    ['showPrevious', '是否显示上个路由', 'Boolean', 'false'],
    ['previousPath', '指定上一级导航，showPrevious：true的时候才有效,如果没指定上级路由，就取导航过到本路由的路由，如果没有则为空', 'String', ''],
    ['navTitle', '指定显示的导航标题，不指定去路由的值', 'String', ''],
    ['slot:nav-tip', '插槽，用来显示提示信息', '', ''],
    ['slot:nav-toolbar', '插槽，用来放工具栏', '', '']
  ];
  let tableHeadTitle = ['参数', '说明', '类型', '默认值'];
  let tableContentTitle = [
    ['slot:tip', '插槽，用来显示提示信息', '', ''],
    ['slot:toolbar', '插槽，用来放工具栏', '', '']
  ];
  let tableHeadToolbar = ['参数', '说明', '类型', '默认值'];
  let tableContentToolbar = [
    ['border', '是否显示toolbar边框,一般工具条放到底部的时候设置为false', 'Boolean', 'true']
  ];

  export default {
    data () {
      return {
        describe,
        html,
        css,
        tableHeadPageNav,
        tableContentPageNav,
        tableHeadTitle,
        tableContentTitle,
        tableHeadToolbar,
        tableContentToolbar
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


