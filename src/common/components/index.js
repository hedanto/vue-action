import PageNav from './pageNav';

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  Vue.component(PageNav.name, PageNav);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
;

module.exports = {
  install,
  PageNav
};

