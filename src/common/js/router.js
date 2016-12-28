import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../config/routes-config';
import store from '../../store';
import utils from './utils';

Vue.use(VueRouter);

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// 如果是进入home路由，则判断是否登录，如果没有登录跳转登录页面
router.beforeEach((to, from, next) => {
  // 判断是否存在需要授权的路由
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isLogin) {
      next('/login');
    }
  }

  // 自动导航到路由最底层
  let menusMap = store.state.menusMap;
  let firstLinkMenus = null;
  if (menusMap[to.name]) { // 如果该路由匹配到菜单，则重菜单子节点选择要触发的路由
    firstLinkMenus = utils.getFirstLinkMenusFun(menusMap[to.name].children);
  } else { // 如果没匹配到菜单，则从最顶级选择菜单匹配
    firstLinkMenus = utils.getFirstLinkMenusFun(store.state.menus);
  }

  if (firstLinkMenus) {
    next({name: firstLinkMenus.stateName, params: firstLinkMenus.stateParams});
  } else {
    next();
  }
});

export default router;
