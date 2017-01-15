import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'common/theme/index.css';
import 'common/theme/theme-reset.scss';
import 'common/fonts/iconFont/iconfont.css';
import router from './router';
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
