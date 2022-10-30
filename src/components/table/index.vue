<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="办理业务">
              <span>关于如何刘洵是如何变成人妖的</span>
            </el-form-item>
            <el-form-item label="事件编号">
<!--              <span>{{ props.row.shop }}</span>-->
              <span>123456</span>
            </el-form-item>
            <el-form-item label="申请人姓名">
<!--              <span>{{ props.row.id }}</span>-->
              <span>刘洵</span>
            </el-form-item>
            <el-form-item label="性别">
<!--              <span>{{ props.row.shopId }}</span>-->
              <span>人妖</span>
            </el-form-item>
            <el-form-item label="证件号码">
<!--              <span>{{ props.row.category }}</span>-->
              <span>987654321</span>
            </el-form-item>
            <el-form-item label="电子邮箱">
<!--              <span>{{ props.row.address }}</span>-->
              <span>3021955171@qq.com</span>
            </el-form-item>
            <el-form-item label="独生子女">
<!--              <span>{{ props.row.desc }}</span>-->
              <span>是</span>
            </el-form-item>
            <el-form-item label="是否双女户">
              <!--              <span>{{ props.row.desc }}</span>-->
              <span>否</span>
            </el-form-item>
            <el-form-item label="通讯地址">
              <!--              <span>{{ props.row.desc }}</span>-->
              <span>宇宙太阳系地球中国</span>
            </el-form-item>
            <el-form-item label="办理状态">
<!--              <span>{{ props.row.desc }}</span>-->
              <span>已完成</span>
            </el-form-item>
            <el-form-item label="办理人">
              <!--              <span>{{ props.row.desc }}</span>-->
              <span>黄智泉</span>
            </el-form-item>
            <el-form-item label="处理时间">
              <span>2022.11.4</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column align="center" label="事件编号" width="95" >
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="办理事项概览">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="申请人" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <a><el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag></a>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="发起时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="截至时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="办理" width="110" align="center">
      <el-button type="primary" plain @click="getUserInfo">查看详情</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      let str
      if (status==='未受理')  str='draft'
      else if (status==='办理中')  str='deleted'
      else str='published'
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[str]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        console.log(response)
        this.list = response.data.items
        this.listLoading = false
      })
    },
    //一次就获取全部列表进行展示  查看详情是否需要再次请求？？？
    getUserInfo(){

    }
  },

}
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
