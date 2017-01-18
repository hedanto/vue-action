<template>
  <div class="text-center text-tip" style="padding: 30px;">
    <span style="font-size: 30px;"><i :class="iconClass"></i></span>
    <br>
    <small class="text-muted">{{text}}</small>
  </div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'EmptyTip',
    props: {
      iconClass: {
        type: String,
        default: 'anticon icon-exclamationcircle text-warning'
      },
      text: {
        type: String,
        default: '暂时没有数据！'
      }
    }

  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


