<template>
  <el-dialog title="实列信息" v-model="dialogVisible">
    <el-form label-width="100px" class="static-form"><!-- static-form 让el-form-item没外边距 -->
      <el-row>

        <el-col :span="12">
          <el-form-item label="姓名">
            <pl-content-item-text>{{form.name}}</pl-content-item-text>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="日期">
            <pl-content-item-text>{{form.date}}</pl-content-item-text>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别" >
            <pl-content-item-text>{{form.sex}}</pl-content-item-text>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item  label="年龄">
            <pl-content-item-text>{{form.age}}</pl-content-item-text>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="地址">
            <pl-content-item-text>{{form.address}}</pl-content-item-text>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer text-center">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </div>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          date: '',
          name: '',
          address: '',
          sex: '',
          age: ''
        },
        dialogVisible: false
      };
    },
    methods: {
      show (index) {
        let vm = this;
        this.$api.integrate.getData({id: index}).then(ret => {
          vm.form = ret;
          vm.dialogVisible = true;
        });
      },
      close () {
        this.dialogVisible = false;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


