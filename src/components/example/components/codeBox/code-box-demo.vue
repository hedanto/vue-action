<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <p>用于展现组件代码</p>
    </pl-content-box-block>
    <pl-content-box-title>组件演示</pl-content-box-title>
    <pl-content-box-block>
      <pl-code-box :title = "title" :describe="describe" :html="html" :js="js">
        <pl-code-box title="标题" describe="描述" :html="examHTML" :js="examJS">
          <button>Default</button>
        </pl-code-box>
      </pl-code-box>
    </pl-content-box-block>
    <pl-content-box-title>codeBox组件的API</pl-content-box-title>
    <pl-content-box-block>
      <pl-api-table :head="tableHead" :content="tableContent"></pl-api-table>
    </pl-content-box-block>
  </pl-content-box>
</template>
<script>
  let html =
  `
  <pl-code-box title="标题" describe="描述" :html="examHTML" :js="examJS">
    <button>Default</button>
  </pl-code-box>
  `;
  let js =
  `
  let examHTML = '<button>Default</button>';
  let examJS = 'export default{ };';
  export default{
    data () {
      return {
        examHTML,
        examJS
      };
    }
  };
  `;
  let examHTML =
  `
  <button>Default</button>
  `;
  let examJS =
  `
  export default{
  };
  `;
  let tableHead = ['参数', '说明', '类型', '默认值'];
  let tableContent = [['title', '标题', 'string', '无'], ['describe', '对该组件的描述', 'string', '无'],
    ['html', '组件的html示例代码', 'string', '无'], ['js', '组件的js示例代码', 'string', '无'], ['css', '组件的css示例代码', 'string', '无']];

  export default{
    data () {
      return {
        html,
        js,
        title: 'codeBox演示',
        describe: 'codeBox的使用代码',
        examHTML,
        examJS,
        tableHead,
        tableContent
      };
    }
  };
</script>
