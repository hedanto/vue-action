<template>
  <pl-content-box>
    <pl-page-nav>
      <div slot="nav-tip">
        <i class="text-primary anticon icon-infocirlceo"></i>&nbsp;<small class="text-muted">这是个综合实列，集合了各种常用的使用实列一体</small>
      </div>
      <div slot="nav-toolbar">
        <el-button-group>
          <el-button  icon="edit"></el-button>
          <el-button  icon="share"></el-button>
        </el-button-group>
      </div>
    </pl-page-nav>
    <pl-content-box-toolbar>
      <el-form label-width="80px" >
        <el-row>
          <el-col :span="8">
            <el-form-item label="日期">
              <pl-date-picker  v-model="params.date" placeholder="选择日期"></pl-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名">
              <el-input v-model="params.name" placeholder="输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="地址">
              <el-input v-model="params.address" placeholder="输入地址"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-select v-model="params.sex" clearable placeholder="选择性别">
                <el-option
                  v-for="item in options"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <el-input-number v-model="params.age" placeholder="输入年龄"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" class="text-right">
            <el-button type="primary" icon=" anticon icon-search" @click="reload">查询</el-button>
            <el-button type="info" icon=" anticon icon-plus" @click="handleEdit">新增</el-button>
            <el-button icon=" anticon icon-download ">导出</el-button>
          </el-col>
        </el-row>
      </el-form>
    </pl-content-box-toolbar>
    <pl-content-box-block>
      <pl-page-table :data-fun="getPageData" ref="pageTable">
        <el-table-column  prop="date" label="日期" width="180" sortable="date"></el-table-column>
        <el-table-column  prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column  prop="address" label="地址" width="350"></el-table-column>
        <el-table-column  prop="age" label="年龄" width="120"></el-table-column>
        <el-table-column  prop="sex" label="性别" width="120"></el-table-column>
        <el-table-column  prop="sex" label="操作" width="150" fixed="right" align="center" header-align="center">
          <template scope="scope">
            <el-button-group>
              <el-button size="small"  icon=" anticon icon-ellipsis" @click="handleInfo(scope.$index,scope.row)">
              </el-button>
              <el-button size="small" icon=" anticon icon-edit" @click="handleEdit(scope.$index,scope.row)"></el-button>
              <el-button size="small" icon=" anticon icon-delete" @click="handleDelete(scope.$index,scope.row)"></el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </pl-page-table>
    </pl-content-box-block>
    <integrate-info-dialog ref="inegrateDialog"></integrate-info-dialog>
  </pl-content-box>
</template>

<script>
  import integrateInfo from './integrate-info-demo.vue';
  import { MsgType } from 'common/js/constants';
  export default {
    data () {
      return {
        params: {
          date: '',
          time: '',
          name: '',
          address: '',
          sex: '',
          age: ''
        },
        getPageData: this.$api.integrate.getPageData,
        options: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }],
        msg: 'qweqwe'
      };
    },
    components: {
      'integrate-info-dialog': integrateInfo
    },
    methods: {
      reload () {
        this.$refs.pageTable.reload(this.params);
      },
      handleInfo (index, row) {
        this.$refs.inegrateDialog.show(index);
      },
      handleEdit (index, row) {
        let params = {};
        if (row) {
          params.id = index;
        }
        this.$router.push({name: 'example.components.integrate-edit', params: params});
      },
      handleDelete (row) {
        this.$confirm('删除之后数据无法还原，确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: MsgType.WARING
        }).then(() => {
          this.$notify({
            type: MsgType.SUCCESS,
            message: '删除成功!'
          });
        }).catch(() => {
          this.$notify({
            type: MsgType.INFO,
            message: '已取消删除'
          });
        });
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


