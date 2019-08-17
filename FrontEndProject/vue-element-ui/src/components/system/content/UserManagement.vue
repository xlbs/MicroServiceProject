<template>
  <div class="userManagement">
    <el-table
      :data="tableData"
      :header-cell-style="{background: '#eef1f6'}"
      style="width: 100%"
      height="500">
      <el-table-column
        fixed
        type="index"
        label="序号"
        width="60"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        fixed
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="username"
        label="账号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
    </el-table>
    <div style="float: right">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="CONSTANT.TABLE.CURRENT_PAGE"
        :page-sizes="CONSTANT.TABLE.PAGE_SIZE_ARRAY"
        :page-size="CONSTANT.TABLE.PAGE_SIZE"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {AjaxPromise} from "@/utils/Ajax";
  import {CONSTANT} from "@/utils/Constant";

  export default {
    name: 'userManagement',
    mounted: function () {
      this.find();
    },
    methods: {
      indexMethod(index) {
        return CONSTANT.TABLE.PAGE_SIZE*(CONSTANT.TABLE.CURRENT_PAGE-1)+index+1;
      },
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        CONSTANT.TABLE.PAGE_SIZE = val;
        this.find();
      },
      handleCurrentChange(val) {
        CONSTANT.TABLE.CURRENT_PAGE = val;
        this.find();
      },
      find(){
        const url = CONSTANT.URL.API_SERVICE+"/user/find";
        const params = {
          pageSize: CONSTANT.TABLE.PAGE_SIZE,
          currentPage: CONSTANT.TABLE.CURRENT_PAGE
        };
        const config = {};
        config.method = "GET";
        config.params = params;
        AjaxPromise(url,config).then(res => {
          this.total = res.data.total;
          this.tableData = res.data.list;
        })
      }


    },
    data () {
      return {
        CONSTANT: CONSTANT,
        total: 0,
        tableData: []
      }
    }
  }
</script>

<style scoped>
  .userManagement{
    width: 800px;
    margin: auto;
  }
  .headersss{
    color: #00b2f9 !important;
  }

</style>
