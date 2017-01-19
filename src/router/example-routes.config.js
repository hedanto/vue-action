/**
 * 相关配置请查阅vue-router的文档，https://router.vuejs.org/zh-cn/
 * 注意：1、要求一定要配置name,命名规则按照层次用'.'分开，比如路由1的name：'home',它的子节点的name: 'home.xxx'
 *      2、desc 不是vue-router的配置，是自动定义的，主要用来描述当前路由
 * @type {[*]}
 */
const routes = [
  {
    desc: '开发参考',
    path: '/example',
    name: 'example',
    component (resolve) {
      require(['components/example/example.vue'], resolve);
    },
    redirect: { name: 'example.guide' },
    children: [
      {
        desc: '开发指南',
        path: 'guide',
        name: 'example.guide',
        component (resolve) {
          require(['components/example/guide/guide.vue'], resolve);
        }
      },
      {
        desc: '组件',
        path: 'components',
        name: 'example.components',
        component (resolve) {
          require(['components/example/components/components.vue'], resolve);
        },
        redirect: { name: 'example.components.illustration' },
        children: [
          {
            desc: '相关说明',
            name: 'example.components.illustration',
            path: 'illustration',
            component (resolve) {
              require(['components/example/components/illustration/illustration.vue'], resolve);
            }
          },
          {
            desc: '图标',
            name: 'example.components.icons',
            path: 'icons',
            component (resolve) {
              require(['components/example/components/icons/icons.vue'], resolve);
            }
          },
          {
            desc: '页头(header)',
            name: 'example.components.header',
            path: 'header',
            component (resolve) {
              require(['components/example/components/header/header-demo.vue'], resolve);
            }
          },
          {
            desc: '表格(apiTable)',
            name: 'example.components.apiTable',
            path: 'apiTable',
            component (resolve) {
              require(['components/example/components/apiTable/apiTable-demo.vue'], resolve);
            }
          },
          {
            desc: '锚点(affix)',
            name: 'example.components.affix',
            path: 'affix',
            component (resolve) {
              require(['components/example/components/affix/affix-demo.vue'], resolve);
            }
          },
          {
            desc: '代码示例组件(codeBox)',
            name: 'example.components.codeBox',
            path: 'codeBox',
            component (resolve) {
              require(['components/example/components/codeBox/code-box-demo.vue'], resolve);
            }
          },
          {
            desc: '返回顶部(backTop)',
            name: 'example.components.backTop',
            path: 'backTop',
            component (resolve) {
              require(['components/example/components/backTop/back-top-demo.vue'], resolve);
            }
          },
          {
            desc: 'form表单验证(formValidate)',
            name: 'example.components.form',
            path: 'form',
            component (resolve) {
              require(['components/example/components/form/form-validate-element.vue'], resolve);
            }
          },
          {
            desc: '分页表格(pageTable)',
            name: 'example.components.pageTable',
            path: 'page-table',
            component (resolve) {
              require(['components/example/components/pageTable/pageTable-demo.vue'], resolve);
            }
          },
          {
            desc: '综合实列(integrate)',
            name: 'example.components.integrate',
            path: 'integrate',
            component (resolve) {
              require(['components/example/components/integrate/integrate-demo.vue'], resolve);
            }
          },
          {
            desc: '编辑实列',
            name: 'example.components.integrate-edit',
            path: 'integrate-edit',
            component (resolve) {
              require(['components/example/components/integrate/integrate-edit-demo.vue'], resolve);
            }
          },
          {
            desc: '日期组件datePicker',
            name: 'example.components.datePicker',
            path: 'datePicker',
            component (resolve) {
              require(['components/example/components/datePicker/date-picker-demo.vue'], resolve);
            }
          },
          {
            desc: '基本布局组件',
            name: 'example.components.layout',
            path: 'layout',
            component (resolve) {
              require(['components/example/components/layout/layout-demo.vue'], resolve);
            }
          },
          {
            desc: '消息提示',
            name: 'example.components.empty-tip',
            path: 'empty-tip',
            component (resolve) {
              require(['components/example/components/emptyTip/empty-tip.vue'], resolve);
            }
          }
        ]
      }
    ]
  }
];

module.exports = routes;
