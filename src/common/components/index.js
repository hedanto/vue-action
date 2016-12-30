import PageNav from './pageNav';
import Header from './header';
import Menu from './menu';

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  Vue.component(PageNav.name, PageNav);
  Vue.component(Header.name, Header);
  Vue.component(Menu.name, Menu);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
;

module.exports = {
  install,
  PageNav,
  Header,
  Menu
};

