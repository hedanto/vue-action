import PageNav from './pageNav';
import Header from './header';
import Menu from './menu';
import Layout from './layout';
import Affix from './affix';
import BackTop from './backTop';
import ApiTable from './apiTable';
import CodeBox from './codeBox';

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  Vue.component(PageNav.name, PageNav);
  Vue.component(Header.name, Header);
  Vue.component(Menu.name, Menu);
  Vue.component(Affix.name, Affix);
  Vue.component(BackTop.name, BackTop);
  Vue.component(ApiTable.name, ApiTable);
  Vue.component(CodeBox.name, CodeBox);

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
  ...Layout,
  Affix,
  BackTop,
  ApiTable,
  CodeBox
};
