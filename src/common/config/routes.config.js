/**
 * 相关配置请查阅vue-router的文档，https://router.vuejs.org/zh-cn/
 * 注意：1、要求一定要配置name,命名规则按照层次用'.'分开，比如路由1的name：'home',它的子节点的name: 'home.xxx'
 *      2、desc 不是vue-router的配置，是自动定义的，主要用来描述当前路由
 * @type {[*]}
 */
let routes = [
  {
    desc: '',
    name: '',
    path: '/',
    redirect: '/home'
  },
  {
    desc: '主页',
    path: '/home',
    name: 'home',
    component (resolve) {
      require(['components/home/home.vue'], resolve);
    },
    meta: { requiresAuth: true },
    children: [
      {
        desc: '业务办理',
        name: 'home.biz',
        path: 'biz',
        component (resolve) {
          require(['components/home/layout.vue'], resolve);
        },
        children: [
          {
            desc: '档案信息录入',
            name: 'home.biz.archives-input',
            path: 'archives-input',
            component (resolve) {
              require(['components/business/processing/archives-input.vue'], resolve);
            }
          },
          {
            desc: '档案信息维护',
            name: 'home.biz.archives-mgt',
            path: 'archives-mgt',
            component (resolve) {
              require(['components/business/processing/archives-mgt.vue'], resolve);
            }
          }
        ]
      },
      {
        desc: '个人中心',
        name: 'home.personal',
        path: 'personal',
        component (resolve) {
          require(['components/home/layout.vue'], resolve);
        },
        children: [
          {
            desc: '个人信息',
            name: 'home.personal.personal-info',
            path: 'personal-info',
            component (resolve) {
              require(['components/business/personal/personal-info.vue'], resolve);
            }
          },
          {
            desc: '个人消息',
            name: 'home.personal.personal-msg',
            path: 'personal-msg',
            component (resolve) {
              require(['components/business/personal/personal-info.vue'], resolve);
            }
          }
        ]
      }
    ]
  },
  {
    desc: '登录',
    path: '/login',
    name: 'login',
    component (resolve) {
      require(['components/login/login.vue'], resolve);
    }
  }
];

// 其他默认配置路由，需要放置到底部
var others = [
  {
    path: '*',
    component: require('components/not-found.vue')
  }
];

if (process.env.NODE_ENV === 'development') {
  let exampleRoutes = require('./example-routes.config.js');
  routes = [...routes, ...exampleRoutes];
}

routes = [...routes, ...others];

function getRouterMap (routes) {
  let map = {};
  routes.map(item => {
    map[item.name] = item;
    if (item.children && item.children.length) {
      map = {...map, ...getRouterMap(item.children)};
    }
  });
  return map;
}

export const routerMap = (() => {
  return getRouterMap(routes);
})();

export default routes;
