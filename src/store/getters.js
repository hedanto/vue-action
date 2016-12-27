// 获取登录状态
export const getLoginState = state => {
  return state.isLogin;
};

// 获取第一个要触发的菜单
export const getFirstLinkMenus = state => {
  return getFirstLinkMenusFun(state.menus);
};

function getFirstLinkMenusFun (menus) {
  let firstLinkMenu = null;
  if (!(menus && menus.length > 0)) {
    return firstLinkMenu;
  }
  for (let i = 0, len = menus.length; i < len; i++) {
    let item = menus[i];
    if (item.children && item.children.length > 0) {
      return getFirstLinkMenusFun(item.children);
    } else if (item.resValue) {
      return item;
    }
  }
}
