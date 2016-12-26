import * as types from './mutation-types';
import api from '../api';
import {MsgType} from '../common/js/constants';
import utils from '../common/js/utils';

// 登录
export const login = ({commit}, param) => {
  let data = {...param};
  // md5 加密
  data.password = utils.encryptor(data.password);
  return new Promise((resolve, reject) => {
    api.login(data).then(ret => {
      if (ret.type === MsgType.SUCCESS) {
        api.getContextData().then(ret2 => {
          commit(types.SET_LOGIN_STATE, true);
          commit(types.SET_CONTEXT_DATA, ret2);
          resolve(true);
        });
      } else {
        resolve(false);
      }
    });
  });
};

// 注销
export const logout = ({commit}) => {
  api.logout();
  commit(types.SET_LOGIN_STATE, false);
};

