import request from '@/utils/http'
// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取最新购物车
export const findNewCartListApi = () => {
  return request({
    url:'/member/cart'
  })
}
