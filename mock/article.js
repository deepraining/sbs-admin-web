export const list = {
  code: 0,
  message: '操作成功',
  data: {
    pageNum: 1,
    pageSize: 10,
    totalPage: 10,
    total: 99,
    list: '.'
      .repeat(10)
      .split('')
      .map((dot, i) => ({
        id: i + 1,
        title: `title${i}`,
        readCount: i * 11,
        supportCount: i * 12,
        intro: `intro${i}`,
        content: `content${i}`,
        frontUserId: i + 1,
        status: i % 2,
        createTime: '2018-09-29T05:55:30.000+0000',
        updateTime: '2018-09-29T05:55:39.000+0000',
        frontUser: {
          id: i + 1,
          username: `username${i}`,
          email: `test@qq.com${i}`,
          password: `password${i}`,
          status: i % 2,
          createTime: '2018-09-29T05:55:30.000+0000',
          updateTime: '2018-09-29T05:55:39.000+0000',
        },
      })),
  },
};

export const create = {
  code: 0,
  message: '操作成功',
};
