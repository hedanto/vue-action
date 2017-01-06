<template>
  <div :class="classes" :style="styles" @click="back">
    <slot>
      <div :class="innerClasses">
        <i class="anticon icon-upcircleo"></i>
      </div>
    </slot>
  </div>
</template>
<script>
  import config from '../config';
  const prefixCls = 'ivu-back-top';

  export default {
    name: config.prefix + 'BackTop',
    props: {
      height: {
        type: Number,
        default: 400
      },
      bottom: {
        type: Number,
        default: 30
      },
      right: {
        type: Number,
        default: 30
      }
    },
    data () {
      return {
        backTop: false
      };
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll, false);
      window.addEventListener('resize', this.handleScroll, false);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll, false);
      window.removeEventListener('resize', this.handleScroll, false);
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-show`]: this.backTop
          }
        ];
      },
      styles () {
        return {
          bottom: `${this.bottom}px`,
          right: `${this.right}px`
        };
      },
      innerClasses () {
        return `${prefixCls}-inner`;
      }
    },
    methods: {
      handleScroll () {
        this.backTop = window.pageYOffset >= this.height;
      },
      back () {
        window.scrollTo(0, 0);
        this.$emit('on-click');
      }
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .ivu-back-top {
    color: #fff;
    z-index: 10;
    position: fixed;
    cursor: pointer;
    display: none;
  }
  .ivu-back-top.ivu-back-top-show {
    display: block
  }
  .ivu-back-top-inner {
    background-color: rgba(0,0,0,.6);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    transition: all .2s ease-in-out
  }

  .ivu-back-top-inner:hover {
    background-color: rgba(0,0,0,.7)
  }
  .ivu-back-top i {
    font-size: 24px;
    padding: 8px 12px
  }
</style>
