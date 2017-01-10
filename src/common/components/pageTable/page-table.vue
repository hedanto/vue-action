<template>
  <div class="tableWrapper">
    <div v-loading="loading" ref="tableWrapper">
      <el-table  ref="elTable"
        :data="tableData"
        :width="width"
        :height="height"
        :max-height="maxHeight"
        :stripe="stripe"
        :border="border"
        :row-key="rowKey"
        :context="context"
        :show-header="showHeader"
        :row-class-name="rowClassName"
        :row-ctyle="rowStyle"
        :highlight-current-row="highlightCurrentRow"
        :current-row-key="currentRowKey"
        :empty-text="emptyText"
        :expand-row-keys="expandRowKeys"
        :default-expand-all="defaultExpandAll"
        @select="_handleSortEvents('select')"
        @select-all="_handleSortEvents('select-all')"
        @selection-change="_handleSortEvents('selection-change')"
        @cell-mouse-enter="_handleSortEvents('cell-mouse-enter')"
        @cell-mouse-leave="_handleSortEvents('cell-mouse-leave')"
        @cell-click="_handleSortEvents('cell-click')"
        @row-click="_handleSortEvents('row-click')"
        @row-contextmenu="_handleSortEvents('row-contextmenu')"
        @row-dblclick="_handleSortEvents('row-dblclick')"
        @header-click="_handleSortEvents('header-click')"
        @filter-change="_handleSortEvents('filter-change')"
        @current-change="_handleSortEvents('current-change')"
        @expand="_handleSortEvents('expand')"
        @sort-change="_handleSortChange"
        style="width: 100%">
        <slot></slot>
      </el-table>
      <div class="table-page-wrapper">
        <el-pagination
          @size-change="_handleSizeChange"
          @current-change="_handleCurrentChange"
          :page-sizes="pageSizes"
          :page-size="currentPageSize"
          :current-page="currentPage"
          layout="total, prev, pager, next, sizes"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../config';
  export default {
    name: config.prefix + 'PageTable',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      pageSizes: {
        type: Array,
        default () {
          return [10, 20, 30, 40, 50];
        }
      },
      pageSize: {
        type: Number,
        default: function () {
          return this.pageSizes[0];
        }
      },
      params: {
        type: Object,
        default: function () {
          return {};
        }
      },
      dataFun: Function,
      width: [String, Number],
      height: [String, Number],
      maxHeight: [String, Number],
      fit: {
        type: Boolean,
        default: true
      },
      stripe: Boolean,
      border: Boolean,
      rowKey: [String, Function],
      context: {},
      showHeader: {
        type: Boolean,
        default: true
      },
      rowClassName: [String, Function],
      rowStyle: [Object, Function],
      highlightCurrentRow: Boolean,
      currentRowKey: [String, Number],
      emptyText: String,
      expandRowKeys: Array,
      defaultExpandAll: Boolean
    },
    data () {
      return {
        total: 0,
        tableData: [],
        currentPage: 1,
        currentPageSize: this.pageSize,
        pages: 0,
        loading: false
      };
    },
    methods: {
      _setPageData (currentPage, filters) {
        this.currentPage = currentPage;
        if (this.data && this.data.length > 0) {
          this.total = this.data.length;
          this.pages = parseInt(this.total / this.currentPageSize) + (this.total % this.currentPageSize === 0 ? 0 : 1);
          let start = (this.currentPage - 1) * this.currentPageSize;
          let end = start + this.currentPage < this.pages ? this.currentPageSize : this.data.length;
          this.tableData = this.data.slice(start, end);
        } else if (this.dataFun) {
          let params = {
            pageSize: this.currentPageSize,
            pageNo: this.currentPage,
            ...this.params,
            ...filters
          };
          // this.loading = true;
          this.dataFun(params).then(ret => {
            // this.loading = false;
            this.tableData = ret.data;
            this.total = ret.total;
            this.pages = parseInt(this.total / this.currentPageSize) + (this.total % this.currentPageSize === 0 ? 0 : 1);
            this.$emit('after-load', ret);
          });
        }
      },
      _handleSizeChange (val) {
        this._setPageData(1);
      },
      _handleCurrentChange (val) {
        this._setPageData(val);
      },
      _handleSortChange ({column, prop, order}) {
        let sortName = '';
        let sortType = '';
        if (column) {
          sortName = column.sortable || prop;
          sortType = order === 'descending' ? 'desc' : 'asc';
        }
        this._setPageData(this.currentPage, {sortName, sortType});
      },
      _handleSortEvents (eventName) {
        this.$emit(eventName);
      },
      reload (filters) {
        this._setPageData(1, filters);
      },
      clearSelection (selection) {
        this.$refs['elTable'].clearSelection(selection);
      },
      toggleRowSelection (row, selected) {
        this.$refs['elTable'].toggleRowSelection(row, selected);
      }
    },
    mounted () {
      this.$refs.tableWrapper.style.width = this.$refs.tableWrapper.clientWidth + 'px';
      this._setPageData(this.currentPage);
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../scss/mixin";
  .tableWrapper{
    .table-page-wrapper {
      @include clearfix;
      padding: 15px 0px;
      > div {
        float: right;
        padding: 0px;
      }
    }
    .el-table__fixed-right{
      right: 1px !important;
    }
  }
</style>


