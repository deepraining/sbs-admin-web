export default {
  code: 0,
  message: '操作成功',
  data: {
    pageNum: 1,
    pageSize: 5,
    totalPage: 1,
    total: 3,
    list: [
      {
        id: 1,
        name: '商品管理员',
        description: '只能查看及操作商品',
        createTime: '2020-02-03T08:50:37.000+0000',
        status: 1,
        sort: 0,
      },
      {
        id: 2,
        name: '订单管理员',
        description: '只能查看及操作订单',
        createTime: '2018-09-30T07:53:45.000+0000',
        status: 1,
        sort: 0,
      },
      {
        id: 5,
        name: '超级管理员',
        description: '拥有所有查看和操作功能',
        createTime: '2020-02-02T07:11:05.000+0000',
        status: 1,
        sort: 0,
      },
    ],
  },
};
