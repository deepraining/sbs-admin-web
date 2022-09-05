import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import { getToken } from './auth';
import store from '../store';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    // Do something with request error
    console.error(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非0是抛错 可结合自己业务进行修改
     * 0:操作成功, 1:操作失败, 2:参数检验失败, 3:未登录或 token 已经过期, 4:没有相关权限
     */
    const res = response.data;
    if (res.code !== 0) {
      Message({
        message: res.message,
        type: 'error',
        duration: 3 * 1000,
      });

      // 未登录或 token 已经过期
      if (res.code === 3) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            window.location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      }
      return Promise.reject('error');
    }
    return response.data;
  },
  error => {
    console.error(error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
