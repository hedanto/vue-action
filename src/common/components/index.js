import PageNav from './pageNav';
import Header from './header';
import Menu from './menu';
import Layout from './layout';
import Affix from './affix';
import BackTop from './backTop';
import ApiTable from './apiTable';
import CodeBox from './codeBox';
import PageTable from './pageTable';
import DatePicker from './datePicker';
import Tooltip from './tooltip';
import EmptyTip from './emptyTip';

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
  Vue.component(PageTable.name, PageTable);
  Vue.component(EmptyTip.name, EmptyTip);

  for (let key in Layout) {
    let component = Layout[key];
    Vue.component(component.name, component);
  }

  for (let key in DatePicker) {
    let component = DatePicker[key];
    Vue.component(component.name, component);
  }

  Vue.use(Tooltip);
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
  ...DatePicker,
  Affix,
  BackTop,
  ApiTable,
  CodeBox,
  PageTable,
  Tooltip,
  EmptyTip
};
