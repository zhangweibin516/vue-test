import request from '@/utils/requestCross'

export function fetchC5_SList(query) {
  return request({
    url: '/rate/c5_slist',
    method: 'get',
    params: query
  })
}

export function getC5_SList(query) {
  return request({
    url: '/py/showResult_C5_Steam.json',
    method: 'get',
    params: ''
  })
}
