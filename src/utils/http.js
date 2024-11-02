
// axios基础封装
import axios from "axios";
const httpInstance=axios.create({
  // 接口基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 接口超时时间
  timeout:5000
})
// 拦截器

/* axios请求拦截器 */
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

/*  axios响应式拦截器 */
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})
//  暴露出去
export default httpInstance
