import Vue from 'vue';
import VueResource from 'vue-resource';
import {MsgType} from '../common/js/constants';
import router from '../router';
import Store from '../store';
import {Notification} from 'element-ui';

let config = require('../../config');

if (process.env.NODE_ENV === 'development' && config.dev.mockData) {
  require('./mock_data');
}

let apiRootMap = {};

if (process.env.NODE_ENV === 'production' && config.build.env.apiRootMap) {
  apiRootMap = config.build.env.apiRootMap;
} else {
  if (config.dev.proxyTable) {
    let proxyTable = config.dev.proxyTable;
    Object.keys(proxyTable).forEach(function (context) {
      apiRootMap[context] = context +
        (proxyTable[context]['projectName'] ? '/' + proxyTable[context]['projectName'] : '');
    });
  }
}

const genPath = (path) => {
  let rootPath = '/' + path.split('/')[1];
  if (apiRootMap[rootPath]) {
    return path.replace(rootPath, apiRootMap[rootPath]);
  } else {
    return '';
  }
};

Vue.use(VueResource);

// HTTP相关
Vue.http.options.emulateJSON = true;
Vue.http.options.credentials = true;

// 拦截器
Vue.http.interceptors.push((request, next) => {
  // 生成正在的url
  request.url = genPath(request.url);
  request.credentials = true;

  // 这里对请求体进行处理
  next((response) => {
    // 这里可以对响应的结果进行处理
    let ret = response.body;

    // 如果是模拟数据，把字符串转换成对象
    if (process.env.NODE_ENV === 'development' && config.dev.mockData && typeof ret === 'string') {
      ret = JSON.parse(ret);
      response.body = ret;
    }

    if (ret.type && ret.type === MsgType.TOLOGIN) {
      // 注销登录状态
      Store.dispatch('logout');
      router.push({name: 'login'});
      return {...response.body, ok: false};
    } else if (ret.show === true) {
      Notification({
        title: ret.title,
        message: ret.msg,
        type: ret.type
      });
    }
  });
});

