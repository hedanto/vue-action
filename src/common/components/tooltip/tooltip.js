import Vue from 'vue';

let tipVm;
const camelizeRE = /-(\w)/g;
const toUpper = function (_, c) {
  return c ? c.toUpperCase() : '';
};

function camelize (str) {
  return str.replace(camelizeRE, toUpper);
}
let addStyle = (el, clsObj) => {
  Object.keys(clsObj).forEach(name => {
    el.style[camelize(name)] = clsObj[name];
  });
};

const utils = {
  /**
   * 获取元素的坐标位置
   * @param el
   * @returns {{top: number, left: number}}
   */
  getOffset: function (el) {
    let x = 0;
    let y = 0;
    let ele = el;
    while (ele) {
      x += parseInt(ele.offsetLeft, 10);
      y += parseInt(ele.offsetTop, 10);
      ele = ele.offsetParent;
    }
    return {top: y, left: x};
  },
  /**
   * 显示方法
   */
  open: function (el, binding, vnode) {
    debugger;
    setTimeout(() => {
      if (!el) return;
      const offset = utils.getOffset(el);
      const eleWidth = el.offsetWidth;
      const eleHeight = el.offsetHeight;

      // 创建一个新的tip组件实例,插入到body中
      tipVm = this.vm = new TipComponent({
        data: {
          tip: this.value, // 支持html内容
          show: true,
          place: this.place
        }
      }).$mount().$appendTo('body');

      // 这是内部api,使用v-if指令之后,渲染后的dom存在$el.nextElementSibling属性上,而不是$el上,很奇怪
      this.tooltip = this.vm.$el.nextElementSibling;

      // 给tip组件本身绑定鼠标事件,鼠标移上去之后停止关闭操作（从而允许复制tip中的内容）,鼠标移开后关闭
      this.tooltip.addEventListener('mouseover', () => {
        clearTimeout(this.closeTimer);
      });
      this.tooltip.addEventListener('mouseout', this.close.bind(el));
      this.tooltip.addEventListener('click', this.close.bind(el));

      // 设置位置
      addStyle(this.tooltip, {
        left: `${offset.left + (eleWidth * config.leftFactor)}px`,
        top: `${offset.top + (eleHeight * config.topFactor)}px`
      });
    }, 100);
  },
  /**
   * 关闭方法
   */
  close: function () {
    if (this.vm) {
      // 延时关闭,给tip本身的鼠标事件留出时间
      this.closeTimer = setTimeout(() => {
        // show设置为false,触发view改变
        tipVm.show = false;
      }, 100);
    }
  }
};
let config = {
  openTrigger: 'mouseenter',
  closeTrigger: 'mouseleave',
  leftFactor: 0.5, // 默认水平位置系数
  topFactor: 0.5 // 默认垂直位置系数
};

// tip组件模板
const TipComponent = Vue.extend({
  template: `
                <div class="ant-tooltip ant-tooltip-placement-{{place}}" v-if="show" transition="fade">
                    <div class="ant-tooltip-content">
                            <div class="ant-tooltip-arrow"></div>
                            <div class="ant-tooltip-inner"><span>{{{tip}}}</span></div>
                    </div>
                </div>`
});

export default {
  install (Vue, options) {
    Vue.directive('tooltip', {
      bind: function (el, binding, vnode) {
        // 准备工作
        // 识别触发事件
        // if (this.arg === 'focus') {
        //   config.openTrigger = 'focus';
        //   config.closeTrigger = 'blur';
        // }

        // 获取位置
        utils.place = Object.keys(binding.modifiers)[0] || 'top';

        // 设置位置系数
        if (utils.place.toUpperCase().includes('LEFT')) {
          config.leftFactor = 0;
        } else if (utils.place.toUpperCase().includes('RIGHT')) {
          config.leftFactor = 1;
        }
        if (utils.place.toUpperCase().includes('TOP')) {
          config.topFactor = 0;
        } else if (utils.place.toUpperCase().includes('BOTTOM')) {
          config.topFactor = 1;
        }

        // 绑定触发事件
        el.addEventListener(config.openTrigger, utils.open);
        el.addEventListener(config.closeTrigger, utils.close);
        el.addEventListener('click', config.close);
      },
      update: function (el, binding, vnode) {
        // this.value = binding.value;
        // 值更新时的工作
      },
      unbind: function (el, binding, vnode) {
        // 清理工作
        // 例如，删除 bind() 添加的事件监听器
        // el.removeEventListener(this.openTrigger, this.open);
        // el.removeEventListener(this.closeTrigger, this.close);
      }
    });
  }
};
