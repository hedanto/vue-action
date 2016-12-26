import Vue from 'vue';
import VueResource from 'vue-resource';
import {MsgType} from '../common/js/constants';
import router from 'common/js/router';
import {Notification} from 'element-ui';

let config = require('../../config');

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
// Vue.http.options.crossOrigin = true;
// Vue.http.options.credentials = true;
Vue.http.options.emulateJSON = true;

// 拦截器
Vue.http.interceptors.push((request, next) => {
  // 生成正在的url
  request.url = genPath(request.url);

  // 这里对请求体进行处理
  next((response) => {
    // 这里可以对响应的结果进行处理
    let ret = response.body;
    if (ret.type === MsgType.TOLOGIN) {
      router.push('login');
    } else if (ret.show === true) {
      Notification({
        title: ret.title,
        message: ret.msg,
        type: ret.type
      });
    }
  });
});

