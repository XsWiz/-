/*
params: {
  orderState:0,   tab切换
  page:1,          分页器
  pageSize:2
}
*/

import request from '@/utils/http'
export const getUserOrder = (params) => {
  return request({
    url: '/member/order',
    method: 'GET',
    params
  })
}
