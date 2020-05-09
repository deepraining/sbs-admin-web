import request from '@/utils/request';

export function listAllCate() {
  return request({
    url: '/adminResourceCategory/listAll',
    method: 'get',
  });
}

export function createResourceCategory(data) {
  return request({
    url: '/adminResourceCategory/create',
    method: 'post',
    data,
  });
}

export function updateResourceCategory(id, data) {
  return request({
    url: `/adminResourceCategory/update/${id}`,
    method: 'post',
    data,
  });
}

export function deleteResourceCategory(id) {
  return request({
    url: `/adminResourceCategory/delete/${id}`,
    method: 'post',
  });
}
