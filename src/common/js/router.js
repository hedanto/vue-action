import Vue from 'vue';
import VueRouter from 'vue-router';
import routes, {routerMap} from '../config/routes-config';
import store from '../../store';
import utils from './utils';
import * as types from '../../store/mutation-types';

Vue.use(VueRouter);

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

store.commit(types.SET_ROUTER_MAP, routerMap);

// 如果是进入home路由，则判断是否登录，如果没有登录跳转登录页面
router.beforeEach((to, from, next) => {
  // 判断是否存在需要授权的路由
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isLogin) {
      next({name: 'login'});
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
    store.commit(types.SET_CUR_MENU, getTopMenu(firstLinkMenus.stateName));
    next({name: firstLinkMenus.stateName, params: firstLinkMenus.stateParams});
  } else {
    store.commit(types.SET_CUR_MENU, getTopMenu(to.name));
    next();
  }

  store.commit(types.SET_PREVIOUS_ROUTER, from);
});

// 获取当前菜单
function getTopMenu (value) {
  let menu = {};
  if (value) {
    let indexs = value.split('.');
    let indexStr = '';
    for (let i = 0, len = indexs.length; i < len; i++) {
      if (indexStr === '') {
        indexStr = indexs[i];
      } else {
        indexStr += '.' + indexs[i];
      }
      if (store.state.menusMap[indexStr]) {
        menu = store.state.menusMap[indexStr];
        break;
      }
    }
  }
  return menu;
}

export default router;
