import { formatDate } from '../../../utils/date';
import { checkItemValid } from './utils';
import { createArticle, deleteArticle, listArticle, updateArticle } from '../../../api/article';

const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  searchKey: null,
};
const defaultItem = {
  id: null,
  title: null,
  intro: null,
  content: null,
};
export default {
  name: 'ArticleList',
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
      item: Object.assign({}, defaultItem),
      isUpdate: false,
    };
  },
  created() {
    this.getList();
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
      this.isUpdate = false;
      this.item = Object.assign({}, defaultItem);
    },
    handleUpdate(index, row) {
      this.dialogVisible = true;
      this.isUpdate = true;
      this.item = Object.assign({}, row);
    },
    handleDialogConfirm() {
      const checkResult = checkItemValid(this.item);

      if (typeof checkResult === 'string') {
        this.$alert(checkResult);
        return;
      }

      this.$confirm('是否要确认?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        if (this.isUpdate) {
          updateArticle(this.item.id, checkResult).then(response => {
            this.$message({
              message: '更新成功！',
              type: 'success',
            });
            this.dialogVisible = false;
            this.getList();
          });
        } else {
          createArticle(checkResult).then(response => {
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
    handleDelete(index, row) {
      this.$confirm('是否要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        deleteArticle(row.id).then(response => {
          this.$message({
            message: '删除成功！',
            type: 'success',
          });
          this.getList();
        });
      });
    },
    getList() {
      this.listLoading = true;
      listArticle(this.listQuery).then(response => {
        this.listLoading = false;
        this.list = response.data.list;
        this.total = response.data.total;
      });
    },
  },
};
