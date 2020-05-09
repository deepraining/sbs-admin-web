import request from '@/utils/request';

export function fetchList(params) {
  return request({
    url: '/adminRole/list',
    method: 'get',
    params,
  });
}

export function createRole(data) {
  return request({
    url: '/adminRole/create',
    method: 'post',
    data,
  });
}

export function updateRole(id, data) {
  return request({
    url: `/adminRole/update/${id}`,
    method: 'post',
    data,
  });
}

export function updateStatus(id, params) {
  return request({
    url: `/adminRole/updateStatus/${id}`,
    method: 'post',
    params,
  });
}

export function deleteRole(data) {
  return request({
    url: '/adminRole/delete',
    method: 'post',
    data,
  });
}

export function fetchAllRoleList() {
  return request({
    url: '/adminRole/listAll',
    method: 'get',
  });
}

export function listMenuByRole(roleId) {
  return request({
    url: `/adminRole/listMenu/${roleId}`,
    method: 'get',
  });
}

export function listResourceByRole(roleId) {
  return request({
    url: `/adminRole/listResource/${roleId}`,
    method: 'get',
  });
}

export function allocMenu(data) {
  return request({
    url: '/adminRole/allocMenu',
    method: 'post',
    data,
  });
}

export function allocResource(data) {
  return request({
    url: '/adminRole/allocResource',
    method: 'post',
    data,
  });
}
