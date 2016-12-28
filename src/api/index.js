import { http } from 'vue';
import './api-cofing';
import _install from './install';
import { HttpPrefix } from '../common/js/constants';
import modules from './modules';

export const api = {
  login (data) { // 登录
    let url = HttpPrefix.API + '/auth/login';
    return http.post(url, data).then(resp => {
      return resp.body;
    });
  },
  logout () { // 注销
    let url = HttpPrefix.API + '/auth/logout';
    return http.post(url).then(resp => {
      return resp.body;
    });
  },
  getContextData () { // 获取上下文信息
    let url = HttpPrefix.API + '/common/context-data/get-context-data';
    return http.post(url).then(resp => {
      return resp.body;
    });
  },
  ...modules
};

const install = (Vue) => {
  if (install.installed) {
    return;
  }
  _install(Vue, api);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default {
  api,
  install
};
