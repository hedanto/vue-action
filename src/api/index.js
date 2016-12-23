import Vue from 'vue';
import VueResource from 'vue-resource';
import {genPath} from './api-cofing';

Vue.use(VueResource);

// HTTP相关
Vue.http.options.crossOrigin = true;
Vue.http.options.credentials = true;

Vue.http.interceptors.push((request, next) => {
  request.url = genPath(request.url);

  // 这里对请求体进行处理
  next((response) => {
    // 这里可以对响应的结果进行处理
  });
});
