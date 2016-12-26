const install = (Vue, api) => {
  Vue.api = api;

  Object.defineProperties(Vue.prototype, {
    $api: {
      get () {
        return api;
      }
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

