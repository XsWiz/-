//管理用户数据
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from '@/apis/user.js'
import { useCarStore } from '@/stores/carStores'

export const useUserStore = defineStore('user', () => {
  const carStores = useCarStore()
  // 1 定义用户数据  state
  const userInfo = ref({})
  // 2 定义获取接口数据 action
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value=res.result
  }
  // 4 清空用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    // 清楚购物车
    carStores.clearCar()
  }
  // 3
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }

},
  // 引入   pinia-plugin-persistedstate插件
  {
    persist: true,
  }

)
