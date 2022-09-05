import request from '../utils/request';

export function fetchList(params) {
  return request({
    url: '/adminResource/list',
    method: 'get',
    params,
  });
}

export function createResource(data) {
  return request({
    url: '/adminResource/create',
    method: 'post',
    data,
  });
}

export function updateResource(id, data) {
  return request({
    url: `/adminResource/update/${id}`,
    method: 'post',
    data,
  });
}

export function deleteResource(id) {
  return request({
    url: `/adminResource/delete/${id}`,
    method: 'post',
  });
}

export function fetchAllResourceList() {
  return request({
    url: '/adminResource/listAll',
    method: 'get',
  });
}
