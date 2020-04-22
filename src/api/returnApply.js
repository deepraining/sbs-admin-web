import request from '@/utils/request';

export function fetchList(params) {
  return request({
    url: '/returnApply/list',
    method: 'get',
    params,
  });
}

export function deleteApply(params) {
  return request({
    url: '/returnApply/delete',
    method: 'post',
    params,
  });
}
export function updateApplyStatus(id, data) {
  return request({
    url: `/returnApply/update/status/${id}`,
    method: 'post',
    data,
  });
}

export function getApplyDetail(id) {
  return request({
    url: `/returnApply/${id}`,
    method: 'get',
  });
}
