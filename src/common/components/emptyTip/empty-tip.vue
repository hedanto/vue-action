<template>
  <div class="text-center text-tip" style="padding: 30px;">
    <span style="font-size: 30px;"><i :class="iconClass"></i></span>
    <br>
    <small class="text-muted">{{text}}</small>
  </div>
</template>

<script>
  import config from '../config';
  const iconClass = {
    info: 'anticon icon-infocirlce text-info',
    error: 'anticon icon-closecircle text-danger',
    waring: 'anticon icon-exclamationcircle text-warning',
    success: 'anticon icon-checkcircle text-success'
  };
  export default {
    name: config.prefix + 'EmptyTip',
    props: {
      type: {
        type: String,
        default: 'info',
        required: true
      },
      text: {
        type: String,
        default: '暂时没有数据！'
      }
    },
    computed: {
      iconClass () {
        return iconClass[this.type];
      }
    }

  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


