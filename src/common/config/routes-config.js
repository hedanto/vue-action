const routes = [
  {
    cnName: '主页',
    path: '/home',
    name: 'home',
    component (resolve) {
      require(['components/home/home.vue'], resolve);
    }
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
