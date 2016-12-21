import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// HTTP相关
Vue.http.options.crossOrigin = true;
Vue.http.options.credentials = true;

Vue.http.interceptors.push((request, next) => {
  console.info('---------------');

  // 这里对请求体进行处理
  request.headers = request.headers || {};

  console.info(request.headers);

  next((response) => {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      /* signOut()
       window.location.pathname = '/login' */
    }
  });
});
