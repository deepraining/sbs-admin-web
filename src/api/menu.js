import request from '@/utils/request';

export function fetchList(parentId, params) {
  return request({
    url: `/adminMenu/list/${parentId}`,
    method: 'get',
    params,
  });
}

export function deleteMenu(id) {
  return request({
    url: `/adminMenu/delete/${id}`,
    method: 'post',
  });
}

export function createMenu(data) {
  return request({
    url: '/adminMenu/create',
    method: 'post',
    data,
  });
}

export function updateMenu(id, data) {
  return request({
    url: `/adminMenu/update/${id}`,
    method: 'post',
    data,
  });
}

export function getMenu(id) {
  return request({
    url: `/adminMenu/${id}`,
    method: 'get',
  });
}

export function updateHidden(id, params) {
  return request({
    url: `/adminMenu/updateHidden/${id}`,
    method: 'post',
    params,
  });
}

export function fetchTreeList() {
  return request({
    url: '/adminMenu/treeList',
    method: 'get',
  });
}
