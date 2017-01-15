<template>
  <pl-content-box>
    <pl-page-nav :show-previous="true">
    </pl-page-nav>
    <pl-content-box-block>
      <pl-content-box-card>
        <el-form label-width="100px"  :model="form" ref="form">
          <el-row>
            <el-col :span="12">
              <el-form-item label="姓名" prop="name" :rules="[
                  { required: true, message: '输入姓名', trigger: 'change' }
                ]">
                <el-input v-model="form.name" placeholder="输入姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="日期"  prop="date" :rules="[
                  { required: true, message: '选择日期', trigger: 'change' }
                ]">
                <pl-date-picker v-model="form.date"   placeholder="选择日期"></pl-date-picker>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="性别" prop="sex" :rules="[
                  { required: true, message: '选择性别', trigger: 'change' }
                ]">
                <el-select v-model="form.sex" clearable placeholder="选择性别">
                  <el-option
                    v-for="item in options"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="年龄" prop="age" :rules="[
                  { required: true, type: 'number' ,message: '输入年龄', trigger: 'change' }
                ]">
                <el-input-number v-model="form.age" placeholder="输入年龄"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="地址">
                <el-input v-model="form.address" placeholder="输入地址"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </pl-content-box-card>
    </pl-content-box-block>
    <pl-affix :offset-bottom="0">
        <pl-content-box-toolbar class="text-center" :border="false">
          <el-button type="primary" icon=" anticon icon-save" :loading="loading" @click="save">保存</el-button>
          <el-button  icon=" anticon icon-arrowleft" @click="goBack">返回</el-button>
        </pl-content-box-toolbar>
     </pl-affix>
  </pl-content-box>
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
        options: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }],
        loading: false
      };
    },
    methods: {
      save () {
        let vm = this;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            vm.loading = true;
            vm.$api.integrate.saveData(this.form).then(ret => {
              setTimeout(() => {
                vm.loading = false;
                console.info('submit!');
                vm.goBack();
              }, 500);
            });
          } else {
            return false;
          }
        });
      },
      goBack () {
        this.$router.push({name: 'example.components.integrate'});
      }
    },
    created () {
      if (this.$route.params.id !== undefined) {
        let vm = this;
        this.$api.integrate.getData(this.$route.params).then(ret => {
          vm.form = ret;
        });
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


