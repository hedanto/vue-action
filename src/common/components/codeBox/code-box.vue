<template>

  <section class="code-box" :class="{'expand': open}">
    <section class="code-box-demo">
      <slot></slot>
    </section>
    <section class="code-box-meta markdown">
      <div class="code-box-title"><a>{{ title }}</a></div>
      <div><p>{{ describe }}</p></div>
      <span class="collapse anticon anticon-circle-o-right" @click="handleOpen"></span>
    </section>
    <section class="highlight-wrapper" :class="{'highlight-wrapper-expand': open}">
      <div class="highlight" v-if="html">
        <pre><code class="html" v-html="html"></code></pre>
      </div>
      <div class="highlight" v-if="js">
        <pre><code class="js" v-html="js"></code></pre>
      </div>
      <div class="highlight" v-if="css">
        <pre><code class="css" v-html="css" ></code></pre>
      </div>
    </section>
  </section>

</template>

<script>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/atom-one-dark.css';
  import sysUtils from '../../js/sysUtils';
  import config from '../config';
  export default {
    name: config.prefix + 'CodeBox',
    props: {
      title: {
        type: String,
        default: '代码'
      },
      describe: {
        type: String,
        default: ' '
      },
      html: String,
      js: String,
      css: String
    },
    data () {
      return {
        open: false
      };
    },
    mounted () {
      this.$nextTick(() => {
        let codes = this.$el.querySelectorAll('.highlight pre code');
        for (let i = 0; i < codes.length; i++) {
          let item = codes[i];
          if (!item.innerHTML) {
            item.remove();
          } else if (item.innerHTML.indexOf('span') > 0) {
            // 如果在代码示例组件中在添加一个代码示例组件,需要添加一个这样的判断,来防止二次添加的代码示例组件的html再编译,里面可以不做任何操作
          } else {
            item.innerHTML = sysUtils.htmlToStr(item.innerHTML);
            hljs.highlightBlock(item);
          }
        }
      });
    },
    methods: {
      handleOpen () {
        this.open = !this.open;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../scss/index";
  .code-box {
    border: 1px solid $border-color;
    border-radius: 6px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0 0 16px;
    transition: all .2s ease;

  .collapse {
    position: absolute;
    right: 16px;
    bottom: 16px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    font-size: 18px;
    line-height: 18px;
    opacity: .5;
    text-align: center;
    transform: rotate(90deg);
    transition: all .3s ease;
    color: #999;
    background: #fff;
    user-select: none;
    border-radius: 100%;
    &:hover {
      opacity: 1;
    }

  }

  &:hover {
     box-shadow: 0 0 6px rgba(0, 0, 0, .15);
     position: relative;
     // z-index: 1;
     background: #fff;
    .code-box-title {
      background: #fbfbfb;
      box-shadow: 0 -1.2px 0 $border-color;
    }
    .code-box-meta {
      background: #fbfbfb;
    }
  }

  .code-box-demo {
    border-bottom: 1px solid $border-color;
    padding: 42px 20px 50px;
  }

  .highlight-wrapper {
    max-height: 0;
    opacity: 0;
    overflow: auto;
    transition: all .4s ease;
    border-radius: 0 0 6px 6px;
  }
  .highlight-wrapper-expand {
    max-height: 500px;
    opacity: 1;
  }
  }

  .code-box .highlight:not(:first-child) {
    border-top: 1px dashed $border-color;
  }
  .code-box.expand .collapse {
    transform: rotate(-90deg);
  }

  .code-box.expand .code-box-meta {
    border-radius: 0;
    border-bottom: 1px dashed #e9e9e9;
  }

  .code-box-meta {
    position: relative;
    padding: 16px;
    border-radius: 0 0 6px 6px;
    transition: background-color .4s ease;
    width: 100%;
    font-size: 12px;
    p {
      margin: 0;
    }
  }

  .code-box-title {
    position: absolute;
    top: -14px;
    padding: 1px 1.1em;
    color: #777;
    border-radius: 6px;
    background: #fff;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
  }

  .code-box-title:before {
    font-family: anticon;
    content: "\E6D2";
    font-size: 16px;
    vertical-align: middle;
    line-height: 22px;
    position: relative;
    margin-right: 8px;
    top: -2px;
    color: #ccc;
    transform: rotate(-45deg);
    display: inline-block;
  }

  .code-box .code-box-title a,
  .code-box .code-box-title a:hover {
    color: #666;
    font-size: 14px;
  }
  .code-box .hljs {
    background: none;
  }

  .anticon {
    display: inline-block;
    font-style: normal;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  .anticon:before {
    display: block;
    font-family: anticon!important
  }

  .anticon-circle-o-right:before {
    content: "\E60C"
  }

</style>
