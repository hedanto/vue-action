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
              <el-date-picker v-model="params.date"  type="date" placeholder="选择日期"></el-date-picker>
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
        <el-table-column  prop="sex" label="操作" width="180" fixed="right">
          <template scope="scope">
            <el-button-group>
              <el-button size="small"  @click="handleEdit(scope.$index,scope.row)">详情</el-button>
              <el-button size="small"  @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
              <el-button size="small"  @click="handleDelete(scope.$index,scope.row)">删除</el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </pl-page-table>
    </pl-content-box-block>
  </pl-content-box>
</template>

<script>
  export default {
    data () {
      return {
        params: {
          date: '',
          name: '',
          address: '',
          sex: '',
          age: ''
        },
        getPageData: this.$api.inegrate.getPageData,
        options: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }]
      };
    },
    methods: {
      reload () {
        this.$refs.pageTable.reload(this.params);
      },
      handleEdit (index, row) {
        let params = {};
        if (row) {
          params.id = index;
        }
        this.$router.push({name: 'example.components.integrate-edit', params: params});
      },
      handleDelete (row) {
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>


