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
  if (to.name === 'home') {
    if (!store.state.isLogin) {
      next('/login');
    }
  }
  next();
});

export default router;
