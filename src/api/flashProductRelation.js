import request from '@/utils/request';

export function fetchList(params) {
  return request({
    url: '/flashProductRelation/list',
    method: 'get',
    params,
  });
}
export function createFlashProductRelation(data) {
  return request({
    url: '/flashProductRelation/create',
    method: 'post',
    data,
  });
}
export function deleteFlashProductRelation(id) {
  return request({
    url: `/flashProductRelation/delete/${id}`,
    method: 'post',
  });
}
export function updateFlashProductRelation(id, data) {
  return request({
    url: `/flashProductRelation/update/${id}`,
    method: 'post',
    data,
  });
}
