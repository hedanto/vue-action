// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '../static/IconFont/iconfont.css';
import router from 'common/js/router';
import store from './store';
import api from './api';
import PlComponents from './common/components';

Vue.use(ElementUI);
Vue.use(api);
Vue.use(PlComponents);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router, // （缩写）相当于 router:router
  store // （缩写）相当于 store:store
});
