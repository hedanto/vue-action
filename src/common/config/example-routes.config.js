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
        redirect: { name: 'example.components.header' },
        children: [
          {
            desc: '页头(header)',
            name: 'example.components.header',
            path: 'header',
            component (resolve) {
              require(['components/example/components/header/header-demo.vue'], resolve);
            }
          }
        ]
      }
    ]
  }
];

module.exports = routes;
