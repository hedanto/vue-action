// 获取登录状态
export const getLoginState = state => {
  return state.isLogin;
};

// 获取一级菜单
export const getFirstMenus = state => {
  let menus = state.constextData.user.menuTree;
  let firstMenus = menus.filter((item) => {
    if (item.checked) {
      return item;
    }
  });
  return firstMenus;
};
