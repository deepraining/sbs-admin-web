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
              v-model="listQuery.keyword"
              class="input-width"
              placeholder="帐号/姓名"
              clearable
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
      <el-button size="mini" class="btn-add" style="margin-left: 20px" @click="handleAdd">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="adminTable" v-loading="listLoading" :data="list" style="width: 100%;">
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column label="帐号" align="center">
          <template slot-scope="scope">
            {{ scope.row.username }}
          </template>
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template slot-scope="scope">
            {{ scope.row.nickname }}
          </template>
        </el-table-column>
        <el-table-column label="邮箱" align="center">
          <template slot-scope="scope">
            {{ scope.row.email }}
          </template>
        </el-table-column>
        <el-table-column label="添加时间" width="160" align="center">
          <template slot-scope="scope">
            {{ scope.row.createTime | formatDateTime }}
          </template>
        </el-table-column>
        <el-table-column label="最后登录" width="160" align="center">
          <template slot-scope="scope">
            {{ scope.row.lastLoginTime | formatDateTime }}
          </template>
        </el-table-column>
        <el-table-column label="是否启用" width="140" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="0"
              @change="handleStatusChange(scope.$index, scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleSelectRole(scope.$index, scope.row)">
              分配角色
            </el-button>
            <el-button size="mini" type="text" @click="handleUpdate(scope.$index, scope.row)">
              编辑
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
    <el-dialog :title="isEdit ? '编辑用户' : '添加用户'" :visible.sync="dialogVisible" width="40%">
      <el-form ref="adminForm" :model="admin" label-width="150px" size="small">
        <el-form-item label="帐号：">
          <el-input v-model="admin.username" style="width: 250px" :disabled="isEdit" />
        </el-form-item>
        <el-form-item label="姓名：">
          <el-input v-model="admin.nickname" style="width: 250px" />
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input v-model="admin.email" style="width: 250px" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="admin.password" type="password" style="width: 250px" />
        </el-form-item>
        <el-form-item label="备注：">
          <el-input v-model="admin.note" type="textarea" :rows="5" style="width: 250px" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="handleDialogConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="分配角色" :visible.sync="allocDialogVisible" width="30%">
      <el-select
        v-model="allocRoleIds"
        multiple
        placeholder="请选择"
        size="small"
        style="width: 80%"
      >
        <el-option v-for="item in allRoleList" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="allocDialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="handleAllocDialogConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  fetchList,
  createAdmin,
  updateAdmin,
  updateStatus,
  deleteAdmin,
  getRoleByAdmin,
  allocRole,
} from '../../../api/adminLogin';
import { fetchAllRoleList } from '../../../api/adminRole';
import { formatDate } from '../../../utils/date';

const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  keyword: null,
};
const defaultAdmin = {
  id: null,
  username: null,
  password: null,
  nickname: null,
  email: null,
  note: null,
};
export default {
  name: 'AdminList',
  filters: {
    formatDateTime(time) {
      if (time == null || time === '') {
        return 'N/A';
      }
      const date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
    },
  },
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      list: null,
      total: null,
      listLoading: false,
      dialogVisible: false,
      admin: Object.assign({}, defaultAdmin),
      isEdit: false,
      allocDialogVisible: false,
      allocRoleIds: [],
      allRoleList: [],
      allocAdminId: null,
    };
  },
  created() {
    this.getList();
    this.getAllRoleList();
  },
  methods: {
    handleResetSearch() {
      this.listQuery = Object.assign({}, defaultListQuery);
    },
    handleSearchList() {
      this.listQuery.pageNum = 1;
      this.getList();
    },
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getList();
    },
    handleAdd() {
      this.dialogVisible = true;
      this.isEdit = false;
      this.admin = Object.assign({}, defaultAdmin);
    },
    handleStatusChange(index, row) {
      this.$confirm('是否要修改该状态?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          updateStatus(row.id, { status: row.status }).then(response => {
            this.$message({
              type: 'success',
              message: '修改成功!',
            });
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改',
          });
          this.getList();
        });
    },
    handleDelete(index, row) {
      this.$confirm('是否要删除该用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        deleteAdmin(row.id).then(response => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          this.getList();
        });
      });
    },
    handleUpdate(index, row) {
      this.dialogVisible = true;
      this.isEdit = true;
      this.admin = Object.assign({}, row);
    },
    handleDialogConfirm() {
      this.$confirm('是否要确认?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        if (this.isEdit) {
          updateAdmin(this.admin.id, this.admin).then(response => {
            this.$message({
              message: '修改成功！',
              type: 'success',
            });
            this.dialogVisible = false;
            this.getList();
          });
        } else {
          createAdmin(this.admin).then(response => {
            this.$message({
              message: '添加成功！',
              type: 'success',
            });
            this.dialogVisible = false;
            this.getList();
          });
        }
      });
    },
    handleAllocDialogConfirm() {
      this.$confirm('是否要确认?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        const params = new URLSearchParams();
        params.append('userId', this.allocAdminId);
        params.append('roleIds', this.allocRoleIds);
        allocRole(params).then(response => {
          this.$message({
            message: '分配成功！',
            type: 'success',
          });
          this.allocDialogVisible = false;
        });
      });
    },
    handleSelectRole(index, row) {
      this.allocAdminId = row.id;
      this.allocDialogVisible = true;
      this.getRoleListByAdmin(row.id);
    },
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.listLoading = false;
        this.list = response.data.list;
        this.total = response.data.total;
      });
    },
    getAllRoleList() {
      fetchAllRoleList().then(response => {
        this.allRoleList = response.data;
      });
    },
    getRoleListByAdmin(userId) {
      getRoleByAdmin(userId).then(response => {
        const allocRoleList = response.data;
        this.allocRoleIds = [];
        if (allocRoleList != null && allocRoleList.length > 0) {
          for (let i = 0; i < allocRoleList.length; i++) {
            this.allocRoleIds.push(allocRoleList[i].id);
          }
        }
      });
    },
  },
};
</script>
<style></style>
