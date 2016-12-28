import * as types from './mutation-types';

export default {
  [types.SET_LOGIN_STATE] (state, value) {
    state.isLogin = value;
  },
  [types.SET_CONTEXT_DATA] (state, value) {
    state.constextData = value;
  },
  [types.SET_MENUS] (state, value) {
    state.menus = value;
  },
  [types.SET_CUR_MENU] (state, value) {
    state.curMenu = value;
  },
  [types.SET_MENUS_MAP] (state, value) {
    state.menusMap = value;
  }
};
