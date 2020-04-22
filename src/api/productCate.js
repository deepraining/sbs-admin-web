import request from '@/utils/request';

export function fetchList(parentId, params) {
  return request({
    url: `/productCategory/list/${parentId}`,
    method: 'get',
    params,
  });
}
export function deleteProductCate(id) {
  return request({
    url: `/productCategory/delete/${id}`,
    method: 'post',
  });
}

export function createProductCate(data) {
  return request({
    url: '/productCategory/create',
    method: 'post',
    data,
  });
}

export function updateProductCate(id, data) {
  return request({
    url: `/productCategory/update/${id}`,
    method: 'post',
    data,
  });
}

export function getProductCate(id) {
  return request({
    url: `/productCategory/${id}`,
    method: 'get',
  });
}

export function updateShowStatus(data) {
  return request({
    url: '/productCategory/update/showStatus',
    method: 'post',
    data,
  });
}

export function updateNavStatus(data) {
  return request({
    url: '/productCategory/update/navStatus',
    method: 'post',
    data,
  });
}

export function fetchListWithChildren() {
  return request({
    url: '/productCategory/list/withChildren',
    method: 'get',
  });
}
