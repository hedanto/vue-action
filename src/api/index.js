import { http } from 'vue';
import './api-cofing';
import { HttpPrefix } from '../common/js/constants';

export default {
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
  }
};

