const routes = [
  {
    cnName: '主页',
    path: '/home',
    name: 'home',
    component (resolve) {
      require(['components/home/home.vue'], resolve);
    },
    meta: { requiresAuth: true },
    children: [
      {
        cnName: '业务办理',
        name: 'home.biz',
        path: 'biz',
        component (resolve) {
          require(['components/layout/layout.vue'], resolve);
        },
        children: [
          {
            cnName: '档案信息录入',
            name: 'home.biz.archives-input',
            path: 'archives-input',
            component (resolve) {
              require(['components/business/processing/archives-input.vue'], resolve);
            }
          },
          {
            cnName: '档案信息维护',
            name: 'home.biz.archives-mgt',
            path: 'archives-mgt',
            component (resolve) {
              require(['components/business/processing/archives-mgt.vue'], resolve);
            }
          }
        ]
      },
      {
        cnName: '个人中心',
        path: 'user-certer',
        component (resolve) {
          require(['components/layout/layout.vue'], resolve);
        }
      }
    ]
  },
  {
    cnName: '登录',
    path: '/login',
    name: 'login',
    component (resolve) {
      require(['components/login/login.vue'], resolve);
    }
  }
];

export default routes;
