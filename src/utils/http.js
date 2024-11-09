// 登陆失败提示
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
// axios基础封装
import axios from "axios";
// 获取pinia的token数据
import { useUserStore } from '@/stores/userStores.js'
import { useRouter } from 'vue-router';
const router = useRouter()
const httpInstance = axios.create({
  // 接口基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 接口超时时间
  timeout:10000
})
// 拦截器

/* axios请求拦截器 */
httpInstance.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

/*  axios响应式拦截器 */
httpInstance.interceptors.response.use(res => res.data, e => {
// 统一错误处理
  ElMessage({
    type: 'warning',
    message:e.response.data.message
  })
  // 401 token 过期
  const userStore = useUserStore()
  if (e.response.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }

  return Promise.reject(e)
})
//  暴露出去
export default httpInstance
