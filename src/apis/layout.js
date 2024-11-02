//  获取分类请求
import httpInstance from '@/utils/http'

export function getCategoryAPI() {
  return httpInstance({
    url: 'home/category/head'
  })
}
