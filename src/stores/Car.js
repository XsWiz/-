
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCarStore=   defineStore('car', () => {
  // 数据
  const carList = ref([])
  // 方法  添加购物车
  const addCar = (goods) => {
    const item = carList.value.find((item) => {
      goods.skuId === item.skuId
    })
    if (item) {
      item.count++
    }
    else {
      carList.value.push(goods)
    }
  }
  //
  return {
    carList,
    addCar
  }
},
  // 引入   pinia-plugin-persistedstate插件
  {
    persist: true,
  }
)
