import request from '../utils/request';

export function listFrontUser(params) {
  return request({
    url: '/frontUser/list',
    method: 'get',
    params,
  });
}

export function createFrontUser(data) {
  return request({
    url: '/frontUser/create',
    method: 'post',
    data,
  });
}

export function updateFrontUser(id, data) {
  return request({
    url: `/frontUser/update/${id}`,
    method: 'post',
    data,
  });
}

export function deleteFrontUser(id) {
  return request({
    url: `/frontUser/delete/${id}`,
    method: 'post',
  });
}
