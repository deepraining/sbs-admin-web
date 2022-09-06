import request from '../utils/request';

export function listArticle(params) {
  return request({
    url: '/article/list',
    method: 'get',
    params,
  });
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data,
  });
}

export function updateArticle(id, data) {
  return request({
    url: `/article/update/${id}`,
    method: 'post',
    data,
  });
}

export function deleteArticle(id) {
  return request({
    url: `/article/delete/${id}`,
    method: 'post',
  });
}
