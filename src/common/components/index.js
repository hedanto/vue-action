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

  for (var key in Layout) {
    let component = Layout[key];
    Vue.component(component.name, component);
  }
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  PageNav,
  Header,
  Menu,
  ...Layout
};
