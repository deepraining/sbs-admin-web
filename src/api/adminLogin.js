import request from '../utils/request';
import { convertMapToParams } from '../utils';

export function login(username, password) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      username,
      password,
    },
  });
}

export function getInfo() {
  return request({
    url: '/admin/info',
    method: 'get',
  });
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post',
  });
}

export function fetchList(params) {
  return request({
    url: '/admin/list',
    method: 'get',
    params,
  });
}

export function createAdmin(data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data,
  });
}

export function updateAdmin(id, data) {
  return request({
    url: `/admin/update/${id}`,
    method: 'post',
    data,
  });
}

export function updateStatus(id, params) {
  return request({
    url: `/admin/updateStatus/${id}`,
    method: 'post',
    params: convertMapToParams(params),
  });
}

export function deleteAdmin(id) {
  return request({
    url: `/admin/delete/${id}`,
    method: 'post',
  });
}

export function getRoleByAdmin(id) {
  return request({
    url: `/admin/role/${id}`,
    method: 'get',
  });
}

export function allocRole(data) {
  return request({
    url: '/admin/role/update',
    method: 'post',
    data,
  });
}
