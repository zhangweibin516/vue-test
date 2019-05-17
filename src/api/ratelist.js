import request from '@/utils/request'

export function fetchC5_SList(query) {
  return request({
    url: '/rate/c5_slist',
    method: 'get',
    params: query
  })
}
