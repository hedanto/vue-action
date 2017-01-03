import utils from '../common/js/sysUtils';

// 获取登录状态
export const getLoginState = state => {
  return state.isLogin;
};

// 获取第一个要触发的菜单
export const getFirstLinkMenus = state => {
  return utils.getFirstLinkMenusFun(state.menus);
};

