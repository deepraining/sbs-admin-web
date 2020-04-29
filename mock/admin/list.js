export default {
  code: 200,
  message: '操作成功',
  data: {
    pageNum: 1,
    pageSize: 10,
    totalPage: 1,
    total: 5,
    list: [
      {
        id: 1,
        username: 'test',
        password:
          '$2a$10$NZ5o7r2E.ayT2ZoxgjlI.eJ6OEYqjH7INR/F.mXDbjZJi9HF0YCVG',
        avatar: '/images/avatar.jpg',
        email: 'test@qq.com',
        nickname: '测试账号',
        note: null,
        createTime: '2018-09-29T05:55:30.000+0000',
        lastLoginTime: '2018-09-29T05:55:39.000+0000',
        status: 1,
      },
      {
        id: 3,
        username: 'admin',
        password:
          '$2a$10$.E1FokumK5GIXWgKlg.Hc.i/0/2.qdAwYFL1zc5QHdyzpXOr38RZO',
        avatar:
          'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg.jpg',
        email: 'admin@163.com',
        nickname: '系统管理员',
        note: '系统管理员',
        createTime: '2018-10-08T05:32:47.000+0000',
        lastLoginTime: '2019-04-20T04:45:16.000+0000',
        status: 1,
      },
      {
        id: 4,
        username: 'macro',
        password:
          '$2a$10$Bx4jZPR7GhEpIQfefDQtVeS58GfT5n6mxs/b4nLLK65eMFa16topa',
        avatar: 'string',
        email: 'macro@qq.com',
        nickname: 'macro',
        note: 'macro专用',
        createTime: '2019-10-06T07:53:51.000+0000',
        lastLoginTime: '2020-02-03T06:55:55.000+0000',
        status: 1,
      },
      {
        id: 6,
        username: 'productAdmin',
        password:
          '$2a$10$6/.J.p.6Bhn7ic4GfoB5D.pGd7xSiD1a9M6ht6yO0fxzlKJPjRAGm',
        avatar: null,
        email: 'product@qq.com',
        nickname: '商品管理员',
        note: '只有商品权限',
        createTime: '2020-02-07T08:15:08.000+0000',
        lastLoginTime: null,
        status: 1,
      },
      {
        id: 7,
        username: 'orderAdmin',
        password:
          '$2a$10$UqEhA9UZXjHHA3B.L9wNG.6aerrBjC6WHTtbv1FdvYPUI.7lkL6E.',
        avatar: null,
        email: 'order@qq.com',
        nickname: '订单管理员',
        note: '只有订单管理权限',
        createTime: '2020-02-07T08:15:50.000+0000',
        lastLoginTime: null,
        status: 1,
      },
    ],
  },
};
