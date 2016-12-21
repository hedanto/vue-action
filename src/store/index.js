import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import module1 from './modules/module1';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {

  currentUser: null,
  menus: null
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    module1
  },
  strict: debug
});
