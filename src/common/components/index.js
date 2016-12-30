import PageNav from './pageNav';
import Header from './header';
import Menu from './menu';
import Layout from './layout';

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  Vue.component(PageNav.name, PageNav);
  Vue.component(Header.name, Header);
  Vue.component(Menu.name, Menu);
  Vue.component(Layout.name, Layout);
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
  Menu,
  Layout
};

