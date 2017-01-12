<template>
  <pl-content-box>
    <pl-page-nav></pl-page-nav>
    <pl-content-box-block>
      <p>项目中使用Element UI 组件本身自带<strong>日期组件</strong>(
        <a class='link' target="_blank" href="http://element.eleme.io/#/zh-CN/component/date-picker">官网文档</a>
        ),但它要求绑定的值是 Date 类型，而项目中往往是使用string类型，所有基于原有重新封装了一套支持<strong>string类型</strong>的日期组件。
      </p>
    </pl-content-box-block>
    <pl-content-box-title>组件演示</pl-content-box-title>
    <pl-content-box-block>
      <pl-code-box title="表格组件" :describe-html="describe" :html="html" :js="js">
        <el-form label-width="130px"  :model="form" ref="form">
          <el-row>
            <el-col :span="24">
              <el-form-item label="日期" prop="date" :rules="[
                  { required: true, message: '选择日期', trigger: 'change' }
                ]">
                <pl-date-picker v-model="form.date"   placeholder="选择日期"></pl-date-picker>
                {{form.date}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="日期范围" prop="daterange" :rules="[
                  { required: true, type:'array', message: '选择日期范围', trigger: 'change' }
                ]">
                <pl-date-picker v-model="form.daterange" type="daterange"   placeholder="选择日期范围"></pl-date-picker>
                {{form.daterange}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="日期时间" prop="datetime" :rules="[
                  { required: true,  message: '日期时间', trigger: 'change' }
                ]">
                <pl-date-picker v-model="form.datetime" type="datetime"   placeholder="日期时间"></pl-date-picker>
                {{form.datetime}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="日期时间范围" prop="datetimerange" :rules="[
                  { required: true, type:'array', message: '日期时间范围', trigger: 'change' }
                ]">
                <pl-date-picker v-model="form.datetimerange" type="datetimerange"   placeholder="日期时间范围"></pl-date-picker>
                {{form.datetimerange}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="时间" prop="time" :rules="[
                  { required: true,  message: '时间', trigger: 'change' }
                ]">
                <pl-time-picker v-model="form.time"    placeholder="时间"></pl-time-picker>
                {{form.time}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="时间范围" prop="timerange" :rules="[
                  { required: true, type:'array', message: '时间范围', trigger: 'change' }
                ]">
                <pl-time-picker v-model="form.timerange" is-range   placeholder="时间范围"></pl-time-picker>
                {{form.timerange}}
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="固定时间点" prop="timeselect" :rules="[
                  { required: true,  message: '固定时间点', trigger: 'change' }
                ]">
                <pl-time-select v-model="form.timeselect"   placeholder="固定时间点"></pl-time-select>
                {{form.timeselect}}
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </pl-code-box>
    </pl-content-box-block>
    <pl-content-box-title>组件的API</pl-content-box-title>
    <pl-content-box-block>
      <h4>使用方式请，其他事件请参考 <a target='_blank' class='link' href='http://element.eleme.io/#/zh-CN/component/date-picker'>文档 </a>。</h4>
    </pl-content-box-block>
  </pl-content-box>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>

<script>
  let html =
  `
  <el-form label-width="130px"  :model="form" ref="form">
    <el-row>
      <el-col :spa="24">
        <el-form-item label="日期" prop="date" :rules="[
            { required: true, message: '选择日期', trigger: 'change' }
          ]">
          <pl-date-picker v-model="form.date"   placeholder="选择日期"></pl-date-picker>
          {{form.date}}
        </el-form-item>
      </el-col>
      <el-col :spa="24">
        <el-form-item label="日期范围" prop="daterange" :rules="[
            { required: true, type:'array', message: '选择日期范围', trigger: 'change' }
          ]">
          <pl-date-picker v-model="form.daterange" type="daterange"   placeholder="选择日期范围"></pl-date-picker>
          {{form.daterange}}
        </el-form-item>
      </el-col>
      <el-col :spa="24">
        <el-form-item label="日期时间" prop="datetime" :rules="[
            { required: true,  message: '日期时间', trigger: 'change' }
          ]">
          <pl-date-picker v-model="form.datetime" type="datetime"   placeholder="日期时间"></pl-date-picker>
          {{form.datetime}}
        </el-form-item>
      </el-col>
      <el-col :spa="24">
        <el-form-item label="日期时间范围" prop="datetimerange" :rules="[
            { required: true, type:'array', message: '日期时间范围', trigger: 'change' }
          ]">
          <pl-date-picker v-model="form.datetimerange" type="datetimerange"   placeholder="日期时间范围"></pl-date-picker>
          {{form.datetimerange}}
        </el-form-item>
      </el-col>
      <el-col :spa="24">
        <el-form-item label="时间" prop="time" :rules="[
            { required: true,  message: '时间', trigger: 'change' }
          ]">
          <pl-time-picker v-model="form.time"    placeholder="时间"></pl-time-picker>
          {{form.time}}
        </el-form-item>
      </el-col>
      <el-col :spa="24">
        <el-form-item label="时间范围" prop="timerange" :rules="[
            { required: true, type:'array', message: '时间范围', trigger: 'change' }
          ]">
          <pl-time-picker v-model="form.timerange" is-range   placeholder="时间范围"></pl-time-picker>
          {{form.timerange}}
        </el-form-item>
      </el-col>
      <el-col :spa="24">
        <el-form-item label="固定时间点" prop="timeselect" :rules="[
            { required: true,  message: '固定时间点', trigger: 'change' }
          ]">
          <pl-time-select v-model="form.timeselect"   placeholder="固定时间点"></pl-time-select>
          {{form.timeselect}}
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  `;
  let js =
  `
   export default {
    data () {
      return {
        form: {
          date: '',
          daterange: '',
          datetimerange: '',
          datetime: '',
          time: '',
          timerange: '',
          timeselect: ''
        }
      };
    }
  };
  `;
  let describe = `日期组件的使用方式跟Element UI 组件本身自带<strong>日期组件</strong>(
    <a class='link' target="_blank" href="http://element.eleme.io/#/zh-CN/component/date-picker">官网文档</a>
  )几乎一样,只是组件由el开头改成用pl开头，参数、方法等等完全一致。`;

  export default {
    data () {
      return {
        html,
        js,
        describe,
        form: {
          date: '',
          daterange: '',
          datetimerange: '',
          datetime: '',
          time: '',
          timerange: '',
          timeselect: ''
        }
      };
    }
  };
</script>
