import * as types from './mutation-types';

export default {
  [types.SET_LOGIN_STATE] (state, value) {
    state.isLogin = value;
  },
  [types.SET_CONTEXT_DATA] (state, value) {
    state.constextData = value;
  }
};
