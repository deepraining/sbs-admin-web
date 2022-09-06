<template>
  <div class="app-container clearfix">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search" />
        <span>筛选搜索</span>
        <el-button style="float:right" type="primary" size="small" @click="handleSearchList">
          查询搜索
        </el-button>
        <el-button style="float:right;margin-right: 15px" size="small" @click="handleResetSearch">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input
              v-model="listQuery.searchKey"
              class="input-width"
              placeholder="名称"
              clearable
              style="width: 250px;"
              @change="handleSearchList"
            />
          </el-form-item>
          <!-- 只有一个input时，按enter会自动提交 -->
          <el-form-item v-show="false">
            <el-input />
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" />
      <span>数据列表</span>
      <el-button v-if="false" size="mini" class="btn-add" @click="handleAdd">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table v-loading="listLoading" :data="list" style="width: 100%;">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="email" label="电子邮箱" />
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.createTime | formatDateTime }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleUpdate(scope.$index, scope.row)">
              更新
            </el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[10, 20, 50]"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      :title="isUpdate ? '更新前端用户' : '添加前端用户'"
      :visible.sync="dialogVisible"
      width="600px"
    >
      <el-form :model="item" label-width="150px" size="small">
        <el-form-item label="用户名：" required>
          <el-input v-model="item.username" style="width: 300px" :disabled="isUpdate" />
        </el-form-item>
        <el-form-item label="电子邮箱：" required>
          <el-input v-model="item.email" style="width: 300px" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="handleDialogConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./index.js"></script>
