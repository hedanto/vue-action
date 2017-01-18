import EmptyTip from './empty-tip.vue';

EmptyTip.install = function (Vue) {
  Vue.component(EmptyTip.name, EmptyTip);
};

export default EmptyTip;
