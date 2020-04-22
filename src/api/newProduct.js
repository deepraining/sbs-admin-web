import request from '@/utils/request';

export function fetchList(params) {
  return request({
    url: '/home/newProduct/list',
    method: 'get',
    params,
  });
}

export function updateRecommendStatus(data) {
  return request({
    url: '/home/newProduct/update/recommendStatus',
    method: 'post',
    data,
  });
}

export function deleteNewProduct(data) {
  return request({
    url: '/home/newProduct/delete',
    method: 'post',
    data,
  });
}

export function createNewProduct(data) {
  return request({
    url: '/home/newProduct/create',
    method: 'post',
    data,
  });
}

export function updateNewProductSort(params) {
  return request({
    url: `/home/newProduct/update/sort/${params.id}`,
    method: 'post',
    params,
  });
}
