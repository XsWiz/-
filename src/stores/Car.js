
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'
import { useUserStore } from './user'
// 接口  登陆购物车
import { insertCartAPI } from '@/apis/car'
import { findNewCartListApi } from '@/apis/car'
export const useCarStore=   defineStore('car', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)




  // 数据
  const carList = ref([])
  // 方法  添加购物车
  const addCar = async (goods) => {
    const { skuId, count }=goods
    if (isLogin.value) {
      // 登录后逻辑
      await insertCartAPI({ skuId, count })
      //
      const res = await findNewCartListApi()
      carList.value=res.result
    }
    else {
      const item = carList.value.find((item) => {
        goods.skuId === item.skuId
      })
      console.log('购买商品信息', goods)
      if (item) {
        item.count++
      }
      else {
        carList.value.push(goods)
      }
    }

  }

  // 方法  删除
  const delCar = (skuId) => {
    const idx = carList.value.findIndex((item) => {
      skuId===item.skuId
    })
    carList.value.splice(idx,1)
  }
  //方法 计算属性 计算购买物品综合 总价格
  const allCount = computed(() => carList.value.reduce((a, c) => a + c.count , 0))
  const allPrice = computed(() => carList.value.reduce((a, c) => a + c.count*c.price , 0))
  //方法 singlechacke
  const singleCheck = (skuId,selected) => {
    const item = carList.value.find((item) => item.skuId === skuId)
    item.selected=selected
  }
  // 方法 是否全选
    const isAll=computed(()=>carList.value.every((item)=>item.selected))
  //方法 让所有框都选中或者不选

  const allCheck = (selected) => {
    carList.value.forEach(item=>item.selected=selected)
  }
  // 方法 选中商品的价钱数量() => {

  const selectedCount = computed(() => carList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  const selectedPrice = computed(() => carList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price , 0))
  return {
    carList,
    allCount,
    allPrice,
    addCar,
    delCar,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice
  }
},
  // 引入   pinia-plugin-persistedstate插件
  {
    persist: true,
  }
)
