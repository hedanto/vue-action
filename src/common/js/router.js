import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../config/routes-config';
import store from '../../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// 如果是进入home路由，则判断是否登录，如果没有登录跳转登录页面
router.beforeEach((to, from, next) => {
  console.info(to);
  // 判断是否存在需要授权的路由
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isLogin) {
      next('/login');
    }
  }

  /*
  if (to.matched && to.matched.length === 1 && to.matched[0].name === 'home') {
    let checkedMenus = store.state.menus;
    if (checkedMenus.length > 0) {
      next(checkedMenus[0].resValue);
    }
  }
  */

  next();
});

export default router;
