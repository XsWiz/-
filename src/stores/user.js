//管理用户数据
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from '@/apis/user.js'
export const useUserStore = defineStore('user', () => {
  // 1 定义用户数据  state
  const userInfo = ref({})
  // 2 定义获取接口数据 action
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value=res.result
  }
  // 3
  return {
    userInfo,
    getUserInfo
  }
})
